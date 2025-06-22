import { FC, PropsWithChildren } from 'react'
import { buttonRecipe } from './button-recipe'

type ButtonProps = PropsWithChildren & {
  onClick?: () => void
  background: 'white' | 'accent' | 'stroke'
}

export const Button: FC<ButtonProps> = ({ children, onClick, background }) => {
  return (
    <button onClick={onClick} className={buttonRecipe({ background })}>
      {children}
    </button>
  )
}
