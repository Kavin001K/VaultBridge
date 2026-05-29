import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { ShieldCheck, ShieldAlert } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex items-start gap-4 text-left">
              {/* Dynamic premium visual indicators */}
              {props.variant === "destructive" ? (
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                  <ShieldAlert className="w-5 h-5 animate-pulse" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center text-[#10b981] shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              )}
              
              <div className="grid gap-1 pt-0.5">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
