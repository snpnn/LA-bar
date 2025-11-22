<template>
    <div class="blur-container " style="margin-bottom: 15px;">
        <div class="barmenu-chapter barmenu-title fontsize" >
            <p class="barmenu-title fontsize-40">Коктейли</p>
        </div>
        <div style="display: flex;">
            <BarMenuCardComponents  
            :title="dish.title" 
            :price="dish.price"
            :description="dish.description"
            :image="dish.image"
            v-for="dish in object" 
            v-if="enableObjects === true"
            />
        </div>
    </div>
    </template>
<script setup lang="ts">
import { ref } from 'vue';
import BarMenuCardComponents from '../common/BarMenuCardComponents.vue';
function ValueObjects() {
    enableObjects.value = !enableObjects.value
}
const enableObjects = ref<Boolean>(false)
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

.fontsize-40{
    font-size: 40px;
}
.fontsize-20{
    font-size: 20px;
}

.blur-container {
    justify-items: center;
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    width: fit-content;
}


.barmenu-chapter {
    font-size: 30px;
    color: rgb(70, 130, 180);
    font-family: Binggrae;
}

</style>