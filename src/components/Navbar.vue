<template>
    <div
        class="sticky top-0 z-10 w-full bg-yellow-600 flex flex-row justify-between justify-items-stretch text-white p-5 shadow">
        <router-link to="/">
            <div class="flex justify-items-stretch">
                <img src="@/assets/logo_no_bg_white.png" class="h-14 inline-block"/>
                <div>
                    <div v-if="lang_code!='ja_JP'" class="mx-3 text-2xl text-white font-bold">國立中山大學田徑校隊</div>
                    <div v-else class="mx-3 text-2xl text-white font-bold">国立中山大学陸上競技部</div>
                    <div class="mx-3 text-sm text-white font-medium">National Sun Yat-sen University Athletics Team</div> 
                </div>
            </div>
        </router-link>
        <div class="flex-grow"></div>
        <!--nav-->
        <div class="hidden lg:inline-block text-center text-2xl links font-medium">
            <router-link to="/">{{ lang_dict.navbar.home }}</router-link>
            <div class="relative inline-block">
                <a @click="sub_nav = (sub_nav==1 ? 0 : 1)">{{ lang_dict.navbar.event_list }}</a>
                <div v-show="sub_nav==1" class="absolute bg-yellow-600 text-white top-20 right-0 p-5 rounded shadow duration-300" style="width:max-content">
                    <router-link class="block" @click="sub_nav=0" to="/nfac">{{ lang_dict.navbar.nfac }}</router-link>
                    <router-link class="block" @click="sub_nav=0" to="">{{ lang_dict.navbar.niac }}</router-link>
                    <router-link class="block" @click="sub_nav=0" to="">{{ lang_dict.navbar.chcw }}</router-link>
                </div>
            </div>
            <div class="relative inline-block">
                <a @click="sub_nav = (sub_nav==2 ? 0 : 2)">{{ lang_dict.navbar.info }}</a>
                <div v-show="sub_nav==2" class="absolute bg-yellow-600 text-white top-20 right-0 p-5 rounded shadow duration-300" style="width:max-content">
                    <router-link class="block" @click="sub_nav=0" to="/about">{{ lang_dict.navbar.about }}</router-link>
                    <router-link class="block" @click="sub_nav=0" to="">{{ lang_dict.navbar.result }}</router-link>
                </div>
            </div>
            <router-link to="">{{ lang_dict.navbar.recruit }}</router-link>
            <div class="relative inline-block">
                <a @click="sub_nav = (sub_nav==3 ? 0 : 3)">
                    <i class="fas fa-globe"></i>
                </a>
                <div v-show="sub_nav==3" class="absolute bg-yellow-600 text-white w-auto right-0 top-20 p-5 rounded shadow duration-300" style="width:max-content">
                    <a class="block" @click="lang_code='en_US'">English</a>
                    <a class="block" @click="lang_code='zh_TW'">中文</a>
                    <a class="block" @click="lang_code='ja_JP'">日本語</a>
                </div>
            </div>
        </div>
        <div :class="{'inline-block':true, 'lg:hidden':true, 'text-center': true, 'text-3xl': true, 'font-bold': true, 'm-auto': true}">
            <a @click="mobileNav"><i class="fas fa-bars"></i></a>
        </div>
    </div>
    <!--mobile nav-->
    <transition name="slide-fade">
        <div v-if="mobile_nav_open" class="block lg:hidden h-full w-full fixed z-10 top-0 left-0 bg-black opacity-80 overflow-x-hidden">
            <a @click="mobile_nav_open=false" class="text-5xl text-white block float-right mt-10 mr-10">
                <i class="fal fa-times"></i>
            </a>
            <div class="block lg:hidden text-center text-4xl font-cwt font-bold text-white links" style="margin: 100px auto">
                <router-link @click="mobile_nav_open=false" to="/">{{ lang_dict.navbar.home }}</router-link>
                <router-link @click="mobile_nav_open=false" to="/nfac">{{ lang_dict.navbar.nfac }}</router-link>
                <router-link @click="mobile_nav_open=false" to="">{{ lang_dict.navbar.niac }}</router-link>
                <router-link @click="mobile_nav_open=false" to="">{{ lang_dict.navbar.chcw }}</router-link>
                <router-link @click="mobile_nav_open=false" to="/about">{{ lang_dict.navbar.about }}</router-link>
                <router-link @click="mobile_nav_open=false" to="">{{ lang_dict.navbar.result }}</router-link>
                <router-link @click="mobile_nav_open=false" to="">{{ lang_dict.navbar.recruit }}</router-link>
                <a @click="lang_code='en_US'">English</a>
                <a @click="lang_code='zh_TW'">中文</a>
                <a @click="lang_code='ja_JP'">日本語</a>
            </div>
        </div>
    </transition>    
</template>

<script lang="ts">
import langDict from "@/components/language"
import { ref, watch} from "vue"
import { useStore } from 'vuex'
export default {
    name: "Navbar",
    setup() {
        //vuex
        const store = useStore()
        //sub navbar
        const sub_nav = ref(0);

        //mobile navbar
        const mobile_nav_open = ref(false);
        const mobileNav = function(){
            mobile_nav_open.value = !mobile_nav_open.value;
        }
        //language
        var lang_code = ref(store.state.lang_code);
        var lang_dict = ref(langDict(lang_code.value));
        watch(lang_code, ()=>{
            lang_dict.value = langDict(lang_code.value);
            store.commit('changeLang',lang_code.value);
            sub_nav.value = 0;
        });
        return {
            lang_dict,
            lang_code,
            mobile_nav_open,
            mobileNav,
            sub_nav,
        }
    },
}
</script>

<style lang="less">
.links {
    a {
        @apply block lg:inline-block my-10 lg:my-0 lg:px-3 lg:py-2 lg:hover:text-yellow-600 cursor-pointer hover:text-gray-300 lg:hover:bg-white duration-300 lg:rounded;
    }
}
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 1;
}
</style>
