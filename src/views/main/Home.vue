<template>
    <Container class="text-gray-700">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="col-span-1 lg:col-span-2">
                <Countdown :lang-code="lang_code"></Countdown>
                <table id="event_button">
                    <tr>
                        <td>
                            <div @click="$router.push('/nfac')">{{ lang_dict.navbar.nfac }}</div>
                        </td>
                        <td>
                            <div>{{ lang_dict.navbar.niac }}</div>
                        </td>
                        <td>
                            <div>{{ lang_dict.navbar.chcw }}</div>
                        </td>
                    </tr>
                </table>
                <div class="text-2xl">{{ lang_dict.homepage.news }}</div>
                <hr>
                    <div class="p-2 flex hover:bg-yellow-50 cursor-pointer items-center">
                        <div class="inline-block" style="white-space: nowrap;">
                            <div class="py-0.5 px-1 border-2 border-yellow-600 text-yellow-600 rounded">置頂</div>
                        </div>
                        <div class="inline-block ml-2" style="white-space: nowrap;">2021-10-09</div>
                        <div class="inline-block ml-0 lg:ml-2">新生盃報名開始，請至「新生盃」查看相關資訊及連結</div>
                    </div>
                    <hr class="mx-2">
                <template>
                    
                </template>
            </div>
            <div>
                <div class="text-2xl">{{ lang_dict.homepage.fb_timeline }}</div>
                <hr>
                <div class="fb-page" data-href="https://www.facebook.com/NSYSUAthletics" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/NSYSUAthletics" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/NSYSUAthletics">國立中山大學田徑校隊</a></blockquote></div>
            </div>
        </div>
    </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from "@/components/Container.vue"
import Countdown from "@/components/home/Countdown.vue"
import langDict from "@/components/language"
import { ref, watch, computed} from "vue"
import { useStore } from 'vuex'

export default defineComponent({
    name: 'Home',
    setup() {
        //vuex
        const store = useStore()
        //language
        var lang_code = computed(() => store.state.lang_code);
        var lang_dict = ref(langDict(lang_code.value));
        watch(lang_code, ()=>{
            lang_dict.value = langDict(lang_code.value);
        });
        return { 
            lang_dict,
            lang_code,
        }
    },
    components: {
        Container,
        Countdown,
    },
});
</script>

<style lang="less" scoped>
#event_button{
    @apply border-collapse w-full my-3;
    td {
        @apply p-0;
    }
    div  {
        @apply text-white border-0 w-full bg-yellow-600 p-3 text-center text-xl cursor-pointer hover:bg-yellow-500 duration-300;
    }
}
</style>
