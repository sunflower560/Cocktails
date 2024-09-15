<template>
  <main-layout :is-back-button-visible="!!ingredient" @back="removeIngredient" :imgUrl="imgUrl">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <h2>Choose your drink</h2>
        <div class="line"></div>
        <el-select
            v-model="ingredient"
            clearable
            filterable
            allow-create
            placeholder="Choose main ingredient"
            @change="getCocktails"
        >
          <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
          />
        </el-select>
        <p>Try our delicious cocktail
          recipes for every occasion.
          Find delicious cocktail recipes
          by ingredient through our cocktail generator.</p>
        <img src="/src/assets/img/cocktails.png" alt="Cocktails image">
      </div>
      <div v-else class="info">
        <h2>COCKTAILS WITH {{ ingredient }}</h2>
        <div class="line"></div>
        <div class="cocktails">
          <el-scrollbar height="500px">
            <div class="cocktail-list">
              <app-cocktail
                  v-for="cocktail in cocktails"
                  :key="cocktail.idDrink"
                  :cocktail="cocktail"
              />
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {useRootStore} from "@/stores/root";
import MainLayout from "@/Layouts/MainLayout.vue";
import {storeToRefs} from "pinia";
import AppCocktail from "@/components/cocktails/AppCocktail.vue";

const imgUrl = new URL('@/assets/img/bg-1.png', import.meta.url).href
const rootStore = useRootStore()

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore)

const getCocktails = () => {
  rootStore.getCocktails(ingredient.value)
}

const removeIngredient = () => {
  rootStore.setIngredient()
}

onMounted(() => {
  rootStore.getIngredients()
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/main';

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;

  .info {
    padding: 80px 0;
    text-align: center;
  }

  .el-select {
    padding-top: 50px;
    width: 220px;
  }

  p {
    max-width: 516px;
    margin: 0 auto;
    padding-top: 50px;
    line-height: 36px;
    letter-spacing: 0.1em;
    color: $textMuted
  }

  img {
    margin-top: 60px;
  }

  .cocktails {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 60px;

    .cocktail-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>