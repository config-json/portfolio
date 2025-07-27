import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { buttonRecipe, ButtonVariantProps } from './button-recipe'
import { cn } from '../../utils/cn'

type ButtonProps = ButtonVariantProps &
  PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
  children,
  background,
  className,
  ...restProps
}) => {
  return (
    <button className={cn(className, buttonRecipe({ background }))} {...restProps}>
      {children}
    </button>
  )
}
