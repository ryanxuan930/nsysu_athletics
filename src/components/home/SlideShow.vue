<template>
    <Carousel :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in slideData" :key="slide">
            <div class="carousel__item">
                <img class="block" style="width: 100%; min-height: 300px; object-fit:cover;" :src="slide">
            </div>
        </Slide>
        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';
export default defineComponent({
    name: 'SlideShow',
    props: ["slideData"],
    components: {
        Carousel,
        Slide,
        Pagination,
    },
});
</script>

<style>
.carousel__item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
.carousel__pagination-button {
    background-color: #FEF3C7;
}

.carousel__pagination-button--active {
    background-color: #D97706
;
}
</style>