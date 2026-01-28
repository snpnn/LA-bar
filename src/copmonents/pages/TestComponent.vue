<template>
    <div class="blur-container main-card" :class="{ expanded: OpenedCard }">

        <div @click="togleValue">
            Открой меня!
        </div>
        <div class="description" style="color: aqua;" :class="{ expanded: OpacityDescription }"
            v-if="enableDescription">
            Описание
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';



const OpenedCard = ref(false)
const enableDescription = ref(false)
const OpacityDescription = ref(false)

function togleValue() {

    if (OpenedCard.value == false) {
        // Открытие
        OpenedCard.value = !OpenedCard.value
        setTimeout(() => {
            enableDescription.value = !enableDescription.value
        }, 500)
        setTimeout(() => {
            OpacityDescription.value = !OpacityDescription.value
        }, 530)
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



<style>
.blur-container {
    justify-items: center;
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    width: fit-content;
    transition: 1s;
}

.main-card {
    width: 400px;
    height: 50px;
    transition: 0.5s;
}

.main-card.expanded {
    height: 200px;
}

.description {
    opacity: 0.1;
    transition: 0.3s;
}

.description.expanded {
    opacity: 1;
}

div {
    font-size: 40px !important;
}
</style>