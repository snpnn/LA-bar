<script setup lang="ts">
import { RouterView } from 'vue-router';
import PageHeader from './copmonents/common/PageHeader.vue';

</script>





<template>

<div class="app">
<PageHeader/>
<RouterView/>

</div>

</template>

<style>
.app {
    justify-items: center;
    min-width: 100vw;
    min-height: 100vh;
    text-align: center;
    background-image: url(@/assets/4eefe1ab-f162-426a-81ba-51029c7b1bfb.jpg);
    background-size: cover;
    background-position: fixed;
    background-attachment: fixed;
    padding: 30px;
}

</style>
