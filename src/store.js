import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areGoodsInTheCart: false, // меняем на true, если есть хотя бы один товар в корзине (от этого зависит отображение корзины)
    priceInCart: 0, // счетчик общей суммы в корзине
    activeModalDishId: null, // id активного товара в модальном окне
    styles: {
      overlayVisible: false,
      asideVisible: false,
      categoriesWrapperMobileVisible: false,
      cartMobileVisible: false,
      modalVisible: false
    },
    dishes: [
      {
        id: 0,
        name: 'Плов Чайханский',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        kcal: 560,
        protein: 64,
        fats: 20,
        carbohydrates: 15,
        weight: 250, // вес в граммах
        src: require('./assets/img/catalog/plov-chaihanskiy.png'),
        srcLarge: require('./assets/img/catalog/plov-chaihanskiy-large.png'),
        price: 246, // цена в рублях
        category: ['Горячее'],
        inCart: 0
      },
      {
        id: 1,
        name: 'Стейк',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        kcal: 350,
        protein: 90,
        fats: 75,
        carbohydrates: 22,
        weight: 336, // вес в граммах
        src: require('./assets/img/catalog/steik.png'),
        srcLarge: require('./assets/img/catalog/steik-large.png'),
        price: 246, // цена в рублях
        category: ['Гриль'],
        inCart: 0
      },
      {
        id: 2,
        name: 'Шашлык',
        description: 'Стейк из поясничной части мраморной говядины. Рекомендуемая степень прожарки medium',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        kcal: 900,
        protein: 60,
        fats: 90,
        carbohydrates: 15,
        weight: 250, // вес в граммах
        src: require('./assets/img/catalog/shashlik.png'),
        srcLarge: require('./assets/img/catalog/shashlik-large.png'),
        price: 656, // цена в рублях
        category: ['Гриль', 'Популярные'],
        inCart: 0
      },
      {
        id: 3,
        name: 'Судак',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        kcal: 250,
        protein: 10,
        fats: 20,
        carbohydrates: 12,
        weight: 250, // вес в граммах
        src: require('./assets/img/catalog/sudak.png'),
        srcLarge: require('./assets/img/catalog/steik-large.png'),
        price: 226, // цена в рублях
        category: ['', 'Популярные'],
        inCart: 0
      },
      {
        id: 4,
        name: 'Манты',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        kcal: 850,
        protein: 24,
        fats: 50,
        carbohydrates: 14,
        weight: 300, // вес в граммах
        src: require('./assets/img/catalog/manti.png'),
        srcLarge: require('./assets/img/catalog/manti-large.png'),
        price: 299, // цена в рублях
        category: ['Выпечка'],
        inCart: 0
      },
      {
        id: 5,
        name: 'Шаверма',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        kcal: 1000,
        protein: 45,
        fats: 43,
        carbohydrates: 32,
        weight: 300, // вес в граммах
        src: require('./assets/img/catalog/shaverma.png'),
        srcLarge: require('./assets/img/catalog/shaverma-large.png'),
        price: 180, // цена в рублях
        category: [''],
        inCart: 0
      },
      {
        id: 6,
        name: 'Бешбармак',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        kcal: 670,
        protein: 43,
        fats: 65,
        carbohydrates: 19,
        weight: 220, // вес в граммах
        src: require('./assets/img/catalog/beshbarmak.png'),
        srcLarge: require('./assets/img/catalog/beshbarmak-large.png'),
        price: 446, // цена в рублях
        category: ['', 'Популярные'],
        inCart: 0
      },
      {
        id: 7,
        name: 'Ковурма',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        composition: 'Микс салатов, лосось, соус терияки, соус Унаги',
        kcal: 600,
        protein: 34,
        fats: 23,
        carbohydrates: 17,
        weight: 250, // вес в граммах
        src: require('./assets/img/catalog/kovurma.png'),
        srcLarge: require('./assets/img/catalog/kovurma-large.png'),
        price: 246, // цена в рублях
        category: ['Гарниры', 'Популярные'],
        inCart: 0
      }
    ],
    categories: [
      'Популярные',
      'Горячее',
      'Гарниры',
      'Выпечка',
      'Гриль',
      'Детское',
      'Супы',
      'Закуски',
      'Фастфуд',
      'Веганское',
      'Десерты',
      'Напитки'
    ]
  },
  // mutations: {
  //   plusToCart (val) {
  //     this.$store.dispatch('plusToCart', val);
  //   }
  // },
  actions: {
    // работа с добавлением / убавлением из корзины
    addToCart (context, playload) {
      if (context.state.dishes[playload].inCart === 0) { // добавляем количества товару, по клику на картинку
        context.state.dishes[playload].inCart++
        this.state.priceInCart += context.state.dishes[playload].price // добавляем стоимость товара к общей стоимости в корзине
        if (this.state.areGoodsInTheCart === false) this.state.areGoodsInTheCart = true
      }
    },
    plusToCart (context, playload) {
      for (let dish of this.state.dishes) { // добавляем количества товару, по которму кликнули "добавить"
        if (dish.id === playload) {
          dish.inCart++
          this.state.priceInCart += dish.price // добавляем стоимость товара к общей стоимости в корзине
        }
      }
      if (this.state.areGoodsInTheCart === false) this.state.areGoodsInTheCart = true // показываем корзину по клику на "добавить"
    },
    minusFromCart (context, playload) {
      for (let dish of this.state.dishes) { // убираем количества товару, по которму кликнули "убрать", только если количество не меньше нуля
        if (dish.inCart > 0) {
          if (dish.id === playload) {
            dish.inCart--
            this.state.priceInCart -= dish.price // убавляем стоимость товара к общей стоимости в корзине
          }
        }
      }
      if (this.state.priceInCart === 0) this.state.areGoodsInTheCart = false // если сумма в корзине равна нулю, то скрываем корзину
    },
    removeFromCart () {
      for (let dish of this.state.dishes) {
        dish.inCart = 0
      }
      this.state.areGoodsInTheCart = false
      this.state.priceInCart = 0
    },
    // / работа с добавлением / убавлением из корзины
    // закрытие модальных окон
    closeModalsAndMenu () {
      this.state.styles.overlayVisible = false
      this.state.styles.asideVisible = false
      this.state.styles.categoriesWrapperMobileVisible = false
      this.state.styles.cartMobileVisible = false
      this.state.styles.modalVisible = false
      this.state.activeModalDishId = null
      document.querySelector('body').classList.remove('overflow-hidden')
    }
  }
})
