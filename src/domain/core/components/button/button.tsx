import { FC, PropsWithChildren } from 'react'
import { buttonRecipe, ButtonVariantProps } from './button-recipe'

type ButtonProps = ButtonVariantProps &
  PropsWithChildren & {
    onClick?: () => void
  }

export const Button: FC<ButtonProps> = ({ children, onClick, background }) => {
  return (
    <button onClick={onClick} className={buttonRecipe({ background })}>
      {children}
    </button>
  )
}
