<template>
    <div class="bg-yellow-600 text-left p-10">
        <div class="mx-auto w-full grid grid-cols-1 lg:grid-cols-3 items-stretch justify-items-center text-white">
            <div class="m-2 w-full flex flex-row justify-items-center content-center items-center">
                <img src="@/assets/logo_no_bg_white.png" class="inline-block h-16" />
                <div class="ml-5">
                    <div v-if="lang_code!='ja_JP'" class="text-2xl font-bold">國立中山大學田徑校隊</div>
                    <div v-else class="text-2xl font-bold">国立中山大学陸上競技部</div>
                    <div class="text-xs">National Sun Yut-sen University Athletics Team</div>
                </div>
            </div>
            <div class="m-2 block w-full">
                <div v-if="lang_code=='zh_TW'">804 高雄市鼓山區蓮海路70號<br>中山大學田徑場西南側</div>
                <div v-if="lang_code=='en_US'">National Sun Yut-sen University<br> No.70 Lianhai Rd., Kaohsiung City 804, Taiwan</div>
                <div v-if="lang_code=='ja_JP'">804 高雄市鼓山区蓮海路70号<br>中山大学トラックより南西側</div>
                <div>(07)525-2000</div>
            </div>
            <div class="m-2 block w-full text-6xl">
                <i class="mr-5 fab fa-facebook-square cursor-pointer" @click="newWindow('https://www.facebook.com/NSYSUAthletics')"></i>
                <i class="mr-5 fab fa-instagram cursor-pointer" @click="newWindow('https://www.instagram.com/nsysu_athletics/')"></i>
                <i class="mr-5 fas fa-envelope-square cursor-pointer" @click="newWindow('')"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {ref, watch, computed} from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'Footer',
    setup(){
        //vuex
        const store = useStore();
        function newWindow(url:any){
            window.open(url);
        }
        return {
            lang_code: computed(() => store.state.lang_code),
            newWindow,
        }
    }
}
</script>