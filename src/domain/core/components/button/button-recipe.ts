import { cn } from '../../utils/cn'
import { defineRecipe, RecipeProps } from '../../utils/define-recipe'

export const buttonRecipe = defineRecipe({
  base: cn(
    'rounded-sm border-2 py-1.5 px-3',
    'transition duration-300 hover:bg-white hover:text-background hover:border-white',
  ),
  variants: {
    background: {
      white: 'bg-white text-background border-white hover:opacity-70',
      accent: 'bg-accent text-white border-accent',
      stroke: 'border-white text-white',
    },
  },
})

export type ButtonVariantProps = RecipeProps<typeof buttonRecipe>
