<template>
  <div class="cart" v-show="this.$store.state.areGoodsInTheCart">
    <h2>Корзина</h2>
    <div class="dish-in-cart" v-for="dish of filteredInCart" :key="dish.id">
      <button class="dish-in-cart__add dish__add-to-cart" @click="plusToCart(dish.id)">+</button>
      <button class="dish__remove-from-cart" @click="minusFromCart(dish.id)" v-if="dish.inCart > 0">-</button>
      <div class="dish-in-cart__info dish__info">
        <p class="dish-in-cart__name dish__name">Название - {{dish.name}}</p>
        <p class="dish-in-cart__weight dish__weight">Вес - {{dish.weight}}</p>
        <p class="dish-in-cart__quantity dish__quantity">Количество товара в корзине - {{dish.inCart}}</p>
        <p class="dish-in-cart__price dish__price">Цена - {{dish.price}}</p>
      </div>
    </div>
    <hr>
    <p class="cart__quantity">Количество блюд в корзине - {{filteredInCart.length}}</p>
    <p class="cart__sum-price">Итого - {{$store.state.priceInCart}}</p>
    <p class="cart__remove-all" @click="removeFromCart()">Удалить все</p>
  </div>
</template>

<script>
export default {
  computed: {
    dishes() {
      return this.$store.state.dishes; // все блюда, без фильрации по категориям
    },
    filteredInCart() { // фльтруем и показываем только элементы, которые добавлены в корзину
      return this.$store.state.dishes.filter(item => {
        return item.inCart > 0
      })
    }
  },
  methods: {
    // желательно объединить эти функции в миксины или вроде того, потому как они повторяются в компонентах Cart и Dish
    plusToCart (val) {
      this.$store.dispatch('plusToCart', val);
    },
    minusFromCart(val) {
      this.$store.dispatch('minusFromCart', val);
    },
    // / желательно объединить эти функции в миксины или вроде того, потому как они повторяются в компонентах Cart и Dish
    removeFromCart() {
      this.$store.dispatch('removeFromCart')
    }
  }
}
</script>