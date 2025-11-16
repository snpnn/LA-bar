<template>
        <div class="header">
            <div class="title-container">
                <h1 class="title">LAbar</h1>
            </div>
        </div>
        <div class="content">
            <div class="zhopa blur-container">
                <p>Welcome!</p>
                <p>A new bar in Krasnoyarsk!</p>
            </div>
            <div class="piska title-container">
                <u>Меню</u>
            </div>
        </div>
</template>

<style scoped>
@font-face {
    font-family: BrunoAce;
    src: url(@/assets/fonts/BrunoAce-Regular.ttf);
}

@font-face {
    font-family: rubikmaps;
    src: url(@/assets/fonts/RubikMaps-Regular.ttf);
}





.title {
    text-align: center;
    font-size: 5vh;
    font-family: BrunoAce
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



.title-container {
    padding: 15px;
    background-color: rgba(201, 201, 191, 0.25);
    backdrop-filter: blur(5px);
    margin-bottom: 20px;
    border-radius: 20px;

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