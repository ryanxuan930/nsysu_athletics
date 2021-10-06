<template>
    <SlideShow :slide-Data="slide_data"></SlideShow>
    <Container class="text-gray-700">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="col-span-1 lg:col-span-2">
                <div class="text-2xl">最新消息</div>
                <hr>
                    <div class="p-2 flex hover:bg-yellow-50 cursor-pointer items-center">
                        <div class="inline-block" style="white-space: nowrap;">
                            <div class="py-0.5 px-1 border-2 border-yellow-600 text-yellow-600 rounded">類別</div>
                        </div>
                        <div class="inline-block ml-2" style="white-space: nowrap;">0000-00-00</div>
                        <div class="inline-block ml-0 lg:ml-2">公告內容</div>
                    </div>
                    <hr class="mx-2">
                <template>
                    
                </template>
            </div>
            <div>
                <div class="text-2xl">Facebook 動態</div>
                <hr>
                <div class="fb-page" data-href="https://www.facebook.com/NSYSUAthletics" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/NSYSUAthletics" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/NSYSUAthletics">國立中山大學田徑校隊</a></blockquote></div>
            </div>
        </div>
    </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideShow from "@/components/home/SlideShow.vue"
import Container from "@/components/Container.vue"

export default defineComponent({
    name: 'Home',
    setup() {
        const slide_data = [
            "/assets/slideshow/01.jpg",
            "/assets/slideshow/02.jpg",
            "/assets/slideshow/03.jpg",
            "/assets/slideshow/04.jpg",
            "/assets/slideshow/05.jpg",
            "/assets/slideshow/06.jpg",
            "/assets/slideshow/07.jpg"
        ];
        return { 
            slide_data,
        }
    },
    components: {
        SlideShow,
        Container,
    },
});
</script>
