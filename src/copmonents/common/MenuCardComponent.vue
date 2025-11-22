<template>
    <div style="display: flex">
            <div class="menu-card menu-title" >
                <p>{{ props.title }}</p>
                <!-- <div class="menu-image" :style="{ backgroundImage: `url(${dish.image})` }"></div> -->
                <div class="menu-image" :style="{ backgroundImage: `url(${props.image})` }"></div>
                <p>{{ props.description }}</p>
                <p>{{ props.price }}</p>
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



<style scoped>
.menu-title {
    font-size: 20px;
    color: rgb(0, 9, 17);
    font-family: Comfortaa-Regular;
    font-weight: 900;
}

.menu-card {
    margin: 15px;
    width: 300px;
    min-height: 200px;
    background-color: rgb(44, 82, 68);
    border-radius: 20px;
    justify-items: center;
}
.menu-image {
    width: 90%;
    height: 200px;
    background-size: cover;
    background-position: center;
}
</style>