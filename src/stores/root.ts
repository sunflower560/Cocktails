import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios'
import { INGREDIENTS_URL, COCKTAILS_BY_INGREDIENT_URL } from '@/constants'
import type {IIngredient, ICocktails} from "@/types/type";

export const useRootStore = defineStore('root', () => {
  const ingredients: IIngredient = ref([])
  const cocktails: ICocktails = ref([])

  const getIngredients = async () => {
    const data = await axios.get(INGREDIENTS_URL)
    ingredients.value = data?.data?.drinks
  }

  const getCocktails = async (ingredient: string) => {
    const data = await axios.get(`${COCKTAILS_BY_INGREDIENT_URL}${ingredient}`)
    cocktails.value = data?.data?.drinks
  }

  return {
    getIngredients,
    getCocktails,
    ingredients,
    cocktails
  }
})
