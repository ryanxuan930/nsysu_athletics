<template>
    <Container class="text-gray-700">
        <div>
            <table class="w-full border-collapse mb-5" id="button_table">
                <tr>
                    <td>
                        <a href="https://nsysu-athletics.github.io/site/registration/" target="_blank" class="no-underline">
                            <div>{{lang_dict.nfac.registration}}</div>
                        </a>
                    </td>
                    <td>
                        <a href="https://ryanxuan930.github.io/cdn/nsysu_athletics/document/NFAC2021.pdf" target="_blank" class="no-underline">
                            <div>{{lang_dict.nfac.regulation}}</div>
                        </a>
                    </td>
                    <td>
                        <a href="https://ryanxuan930.github.io/cdn/nsysu_athletics/map/map.svg" target="_blank" class="no-underline">
                            <div>{{lang_dict.nfac.site_map}}</div>
                        </a>
                    </td>
                    <td>
                        <div>{{lang_dict.nfac.start_list}}</div>
                    </td>
                    <td>
                        <div>{{lang_dict.nfac.results}}</div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <div class="mb-5">
                    <div class="text-2xl">{{lang_dict.nfac.announce}}</div>
                    <hr>
                    <div class="p-2">
                        目前無公告
                    </div>
                </div>
            </div>
            <div>
                <div class="text-2xl">{{lang_dict.nfac.timetable}}</div>
                <hr>
                <table class="border-collapse w-full">
                    <tr>
                        <th class="p-2">{{lang_dict.nfac.time}}</th>
                        <th class="p-2">{{lang_dict.nfac.phase}}</th>
                        <th class="p-2">{{lang_dict.nfac.group}}</th>
                        <th class="p-2">{{lang_dict.nfac.event}}</th>
                    </tr>
                    <tr v-for="(item, index) in timetable" :key="index" class="even:bg-gray-100 text-center">
                        <td class="p-2">{{item.datetime}}</td>
                        <td class="p-2">{{item.phase}}</td>
                        <td class="p-2">{{item.sex}}</td>
                        <td class="p-2">{{item.event}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </Container>
</template>

<script lang="ts">
import { defineComponent , ref , computed ,watch } from 'vue'
import Container from "@/components/Container.vue"
import axios from 'axios'
import { useStore } from 'vuex'
import langDict from "@/components/language"

export default defineComponent({
    setup() {
        //vuex
        const store = useStore()
        //language
        var lang_code = computed(() => store.state.lang_code);
        var lang_dict = ref(langDict(lang_code.value));
        watch(lang_code, ()=>{
            lang_dict.value = langDict(lang_code.value);
        });
        //timetable
        const eventList: any = {
            '100m': {zh_TW: '100公尺', en_US: '100M',ja_JP:'100M'},
            '400m': {zh_TW: '400公尺', en_US: '400M',ja_JP:'400M'},
            '1500m': {zh_TW: '1500公尺', en_US: '1500M',ja_JP:'1500M'},
            'JT': {zh_TW: '標槍', en_US: 'Javelin Throw',ja_JP:'やり投'},
            'SP': {zh_TW: '鉛球', en_US: 'Shot Put',ja_JP:'砲丸投'},
            'LJ': {zh_TW: '跳遠', en_US: 'Long Jump',ja_JP:'走幅跳'},
            '400mR': {zh_TW: '4×100公尺接力', en_US: '4×100 M Relay',ja_JP:'4×100m リレー'},
            '2000mMR': {zh_TW: '10×200公尺混接', en_US: 'Mixed 10×200 M Relay',ja_JP:'混合10×200m リレー'},
        }
        const timetable: any = ref({});
        function getTimetable(){
            axios.get('https://athletics.nsysu.rikujo.xyz/nsysua_backend/homepage/nfac/timetable/fetch.php').then((response) => {
                var temp:any = response.data;
                for(var i = 0; i < temp.length; i++) {
                    temp[i].datetime = temp[i].datetime.substr(11,5);
                    if(temp[i].sex==1){
                        temp[i].sex = lang_code.value=='zh_TW'? '男子組': 'Male';
                    }else if(temp[i].sex==2){
                        temp[i].sex = lang_code.value=='zh_TW'? '女子組': 'Female';
                    }else{
                        temp[i].sex = lang_code.value=='zh_TW'? '混合組': 'Mixed';
                    }
                    temp[i].event = eventList[temp[i].event][lang_code.value];
                    if(temp[i].phase==2){
                        temp[i].phase = lang_code.value=='zh_TW' ? '決賽':'FNL';
                    }else{
                        temp[i].phase = lang_code.value=='zh_TW' ? '預賽':'PRE';
                    }
                }
                timetable.value = temp;
            });
        }
        getTimetable();
        watch(lang_code, ()=>{
            getTimetable();
        });
        return {
            timetable,
            lang_code,
            lang_dict
        }
    },
    components: {
        Container,
    }
})
</script>

<style lang="less" scoped>
#button_table {
    td {
        @apply p-0;
        div {
            @apply text-white border-0 w-full bg-yellow-600 p-3 text-center text-xl cursor-pointer hover:bg-yellow-500 duration-300;
        }
    }
}
</style>
