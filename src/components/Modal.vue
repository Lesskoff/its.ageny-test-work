<template>
  <div class="modal-dish" v-if="this.$store.state.activeModalDishId >= 0 && this.$store.state.activeModalDishId != null">
    <h2>Модальное окно</h2>
    <button class="btn" @click="closeModal()">Закрыть модалку</button>
    <img :src="this.$store.state.dishes[dishId].src" :alt="this.$store.state.dishes[dishId].name">
    <div class="modal-dish__info">
      <p class="modal-dish__name">Название - {{this.$store.state.dishes[dishId].name}}</p>
      <p class="modal-dish__weight">Вес - {{this.$store.state.dishes[dishId].weight}}</p>
      <p class="modal-dish__price">Цена - {{this.$store.state.dishes[dishId].price}}</p>
      <p class="modal-dish__quantity">Количество товара в корзине - {{this.$store.state.dishes[dishId].inCart}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dishId: Number,
    default: ''
  },
  methods: {
    closeModal() {
      this.$store.state.activeModalDishId = null;
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>