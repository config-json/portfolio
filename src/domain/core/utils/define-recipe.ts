import { cn } from './cn'

type Recipe = {
  base: string
  variants: Record<string, Record<string, string>>
}

type DefineRecipeProps<T extends Recipe> = {
  [K in keyof T['variants']]: keyof T['variants'][K]
}

type RecipeVariantsArray<T extends Recipe> = [
  keyof T['variants'],
  Record<string, string>,
][]

export const defineRecipe = <T extends Recipe>(recipe: T) => {
  return (props: DefineRecipeProps<T>) => {
    const variants = Object.entries(recipe.variants) as RecipeVariantsArray<T>

    const classNames = variants.map(([variantKey, variantValues]) => {
      const variantValue = props[variantKey as keyof typeof props] as string
      return variantValues[variantValue]
    })

    return cn(recipe.base, ...classNames)
  }
}

export type RecipeProps<T extends (...args: any[]) => string> = Parameters<T>[0]
