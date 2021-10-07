<template>
    <div class="bg-yellow-500 py-2 px-5 w-full box-border">
        <div v-if="langCode=='en_US'" class="bg-yellow-500 text-center text-black mb-2 text-2xl">NSYSU Freshman Athletics Championship</div>
        <div v-if="langCode=='zh_TW'" class="bg-yellow-500 text-center text-black mb-2 text-2xl">新生盃田徑錦標賽</div>
        <div v-if="langCode=='ja_JP'" class="bg-yellow-500 text-center text-black mb-2 text-2xl">フレッシュマン陸上競技大会</div>
        <div class="w-full p-1 text-3xl lg:text-5xl text-center bg-black text-yellow-400">
            <VueCountdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{days,hours,minutes,seconds}">
                <span style="font-family: Digital;">
                    {{ days }} day {{ hours }} hrs {{ minutes }} min {{ seconds }} sec
                </span>
            </VueCountdown>
        </div>
        <div class="bg-yellow-500 text-center text-black mt-2 text-lg" style="font-family: Audiowide-Regular">TechNSport</div>
    </div>
</template>

<script lang="ts">
import { ref } from "vue"
import VueCountdown from '@chenfengyuan/vue-countdown';
export default {
    name: "Countdown",
    setup() {
        return {
        }
    },
    props: ["langCode"],
    components: {
        VueCountdown,
    }
}
</script>

<style lang="less" scoped>
@font-face {
    font-family: Digital;
    src: url("https://ryanxuan930.github.io/cdn/nsysu_athletics/font/digital.ttf");
}
@font-face {
    font-family: Audiowide-Regular;
    src: url("https://ryanxuan930.github.io/cdn/nsysu_athletics/font/Audiowide-Regular.ttf");
}
</style>