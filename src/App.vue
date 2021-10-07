<template>
    <Navbar></Navbar>
    <keep-alive>
        <SlideShow :slide-Data="slide_data"></SlideShow>
    </keep-alive>
    <div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
</template>

<script lang="ts">
import SlideShow from "@/components/home/SlideShow.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    name: "App",
    setup() {
        const slide_data = [
            "https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/01.jpg",
            "https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/02.jpg",
            "https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/03.jpg",
            "https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/04.jpg",
            "https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/05.jpg",
            "https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/06.jpg",
            "https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/07.jpg",
        ];
        return {
            slide_data,
        }
    },
    components: {
        Navbar,
        Footer,
        SlideShow,
    }
}
</script>