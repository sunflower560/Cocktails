<template>
  <main-layout @getCocktail="getCocktail" @back="goBack" :img-url="cocktail?.strDrinkThumb || imgUrl">
    <div class="wrapper" v-if="cocktail">
      <div class="info">
        <h2>{{ cocktail.strDrink }}</h2>
        <div class="line"></div>

        <div class="slider">
          <swiper
              :slides-per-view="3"
              :space-between="50"
              class="swiper">
            <swiper-slide
                v-for="(ingredient, idx) in ingredients"
                :key="idx"
            >
              <img :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`" alt="">
              <div class="name">
                {{ ingredient }}
              </div>
            </swiper-slide>
          </swiper>
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
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import axios from 'axios'
import type {ICocktail, IIngredientByCocktail} from '@/types/type';
import MainLayout from "@/Layouts/MainLayout.vue";

const imgUrl = new URL('@/assets/img/bg-2.png', import.meta.url).href

const route = useRoute()
const router = useRouter()
const cocktail = ref<ICocktail>()

const getCocktail = async () => {
  const response = await axios.get(`${import.meta.env.VITE_FB_URL}random.php`)
  cocktail.value = response.data.drinks[0] || null
}


const ingredients = computed(() => {
  const ingredients: string[] = []

  if (cocktail.value) {
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail.value[`strIngredient${i}`]

      if (!ingredient) break
      ingredients.push(ingredient)
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

    .slider {
      padding: 50px 0;

      .swiper {
        max-width: 586px; // пофикисть размеры

        .name {
          padding-top: 20px;
        }
      }
    }
  }
}
</style>