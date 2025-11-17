<template>
        <div class="content">
            <div class="zhopa blur-container">
                <p>Welcome!</p>
                <p>A new bar in Krasnoyarsk!</p>
            </div>
            <div class="piska title-container cursor" style="margin: 10px;" @click="GoToMenu">
                <u>Меню кухни</u>
            </div>
            <div class="piska title-container cursor" style="margin: 10px;" @click="GoToBarMenu">
                <u>Барная карта</u>
            </div>
        </div>
</template>

<script setup lang="ts">
import router from '@/router';


function GoToMenu(){
    router.push('/menu')
}
function GoToBarMenu(){
    router.push('/barmenu')
}

</script>

<style scoped>
@font-face {
    font-family: BrunoAce;
    src: url(@/assets/fonts/BrunoAce-Regular.ttf);
}

@font-face {
    font-family: rubikmaps;
    src: url(@/assets/fonts/RubikMaps-Regular.ttf);
}
@font-face {
    font-family: Binggrae-Bold;
    src: url(@/assets/fonts/Binggrae-Bold.otf);
}

.cursor{
    cursor: pointer;
}

.title-container {
    padding: 15px;
    background-color: rgba(201, 201, 191, 0.25);
    backdrop-filter: blur(5px);
    margin-bottom: 20px;
    border-radius: 20px;

}

.border {
    border-style: solid;
    border-color: rgba(255, 255, 0, 0.441);
    border-width: 1px;
}

.content {
    width: 100vw;
    justify-items: center;
}

.zhopa {
    font-size: 4vh;
    font-family: BrunoAce;

}

.piska {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3vh;
    width: fit-content;
    transition: 0.3s;
    border-style: solid;
    border-color: rgba(255, 255, 0, 0.441);
    border-width: 1px;
    font-style: oblique;
}

.piska:hover {
    scale: 1.1;
    background-color: rgba(201, 201, 191, 0.5);
}

.header {

    display: flex;
    justify-items: start
}

h1,
p {
    margin: 0%;
}
</style>