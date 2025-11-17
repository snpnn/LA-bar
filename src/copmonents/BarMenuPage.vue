<template>
    <div class="blur-container " style="margin-bottom: 15px;">
        <div class="barmenu-chapter">
            <p>Коктейли</p>
        </div>
        <div style="display: flex">
            <div class="barmenu-card barmenu-title" v-for="dish in object">
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
        title: "Кровавая Мэри",
        price: 500,
        description: "Водка, томатный сок, зелень, лимон",
        image: "src/assets/krovmary.jpg"
    },
    {
        title: "Б-52",
        price: 500,
        description: "Коктейль из 3-х видов ликёра: кофейный, сливочный, апельсиновый",
        image: "src/assets/b52.jpg"
    },
    {
        title: "Голубая лагуна",
        price: 500,
        description: "Водка, лимонный сок, содовая, ликер блю-кюрасао",
        image: "src/assets/bluelaguna.jpg"
    },
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
.barmenu-title {
    font-size: 20px;
    color: rgb(0, 9, 17);
    font-family: Comfortaa-Regular;
}
.barmenu-card {
    margin: 15px;
    width: 300px;
    min-height: 200px;
    background-color: rgb(44, 82, 68);;
    border-radius: 20px;
    justify-items: center;
}
.barmenu-chapter {
    font-size: 30px;
    color: rgb(44, 82, 68);
    font-family: Comfortaa-Regular;
}
.menu-image {
    width: 90%;
    height: 200px;
    background-size: cover;
    background-position: center;
}
</style>