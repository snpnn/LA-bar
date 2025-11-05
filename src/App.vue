<script setup lang="ts">

// const text = "Самый обычный текст"
// const chislo = 1 + 1
// const object = {
//     title: "Картошка фри",
//     price: 1000,
//     description: "Картофель, соль, масло",
//     image: "src/assets/Картошка.png"
// }

const object = [
    {
        title: "Картошка фри",
        price: 1000,
        description: "Картофель, соль, масло",
        image: "src/assets/Картошка.png"
    },
    {
        title: "Гренки чесночные",
        price: 2000,
        description: "Хлеб черный, соль, чеснок, сырный соус",
        image: "src/assets/suhari.png"
    },
    {
        title: "Сырные палочки",
        price: 1000,
        description: "Сыр в панировке со сметанным соусом",
        image: "src/assets/palki-from-syr.png"
    },
]
const hotDishes = [
    {
        title: "Паста карбонара",
        price: 5000,
        description: "Бекон, паста, яйцо, соль, пармезан",
        image: "src/assets/karbon.jpg"

    },
    {
        title: "Чизбургер",
        price: 10000,
        description: "Булка, котлета, сыр, кетчуп",
        image: "src/assets/cheese.jpg"
    },
    {
        title: "Говяжьи щеки с пюре",
        price: 10000,
        description: "Щека говяжья, соус деми глясс, картофельное пюре со сливками",
        image: "src/assets/sheka.jpg"
    }
]
const coldDishes = [
    {
        title: "Цезарь",
        price: 4000,
        description: "Айсберг, курица, помидор, сыр",
        image: "src/assets/karbon.jpg"

    },
    {
        title: "Карпаччо из говядины",
        price: 10000,
        description: "говядина вырезка с ароматным соусом",
        image: "src/assets/cheese.jpg"
    },
    {
        title: "Тартар из лосося",
        price: 10000,
        description: "Лосось, каперсы, лук, бальзамический соус",
        image: "src/assets/sheka.jpg"
    }
]
</script>

<template>
    <div class="app">
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
            <div class="blur-container " style="margin-bottom: 15px;">
                <div class="menu-chapter">
                    <p>Горячие закуски</p>
                </div>
                <div style="display: flex;">
                    <div class="menu-card menu-title" v-for="dish in object">
                        <p>{{ dish.title }}</p>
                        <div class="menu-image" :style="{ backgroundImage: `url(${dish.image})` }"></div>
                        <P>{{ dish.description }}</P>
                        <P>{{ dish.price + "$" }}</P>
                    </div>
                </div>
            </div>
            <div class="blur-container">
                <div class="menu-chapter">
                    <p> Горячие блюда</p>
                </div>
                <div style="display: flex;">
                    <div class="menu-card menu-title" v-for="dish in hotDishes">
                        <p>{{ dish.title }}</p>
                        <div class="menu-image" :style="{ backgroundImage: `url(${dish.image})` }"></div>
                        <P>{{ dish.description }}</P>
                        <P>{{ dish.price + "$" }}</P>
                    </div>  
                    </div>
                    <div class="blur-container">
                <div class="menu-chapter">
                    <p>Холодные блюда</p>
                </div>
                <div style="display: flex;">
                    <div class="menu-card menu-title" v-for="dish in coldDishes">
                        <p>{{ dish.title }}</p>
                        <div class="menu-image" :style="{ backgroundImage: `url(${dish.image})` }"></div>
                        <P>{{ dish.description }}</P>
                        <P>{{ dish.price + "$" }}</P>
                    </div>
                </div>
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

@font-face {
    font-family: rubikmaps;
    src: url(assets/fonts/RubikMaps-Regular.ttf);
}

.blur-container {
    justify-items: center;
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(15px);
    border-radius: 15px;
}

.menu-image-div-grenki {
    width: 90%;
    height: 200px;
    background-image: url(assets/suhari.png);
    background-size: cover;
    background-position-x: -18px;
}

.menu-image-div-syr {
    width: 90%;
    height: 200px;
    background-image: url(assets/palki-from-syr.png);
    background-size: cover;
    background-position-x: -18px;
}

.title {
    text-align: center;
    font-size: 5vh;
    font-family: BrunoAce
}

.menu-title {
    font-size: 20px;
    color: rgb(0, 9, 17);
    font-family: rubikmaps;
}

.border {
    border-style: solid;
    border-color: rgba(255, 255, 0, 0.441);
    border-width: 1px;
}

.menu-card {
    margin: 15px;
    width: 300px;
    min-height: 200px;
    background-color: aquamarine;
    border-radius: 20px;
    justify-items: center;
}

.content {
    width: 100vw;
    justify-items: center;
}

.app {
    min-width: 100vw;
    text-align: center;
    background-image: url(assets/4eefe1ab-f162-426a-81ba-51029c7b1bfb.jpg);
    background-size: cover;
    background-position: fixed;
    background-attachment: fixed;
    padding: 30px;
}

.title-container {
    padding: 15px;
    background-color: rgba(201, 201, 191, 0.25);
    backdrop-filter: blur(5px);
    margin-bottom: 20px;
    border-radius: 20px;

}


.menu-chapter {
    font-size: 30px;
    color: rgb(235, 239, 243);
    font-family: rubikmaps;
}

.menu-image {
    width: 90%;
    height: 200px;
    background-size: cover;
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
