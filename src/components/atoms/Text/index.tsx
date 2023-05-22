import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes } from 'react'
import { cn } from 'utils/cls-merge'

import { Slot } from '@radix-ui/react-slot'

const textVariants = cva('leading-6 tracking-wider', {
  variants: {
    display: {
      flex: 'flex items-center',
    },
    size: {
      '2xl': 'text-5xl',
      xl: 'text-2xl',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
      xxs: 'text-[11px]',
    },
    type: {
      white: 'text-white',
      primary: 'text-ligthblue-500',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    type: 'white',
    size: 'md',
    weight: 'medium',
  },
})

export type TextProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean
  }

const Text = ({
  type,
  size,
  className,
  weight,
  display,
  asChild,
  ...props
}: TextProps) => {
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp
      className={cn(textVariants({ type, size, weight, display, className }))}
      {...props}
    />
  )
}

export { Text }
