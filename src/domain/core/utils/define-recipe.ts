import { cn } from "./cn"

type Recipe<K extends string, V extends string> = {
    base: string
    variants: Record<K, Record<V, string>>
}

export const defineRecipe = <K extends string, V extends string>(recipe: Recipe<K, V>) => {
    return (props: Record<K, V>) => {
        const variants = Object.entries(recipe.variants) as [K, Record<V, string>][];

        const classNames = variants.map(([variantKey, variantValues]) => {
            const variantValue = props[variantKey]
            return variantValues[variantValue]
        })

        return cn(recipe.base, ...classNames)
    }
}

export type RecipeProps<T extends (...args: any[]) => string> = Parameters<T>[0];