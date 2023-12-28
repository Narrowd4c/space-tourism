<template>
  <div class="bg-home min-h-dvh">
    <HeaderComp></HeaderComp>
    <div class="container pb-40 pt-[251px] text-center xl:flex xl:pb-0 xl:text-left">
      <main class="mx-auto mb-20 lg:mb-[156px] xl:mx-0 xl:mb-0 xl:w-4/12">
        <h2 ref="subTitle" class="font-barlow text-secondary md:text-2xl">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 ref="title" class="py-6 text-8xl leading-none md:text-[150px]">SPACE</h1>
        <p ref="paragraph" class="mx-auto font-barlow text-secondary md:w-1/2 xl:w-full">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </main>
      <button
        ref="exploreButton"
        class="ms-auto mt-auto h-[274px] w-[274px] rounded-full bg-white text-xl tracking-widest text-black hover:animate-custom-ping md:text-3xl"
      >
        EXPLORE
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import HeaderComp from "../components/HeaderComp.vue";
import { ref, onMounted } from "vue";
const exploreButton = ref<any>(null);
const subTitle = ref<any>(null);
const title = ref<any>(null);
const paragraph = ref<any>(null);

const tl = gsap.timeline();
onMounted(() => {
  tl.from(exploreButton.value, { scale: 1.2, opacity: 0, duration: 1, delay: 2 });
  tl.to(exploreButton.value, {
    boxShadow: "0 0 0 12px rgba(255,255,255,0.2)",
    duration: 0.3,
    repeat: 1
  });
  tl.to(exploreButton.value, { boxShadow: "0 0 0 0px rgba(255,255,255,0)", duration: 1 });
  gsap.from(subTitle.value, { x: -200, opacity: 0, duration: 1.5, delay: 0.5 });
  gsap.from(title.value, { x: -200, opacity: 0, duration: 1.5, delay: 1 });
  gsap.from(paragraph.value, { x: -200, opacity: 0, duration: 1.5, delay: 1.2 });
});
</script>
<style>
.bg-home {
  background: url(@/assets/images/home/background-home-mobile.jpg) center/cover no-repeat;
}
@media screen and (min-width: 768px) {
  .bg-home {
    background: url(@/assets/images/home/background-home-tablet.jpg) center/cover no-repeat;
  }
}
@media screen and (min-width: 1280px) {
  .bg-home {
    background: url(@/assets/images/home/background-home-desktop.jpg) center/cover no-repeat;
  }
}
</style>
