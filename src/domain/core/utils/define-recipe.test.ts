import { expect, test } from 'vitest'
import { defineRecipe } from './define-recipe'

test('generates classes given recipe', () => {
  // given
  const recipe = {
    base: 'base-class',
    variants: {
      color: {
        red: 'red',
        green: 'green',
      },
      background: {
        white: 'white',
        black: 'black',
      },
    },
  }

  // when
  const generateRecipe = defineRecipe(recipe)

  // then
  expect(generateRecipe({ color: 'green', background: 'black' })).toBe(
    'base-class green black',
  )
})
