import React, { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  loading?: boolean
  href?: string
  target?: string
  rel?: string
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-xl focus:outline-none focus-visible:ring-1 focus-visible:ring-[#52525b] disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

  const variants = {
    primary:
      'bg-[#fafafa] text-[#09090b] hover:bg-[#e4e4e7] active:bg-[#d4d4d8]',
    secondary:
      'bg-[#18181b] text-text-primary hover:bg-[#27272a] border border-[#27272a]',
    outline:
      'bg-transparent border border-[#3f3f46] text-text-primary hover:bg-[#18181b]',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-[#18181b]',
    link: 'bg-transparent text-text-secondary hover:text-text-primary underline-offset-4 hover:underline p-0 h-auto',
  }

  const sizes = {
    sm: 'h-9 px-4 text-sm gap-1.5',
    md: 'h-10 px-5 text-sm gap-2',
    lg: 'h-11 px-6 text-sm gap-2',
    icon: 'h-9 w-9 p-0',
  }

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    variant !== 'link' && sizes[size],
    className
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={props.onClick as any}
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
        {children}
      </a>
    )
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
      {children}
    </button>
  )
}
