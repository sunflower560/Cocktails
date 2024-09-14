import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios'
import { INGREDIENTS_URL, COCKTAILS_BY_INGREDIENT_URL } from '@/constants'
import type {ICocktails, IIngredient} from "@/types/type";


export const useRootStore = defineStore('root', () => {
  const ingredients = ref<IIngredient[]>([])
  const cocktails = ref<ICocktails[]>([])
  const ingredient = ref<string>('')

  const getIngredients = async () => {
    const response = await axios.get(INGREDIENTS_URL)
    ingredients.value = response.data.drinks
  }

  const getCocktails = async (ingredient: string) => {
    const response = await axios.get(`${COCKTAILS_BY_INGREDIENT_URL}${ingredient}`)
    cocktails.value = response.data.drinks
  }

  const setIngredient = () => {
    ingredient.value = ''
  }

  return {
    getIngredients,
    getCocktails,
    setIngredient,
    ingredients,
    ingredient,
    cocktails
  }
})
