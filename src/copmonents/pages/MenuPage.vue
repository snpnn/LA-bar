<template>
    <div class="blur-container " style="margin-bottom: 15px;">
        <div class="menu-chapter">
            <p>Горячие закуски</p>
        </div>
        <div style="display: flex">
            <div class="menu-card menu-title" v-for="dish in object">
                <p>{{ dish.title }}</p>
                <div class="menu-image" :style="{ backgroundImage: `url(${dish.image})` }"></div>
                <P>{{ dish.description }}</P>
                <P>{{ dish.price + "$" }}</P>
            </div>
        </div>
    </div>
    <div class="blur-container" style="margin-bottom: 15px;">
        <div class="menu-chapter">
            <p> Горячие блюда</p>
        </div>
        <div style="display: flex;">
            <div class="menu-card menu-title" v-for="dish in hotDishes">
                <p>{{ dish.title }}</p>
                <div class="menu-image" :style="{ backgroundImage: `url(${dish.image})` }"></div>
                <P>{{ dish.description }}</P>
                <P>{{ dish.price + "$" }}</P>
            </div>
        </div>
    </div>
    <div class="blur-container">
        <div class="menu-chapter">
            <p>Холодные блюда</p>
        </div>
        <div style="display: flex; margin-top: 19;">
            <div class="menu-card menu-title" v-for="dish in coldDishes">
                <p>{{ dish.title }}</p>
                <div class="menu-image" :style="{ backgroundImage: `url(${dish.image})` }"></div>
                <P>{{ dish.description }}</P>
                <P>{{ dish.price + "$" }}</P>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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
<style>
.blur-container {
    justify-items: center;
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    width: fit-content;
}
.menu-title {
    font-size: 20px;
    color: rgb(0, 9, 17);
    font-family: Comfortaa-Bold !important;
}
.menu-card {
    margin: 15px;
    width: 300px;
    min-height: 200px;
    background-color: rgb(44, 82, 68);
    border-radius: 20px;
    justify-items: center;
}
.menu-chapter {
    margin-top: ;
    font-size: 30px;
    color: rgb(235, 239, 243);
    font-family: Comfortaa-Bold !important;
}
.menu-image {
    width: 90%;
    height: 200px;
    background-size: cover;
    background-position: center;
}
</style>