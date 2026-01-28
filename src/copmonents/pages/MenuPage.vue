<template>
    <div class="blur-container " style="margin-bottom: 15px;" :class="{ expanded: OpenedCard }">
        <div class="menu-chapter" @click="ValueObjects">
            <p class="cursor ma-0">Горячие закуски</p>
        </div>

        <div class="cards" :class="{ expanded: OpacityDescription }" style="display: flex;">
            <MenuCardComponent :title="dish.title" :price="dish.price" :description="dish.description"
                :image="dish.image" v-for="dish in object" v-if="enableDescription" />
        </div>
    </div>

    <div class="blur-container" style="margin-bottom: 15px;">
        <div class="menu-chapter" @click="ValueHotDishes">
            <p class="cursor ma-0"> Горячие блюда </p>
        </div>
        <div style="display: flex;">
            <MenuCardComponent :description="dish.description" :title="dish.title" :price="dish.price"
                :image="dish.image" v-for="dish in hotDishes" v-if="enableHotDishes === true" />

        </div>
    </div>

    <div class="blur-container">
        <div class="menu-chapter" @click="ValueColdDishes">
            <p class="cursor ma-0">Холодные блюда</p>
        </div>
        <div style="display: flex;">
            <MenuCardComponent :title="dish.title" :price="dish.price" :image="dish.image"
                :description="dish.description" v-for="dish in coldDishes" v-if="enableColdDishes === true" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuCardComponent from '../common/MenuCardComponent.vue'

// const число = 1 
// const строка = "вывывывы"
// const обьект = {}
// const массив = [{},{},{},{},{}]
// const булево = правда/ложь
const OpenedCard = ref(false)
const enableDescription = ref(false)
const OpacityDescription = ref(false)

function ValueObjects() {

    if (OpenedCard.value == false) {
        // Открытие
        OpenedCard.value = !OpenedCard.value
        setTimeout(() => {
            enableDescription.value = !enableDescription.value
        }, 1000)
        setTimeout(() => {
            OpacityDescription.value = !OpacityDescription.value
        }, 1030)
    } else {
        OpacityDescription.value = !OpacityDescription.value
        setTimeout(() => {
            enableDescription.value = !enableDescription.value
        }, 300)
        setTimeout(() => {
            OpenedCard.value = !OpenedCard.value
        }, 330)

    }
}



const enableColdDishes = ref<Boolean>(false)
const enableHotDishes = ref<Boolean>(false)
const enableObjects = ref<Boolean>(false)
const object = [
    {
        title: "Картошка фри",
        price: 1000,
        description: "Картофель, соль, масло",
        image: "src/assets/Картошка.png"
    },
    {
        title: "Гренки чесночные",
        price: 2000,
        description: "Хлеб черный, соль, чеснок, сырный соус",
        image: "src/assets/suhari.png"
    },
    {
        title: "Сырные палочки",
        price: 1000,
        description: "Сыр в панировке со сметанным соусом",
        image: "src/assets/palki-from-syr.png"
    },
]
const hotDishes = [
    {
        title: "Паста карбонара",
        price: 5000,
        description: "Бекон, паста, яйцо, соль, пармезан",
        image: "src/assets/karbon.jpg"

    },
    {
        title: "Чизбургер",
        price: 10000,
        description: "Булка, котлета, сыр, кетчуп",
        image: "src/assets/cheese.jpg"
    },
    {
        title: "Говяжьи щеки с пюре",
        price: 10000,
        description: "Щека говяжья, соус деми глясс, картофельное пюре со сливками",
        image: "src/assets/sheka.jpg"
    }
]
const coldDishes = [
    {
        title: "Цезарь",
        price: 4000,
        description: "Айсберг, курица, помидор, сыр",
        image: "src/assets/cezar.jpg"

    },
    {
        title: "Карпаччо из говядины",
        price: 10000,
        description: "говядина вырезка с ароматным соусом",
        image: "src/assets/karpacho.jpg"
    },
    {
        title: "Тартар из лосося",
        price: 10000,
        description: "Лосось, каперсы, лук, бальзамический соус",
        image: "src/assets/tartar.jpg"
    }
]
</script>
<style scoped>
@font-face {
    font-family: Comfortaa-Regular;
    src: url('../../assets/fonts/Comfortaa-Regular.ttf');
}

.cards{
    opacity: 0;
    transition: 0.3s;
}
.cards.expanded{
    opacity: 1;

}

.cursor {
    cursor: pointer;
}

.blur-container {
    justify-items: center;
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    width: 600px;
    transition: 1s;
    height: 44px;
}

.blur-container.expanded {
    height: 450px;
    width: 1000px;
}

.ma-0 {
    margin: 0%
}

.menu-chapter {
    margin-top: ;
    font-size: 30px;
    color: rgb(235, 239, 243);
    font-family: Comfortaa-Regular;
    user-select: none;
}
</style>