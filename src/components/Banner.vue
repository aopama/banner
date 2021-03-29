<template>
    <div class="cl">
        <div class="banner cl">
            <swiper ref="mySwiper" @swiper="onSwiper" :loop="true" navigation :autoplay="autoplay" :pagination="pagination">
                <swiper-slide v-for="(item, index) in slides" :key="index" @mouseenter="enter()" @mouseleave="leave()">
                    <div class="img_warp">
                        <img class="bg bannrImgAnimation" :src="item.src" alt="">
                        <div class="banner_cont">
                            <img class="bg0 descAnimation delay-1" :src="item.srct" alt="">
                            <div class="banenr_txt">
                                <div class="name descAnimation delay-2">{{item.name}}</div>
                                <div class="desc descAnimation delay-2">{{item.desc}}</div>
                                <div class="btn_warp descAnimation delay-3"><a :href="item.hrf">{{item.btxt}}</a></div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination" :class="isStop?'stop':''" slot="pagination" id="custom"> </div>
        </div>
    </div>
</template>
<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';
import 'swiper/components/scrollbar/scrollbar.less';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

export default {
    name: 'Banner',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {},
    data() {
        return {
            isStop: false, //是否停止动画
            s1: '', //banner 
            autoplay: {
                delay:4500, //1秒切换一次
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="sItem ' + className + '"></span>';
                },
            },
            slides:[
              {src:'https://lilithimage.lilithcdn.com/official-web-lilith/home/bannerPC20210302/sgame.jpg',srct:'https://lilithimage.lilithcdn.com/official-web-lilith/logo/logo_aoc_cn%403x.png',name:'剑与家园',desc:'向全世界展示中国玩家的实力',btxt:'了解详情',hrf:'javascript:;'},
              {src:'https://lilithimage.lilithcdn.com/official-web-lilith/home/bannerPC20210302/rok.png',srct:'https://lilithimage.lilithcdn.com/official-web-lilith/logo/logo_aoc_cn%403x.png',name:'剑与家园',desc:'向全世界展示中国玩家的实力',btxt:'了解详情',hrf:'javascript:;'},
              {src:'https://lilithimage.lilithcdn.com/official-web-lilith/home/bannerPC20210302/isoland2.png',srct:'https://lilithimage.lilithcdn.com/official-web-lilith/logo/logo_aoc_cn%403x.png',name:'剑与家园',desc:'向全世界展示中国玩家的实力',btxt:'了解详情',hrf:'javascript:;'},
              {src:'https://lilithimage.lilithcdn.com/official-web-lilith/home/bannerPC20210302/warpath.png',srct:'https://lilithimage.lilithcdn.com/official-web-lilith/logo/logo_aoc_cn%403x.png',name:'剑与家园',desc:'向全世界展示中国玩家的实力',btxt:'了解详情',hrf:'javascript:;'},
            ]
        };
    },
    created() {},
    mounted() {},
    computed: {

    },
    methods: {
        onSwiper(swiper) {
            this.s1 = swiper
        },
        enter() {
            this.s1.autoplay.stop();
            this.isStop = true;
        },
        leave() {
            this.s1.autoplay.start();
            this.isStop = false;
        }

    }
}
</script>
<style scoped>
.banner {
    background:#000;
    overflow: hidden;
    width: 100vw;
    height: 540px;
    text-align:center;

}

.swiper-container {
    height:540px
}

.swiper-pagination {
    height: 26px;
    background: #000;
    width: 100%;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    display: flex;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
















</style>