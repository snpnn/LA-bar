<template>
    <div style="display: flex">
        <div class="barmenu-card barmenu-title fontsize-20">
            <p>{{ props.title }}</p>
            <div class="menu-image" :style="{ backgroundImage: `url(${props.image})` }"></div>
            <P>{{ props.description }}</P>
            <P>{{ props.price + "$" }}</P>
        </div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        default: "Название"
    },
    price: {
        type: String,
        default: 1000
    },
    description: {
        type: String,
        default: "Описание"
    },
    image: {
        type: String,
        default: "src/assets/Картошка.png"
    }
})

</script>
<style scoped>
.barmenu-card {
    margin: 15px;
    width: 300px;
    min-height: 200px;
    background-color: rgb(44, 82, 68);
    border-radius: 20px;
    justify-items: center;
}

.barmenu-title {
    font-size: 20px;
    color: rgb(0, 9, 17);
    font-family: Comfortaa-Regular;
    font-weight: 900;
}

.menu-image {
    width: 90%;
    height: 200px;
    background-size: cover;
    background-position: center;
}

p {
    margin: 5px;
    font-size: 20px;
    background-color: rgb(75, 136, 114);
    border-radius: 10px;
    padding: 5px;
}
</style>