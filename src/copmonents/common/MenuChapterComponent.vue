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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    items:{
        type: Array,
        default:[{}]
    }
})

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
</script>

<style scoped>
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
.cards {
    opacity: 0;
    transition: 0.3s;
}
.cursor {
    cursor: pointer;
}
.menu-chapter {
    margin-top: ;
    font-size: 30px;
    color: rgb(235, 239, 243);
    font-family: Comfortaa-Regular;
    user-select: none;
}
</style>