<template>
    <Navbar></Navbar>
    <div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    name: "App",
    components: {
        Navbar,
        Footer,
    }
}
</script>