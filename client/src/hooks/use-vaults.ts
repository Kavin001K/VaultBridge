import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { type CreateVaultRequest, type VaultResponse } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

// === QUERY HOOKS ===

// Get Vault by ID
export function useGetVault(id: string) {
  return useQuery({
    queryKey: [api.vaults.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.vaults.get.path, { id });
      const res = await fetch(url);

      if (res.status === 404) return null;
      if (res.status === 410) throw new Error("This vault has expired or been deleted.");
      if (!res.ok) throw new Error("Failed to fetch vault");

      return api.vaults.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
    retry: false,
  });
}

// Resolve Short Code
export function useResolveCode() {
  return useMutation({
    mutationFn: async (code: string) => {
      const url = buildUrl(api.vaults.resolveCode.path, { code });
      const res = await fetch(url);
      if (res.status === 404) throw new Error("Vault not found");
      if (!res.ok) throw new Error("Failed to resolve code");
      return api.vaults.resolveCode.responses[200].parse(await res.json());
    }
  });
}

// === MUTATION HOOKS ===

// Create Vault
export function useCreateVault() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateVaultRequest) => {
      // Validate input at runtime
      const validated = api.vaults.create.input.parse(data);

      const res = await fetch(api.vaults.create.path, {
        method: api.vaults.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to create vault");
      }

      return api.vaults.create.responses[201].parse(await res.json());
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Creation Failed",
        description: error.message,
      });
    },
  });
}

// Get Chunk Upload URL
export function useGetChunkUploadUrl() {
  return useMutation({
    mutationFn: async ({
      vaultId,
      fileId,
      chunkIndex,
      size
    }: {
      vaultId: string,
      fileId: string,
      chunkIndex: number,
      size: number
    }) => {
      const url = buildUrl(api.chunks.getUploadUrl.path, {
        id: vaultId,
        fileId,
        chunkIndex
      });

      const res = await fetch(url, {
        method: api.chunks.getUploadUrl.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ size }),
      });

      if (!res.ok) throw new Error("Failed to get upload URL");
      return api.chunks.getUploadUrl.responses[200].parse(await res.json());
    }
  });
}

// Mark Chunk as Uploaded
export function useMarkChunkUploaded() {
  return useMutation({
    mutationFn: async ({
      vaultId,
      fileId,
      chunkIndex,
      storagePath
    }: {
      vaultId: string,
      fileId: string,
      chunkIndex: number,
      storagePath: string
    }) => {
      const url = buildUrl(api.chunks.markUploaded.path, {
        id: vaultId,
        fileId,
        chunkIndex
      });

      const res = await fetch(url, {
        method: api.chunks.markUploaded.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storagePath }),
      });

      if (!res.ok) throw new Error("Failed to confirm upload");
      return api.chunks.markUploaded.responses[200].parse(await res.json());
    }
  });
}

// Get Download URL for Chunk
export function useGetChunkDownloadUrl() {
  return useMutation({
    mutationFn: async ({
      vaultId,
      fileId,
      chunkIndex
    }: {
      vaultId: string,
      fileId: string,
      chunkIndex: number
    }) => {
      const url = buildUrl(api.chunks.getDownloadUrl.path, {
        id: vaultId,
        fileId,
        chunkIndex
      });

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to get download URL");
      return api.chunks.getDownloadUrl.responses[200].parse(await res.json());
    }
  });
}

// Track Download (increment count)
export function useTrackDownload() {
  return useMutation({
    mutationFn: async (vaultId: string) => {
      const url = buildUrl(api.vaults.download.path, { id: vaultId });
      const res = await fetch(url, { method: 'POST' });
      if (!res.ok) throw new Error("Failed to track download");
      return await res.json();
    }
  });
}

// Split-code lookup: Get vault by 3-digit lookupId (zero-knowledge access)
export function useCodeLookup() {
  return useMutation({
    mutationFn: async (lookupId: string) => {
      const url = buildUrl(api.vaults.codeLookup.path, { lookupId });
      const res = await fetch(url);

      if (res.status === 404) throw new Error("Invalid code or vault expired");
      if (res.status === 410) throw new Error("Vault expired or download limit reached");
      if (!res.ok) throw new Error("Failed to lookup vault");

      return api.vaults.codeLookup.responses[200].parse(await res.json());
    }
  });
}

// Update clipboard content
export function useUpdateClipboard() {
  return useMutation({
    mutationFn: async ({
      lookupId,
      encryptedClipboardText,
      wrappedKey
    }: {
      lookupId: string,
      encryptedClipboardText: string,
      wrappedKey: string
    }) => {
      const url = buildUrl(api.vaults.updateClipboard.path, { lookupId });
      const res = await fetch(url, {
        method: api.vaults.updateClipboard.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ encryptedClipboardText, wrappedKey })
      });

      if (!res.ok) throw new Error("Failed to update clipboard");
      return api.vaults.updateClipboard.responses[200].parse(await res.json());
    }
  });
}

// Sync clipboard content (Poll)
export function useClipboardSync(lookupId: string, enabled: boolean) {
  return useQuery({
    queryKey: [api.vaults.getClipboard.path, lookupId],
    queryFn: async () => {
      const url = buildUrl(api.vaults.getClipboard.path, { lookupId });
      const res = await fetch(url);

      if (res.status === 404) return null;
      if (res.status === 410) throw new Error("Vault expired");
      if (!res.ok) throw new Error("Sync failed");

      return api.vaults.getClipboard.responses[200].parse(await res.json());
    },
    enabled: enabled && !!lookupId,
    refetchInterval: 3000, // Poll every 3s
    retry: false
  });
}
