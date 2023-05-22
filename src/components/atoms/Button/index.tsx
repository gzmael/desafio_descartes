import { ButtonHTMLAttributes, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../../utils/cls-merge'

export const defaultStyle =
  'flex items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed leading-none cursor-pointer transition-all  disabled:opacity-50 disabled:pointer-events-none focus:outline-none active:scale-95'

const buttonVariants = cva(defaultStyle, {
  variants: {
    color: {
      icon: 'bg-transparent hover:bg-transparent transition-all focus:ring-none',
      primary:
        'bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
    },
    size: {
      sm: 'h-8 pl-2 pr-3 gap-1 text-sm btn-sm',
      md: 'h-10 pl-3 pr-4 gap-2 text-base btn-md',
      auto: 'h-auto pl-5 pr-6 gap-2 text-lg btn-md',
    },
    radii: {
      none: 'rounded-none',
      xs: 'rounded',
    },
    w: {
      full: 'w-full',
      half: 'w-3/4',
      auto: 'w-auto',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    w: 'auto',
    radii: 'xs',
  },
  compoundVariants: [
    {
      color: 'icon',
      size: 'sm',
      class: 'p-1.5',
    },
    {
      color: 'icon',
      size: 'md',
      class: 'p-2',
    },
    {
      color: 'icon',
      size: 'auto',
      class: 'p-3.5',
    },
  ],
})

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, w, radii, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ color, size, w, radii, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
