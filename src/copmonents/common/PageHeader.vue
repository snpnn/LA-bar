<template>
    <div class="header">
        <div class="piska title-container cursor" style="margin: 10px;" @click="GoBackHome">
            <h1 class="title">LAbar</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';

function GoBackHome(){
    router.push('/')
}
</script>

<style scoped>
.piska {
    font-family: BrunoAce;
    font-size: 3vh;
    width: fit-content;
    transition: 0.3s;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.441);
    border-width: 1px;
}
.title-container {
    padding: 15px;
    background-color: rgba(201, 201, 191, 0.25);
    backdrop-filter: blur(5px);
    margin-bottom: 20px;
    border-radius: 20px;
    height: fit-content;
} 

.cursor{
    cursor: pointer;
}

.title {
    text-align: center;
    font-size: 5vh;
    font-family: BrunoAce;
    margin: 0;
}
</style>