import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios'
import type {ICocktails, IIngredient} from "@/types/type";

export const useRootStore = defineStore('root', () => {
  const ingredients = ref<IIngredient[]>([])
  const cocktails = ref<ICocktails[]>([])
  const ingredient = ref<string>('')

  const getIngredients = async (): Promise<void> => {
    const response = await axios.get(`${import.meta.env.VITE_FB_URL}list.php?i=list`)
    ingredients.value = response.data.drinks
  }

  const getCocktails = async (ingredient: string): Promise<void> => {
    const response = await axios.get(`${import.meta.env.VITE_FB_URL}filter.php?i=${ingredient}`)
    cocktails.value = response.data.drinks
  }

  const setIngredient = (): void => {
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
