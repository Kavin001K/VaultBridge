import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 spring-press",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] border border-emerald-400/20 rounded-2xl hover:brightness-110 hover:-translate-y-1 font-black uppercase tracking-[0.2em]",
        executive:
          "bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] border border-emerald-400/20 rounded-2xl hover:brightness-110 hover:-translate-y-1 font-black uppercase tracking-[0.2em] btn-executive",
        glass:
          "bg-white/5 border border-white/10 backdrop-blur-md text-zinc-300 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:text-white hover:-translate-y-0.5 font-black uppercase tracking-[0.15em] shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive-border shadow-sm hover:bg-destructive/90 rounded-2xl font-black uppercase tracking-widest",
        outline:
          "border border-white/10 bg-transparent hover:bg-white/5 text-zinc-300 rounded-2xl font-black uppercase tracking-widest",
        secondary:
          "bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white rounded-2xl font-black uppercase tracking-widest",
        ghost:
          "hover:bg-zinc-800/50 hover:text-zinc-100 rounded-2xl font-black uppercase tracking-widest",
        link: "text-emerald-500 underline-offset-4 hover:underline font-black uppercase tracking-widest",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-14 rounded-2xl px-10 text-base",
        xl: "h-20 rounded-[1.5rem] px-14 text-xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px) scale(0.96)`
        requestAnimationFrame(() => {
          btn.style.transform = ""
        })
        onClick?.(e)
      },
      [onClick],
    )

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
