<template>
    <Container class="text-gray-700">
        <div>
            <table class="w-full border-collapse mb-5" id="button_table">
                <tr>
                    <td>
                        <div>報名登入</div>
                    </td>
                    <td>
                        <a href="https://ryanxuan930.github.io/cdn/nsysu_athletics/document/NFAC2021.pdf" target="_blank" class="no-underline">
                            <div>競賽規程</div>
                        </a>
                    </td>
                    <td>
                        <div>場地配置</div>
                    </td>
                    <td>
                        <div>選手編配</div>
                    </td>
                    <td>
                        <div>成績公告</div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <div class="mb-5">
                    <div class="text-2xl">賽事公告</div>
                    <hr>
                    <div class="p-2">
                        目前無公告
                    </div>
                </div>
                <div>
                    <div class="text-2xl">成績公告</div>
                    <hr>
                    <div class="p-2">
                        目前無成績
                    </div>
                </div>
            </div>
            <div>
                <div class="text-2xl">賽程資訊</div>
                <hr>
                <table class="border-collapse w-full">
                    <tr>
                        <th class="p-2">時間</th>
                        <th class="p-2">賽別</th>
                        <th class="p-2">組別</th>
                        <th class="p-2">項目</th>
                    </tr>
                    <tr v-for="(item, index) in 5" :key="index" class="even:bg-gray-100 text-center">
                        <td class="p-2">17:00</td>
                        <td class="p-2">決賽 FNL</td>
                        <td class="p-2">男子組 M</td>
                        <td class="p-2">100M</td>
                    </tr>
                </table>
            </div>
        </div>
    </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from "@/components/Container.vue"

export default defineComponent({
    setup() {
        return {

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
