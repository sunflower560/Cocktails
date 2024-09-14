<template>
  <main-layout is-back-button-visible @back="goBack" :img-url="cocktail?.strDrinkThumb || imgUrl">
    <div class="wrapper" v-if="cocktail">
      <div class="info">
        <h2>{{ cocktail.strDrink }}</h2>
        <div class="line"></div>
        <div class="list">
          <div class="list-item"
              v-for="ingredient in ingredients"
              :key="ingredient.id"
          >
            {{ ingredient.name }}
            <template v-if="ingredient.measure">
              | {{ ingredient.measure }}
            </template>
          </div>
        </div>
        <div class="instructions">
          {{ cocktail.strInstructions }}
        </div>
      </div>
    </div>
    <div v-else>no cocktail</div>
  </main-layout>
</template>

<script setup lang="ts">
import {onMounted, ref, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router';
import axios from 'axios'
import {COCKTAIL_BY_ID} from '@/constants'
import {ICocktail, IIngredientByCocktail} from '@/types/type';
import MainLayout from "@/Layouts/MainLayout.vue";

const imgUrl = new URL('@/assets/img/bg-2.png', import.meta.url).href

const route = useRoute()
const router = useRouter()
const cocktail = ref<ICocktail>()

const getCocktail = async () => {
  const response = await axios.get(`${COCKTAIL_BY_ID}${route.params.id}`)
  cocktail.value = response.data.drinks[0] || null
}

const ingredients = computed(() => {
  const ingredients: IIngredientByCocktail[] = []
  const cocktailId = cocktail.value?.idDrink
  if (cocktail.value) {
    for (let i = 1; i <= 15; i++) {
      const ingredientName = cocktail.value[`strIngredient${i}`]
      const measure = cocktail.value[`strMeasure${i}`]
      if (!ingredientName) break
      ingredients.push({
        id: cocktailId,
        name: ingredientName,
        measure: measure || null
      })
    }
  }
  return ingredients
})

const goBack = () => {
  router.go(-1)
}

onMounted(() => {
  getCocktail()
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/main';

.wrapper {
  width: 100%;
  display: flex;

  .info {
    width: 100%;
    padding: 80px 0;
    text-align: center;
  }
}
</style>