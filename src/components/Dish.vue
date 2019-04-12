<template>
  <div class="">
    <div class="dish" v-for="dish of filteredAsCategories" :key="dish.id">
      <button class="dish__add-to-cart" @click="plusToCart(dish.id)">+</button>
      <button class="dish__remove-from-cart" @click="minusFromCart(dish.id)" v-if="dish.inCart > 0">-</button>
      <img :src="dish.src" :alt="dish.name" @click="addToCart(dish.id)">
      <div class="dish__info">
        <p class="dish__name">Название - {{dish.name}}</p>
        <p class="dish__weight">Вес - {{dish.weight}}</p>
        <p class="dish__price">Цена - {{dish.price}}</p>
        <p class="dish__desctiption">
          Описание - {{dish.description}}
          <button class="btn" @click="setActiveModalDishId(dish.id)">Подробнее</button>
        </p>
        <p class="dish__quantity">Количество товара в корзине - {{dish.inCart}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dishCategory: String,
    default: ''
  },
  // data() {
  //   return {
  //     dishCategory: 'Горячее'
  //   }
  // },
  computed: {
    dishes() {
      return this.$store.state.dishes; // все блюда, без фильрации по категориям
    },
    filteredAsCategories() {
      let dishCategory = this.dishCategory;

      return this.$store.state.dishes.filter(item => {
        return item.category.indexOf(dishCategory) > -1
      })
    }
  },
  methods: {
    setActiveModalDishId(id) {
      this.$store.state.activeModalDishId = id
    },
    addToCart(val) {
      this.$store.dispatch('addToCart', val);
    },
    // желательно объединить эти функции в миксины или вроде того, потому как они повторяются в компонентах Cart и Dish
    plusToCart(val) {
      this.$store.dispatch('plusToCart', val);
    },
    minusFromCart(val) {
      this.$store.dispatch('minusFromCart', val);
    }
    // / желательно объединить эти функции в миксины или вроде того, потому как они повторяются в компонентах Cart и Dish
  }
}
</script>

<style scoped lang="scss">

</style>
