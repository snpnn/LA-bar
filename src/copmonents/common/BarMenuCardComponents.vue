<template>
    <div style="display: flex">
        <div class="barmenu-card barmenu-title fontsize-20" v-for="dish in object">
            <p>{{ dish.title }}</p>
            <div class="menu-image" :style="{ backgroundImage: `url(${dish.image})` }"></div>
            <P>{{ dish.description }}</P>
            <P>{{ dish.price + "$" }}</P>
        </div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    title:{
        type: String,
        default: "Название"
    },
    price:{
        type: String,
        default: 1000
    },
     description:{
        type: String,
        default: "Описание"
     },
     image:{
        type: String,
        default: "src/assets/Картошка.png"
     }
})

</script>
<style>
.barmenu-card {
    margin: 15px;
    width: 300px;
    min-height: 200px;
    background-color: red;
    border-radius: 20px;
    justify-items: center;
}
.barmenu-title {
    color: rgb (70, 130, 180);
    font-family: Binggrae-Bold;
    margin: 0px;
    color: rgb(70, 130, 180);
}
.menu-image {
    width: 90%;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
}
</style>