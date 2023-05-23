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
        'bg-light-blue-900/80 hover:bg-light-blue-300/50 text-white hover:text-white',
    },
    size: {
      day: 'h-auto px-2 py-1 gap-0 text-sm btn-sm',
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
    isSelected: {
      true: 'bg-light-blue-300/80 hover:bg-light-blue-300/80 text-white hover:text-white pointer-events-none',
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
  (
    { className, color, size, w, radii, type = 'button', isSelected, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ color, size, w, radii, isSelected, className }),
        )}
        ref={ref}
        type={type}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
