import { cn } from "@/lib/utils"

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Kbd({ children, className, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "px-2 py-1 text-xs font-semibold",
        "bg-muted border border-border rounded",
        "text-foreground",
        "shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
}
