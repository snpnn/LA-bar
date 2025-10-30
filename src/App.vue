<script setup>
</script>

<template>
<div class="app">
<div class="header">
  <div class="title-container">
        <h1 class="title">Главная</h1>
    </div>
    <div class="title-container">
        <h1 class="title">LAbar</h1>
    </div>
</div>
<div class="content">
    <div class="zhopa">
        <p>Welcome!</p>
        <p>A new bar in Krasnoyarsk!</p>
    </div>
    <div class="piska title-container">
        <u>Меню</u>
    </div>
    <div class="menu-chapter">
        <p>Горячие закуски</p>
    </div>
    <div style="display: flex;">
    <div class="menu-card menu-title">
        <p>Картофель фри</p>
        <img src="https://main-cdn.sbermegamarket.ru/big2/hlr-system/156/552/268/322/721/29/100048560756b1.png" class="menu-image">
        <P>Картофель, соль, масло</P>
    </div>
    
    <div class="menu-card menu-title">
        <p>Картофель фри</p>
        <img src="https://main-cdn.sbermegamarket.ru/big2/hlr-system/156/552/268/322/721/29/100048560756b1.png" class="menu-image">
        <P>Картофель соль, масло</P>
    </div>

    <div class="menu-card menu-title">
        <p>Картофель фри</p>
        <img src="https://main-cdn.sbermegamarket.ru/big2/hlr-system/156/552/268/322/721/29/100048560756b1.png" class="menu-image">
        <P>Картофель, соль, масло</P>
    </div>

    </div>

</div>
</div>
</template>

<style scoped>
@font-face {
    font-family: BrunoAce;
    src: url(assets/fonts/BrunoAce-Regular.ttf);
}
@font-face{
    font-family: rubikmaps;
    src: url(assets/fonts/RubikMaps-Regular.ttf);
}
.title{
text-align: center;
font-size: 5vh;
font-family: BrunoAce
}
.menu-title{
    font-size: 20px;
    color: rgb(0, 9, 17);
    font-family: rubikmaps;
}
.menu-card{
    width: 300px;
    min-height: 200px;
    background-color: aquamarine;
    border-radius: 20px;
}
.content{
    width: 100vw;
    justify-items: center;
}

.app{ 
    text-align: center;
    background-image: url(assets/4eefe1ab-f162-426a-81ba-51029c7b1bfb.jpg);
    background-size: cover;
    background-position-y: -190px;
    height: 100vh;
    padding: 30px;
}
.title-container{
    padding: 15px;
    background-color: rgba(201, 201, 191, 0.25);
    backdrop-filter: blur(5px);
    margin-bottom: 20px;
    border-radius: 20px;
    
}
.menu-chapter{
    font-size: 30px;
    color: rgb(235, 239, 243);
    font-family: rubikmaps;
}
.menu-image {
    max-width: 90%;
}
.zhopa{
    font-size: 4vh;
    font-family: BrunoAce
}
.piska {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3vh;
    width: fit-content;
    transition: 0.3s;
    border-style: solid;
    border-color: rgba(175, 175, 166, 0.2);
    border-width: 1px;
    font-style: oblique;
}
.piska:hover{
    scale: 1.1;
    background-color: rgba(201, 201, 191, 0.5);
}
.header{
display: flex;
justify-items: start 
}
h1, p{
    margin: 0%;
}
</style>
