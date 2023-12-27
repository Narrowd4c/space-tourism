<template>
  <div class="container mb-40 mt-[251px] flex">
    <main class="w-6/12 xl:w-4/12">
      <h2 ref="subTitle" class="font-barlow text-2xl text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h2>
      <h1 ref="title" class="py-6 text-[150px] leading-none">SPACE</h1>
      <p ref="paragraph" class="font-barlow text-[#D0D6F9]">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>
    </main>
    <button
    ref="exploreButton"
      class="hover:animate-custom-ping ms-auto mt-auto h-[274px] w-[274px] rounded-full bg-white text-black"
    >
      EXPLORE
    </button>
  </div>
  
</template>

<script setup lang="ts">
import { gsap } from "gsap";

import { ref, onMounted } from "vue";
const exploreButton = ref<any>(null);
const subTitle = ref<any>(null);
const title = ref<any>(null);
const paragraph = ref<any>(null);

const tl = gsap.timeline();
onMounted(() => {
  tl.from(exploreButton.value, { scale: 1.2, opacity: 0, duration: 1, delay: 2 });
  tl.to(exploreButton.value, { boxShadow: "0 0 0 12px rgba(255,255,255,0.2)", duration: 0.3, repeat: 1,});
  tl.to(exploreButton.value, { boxShadow: "0 0 0 0px rgba(255,255,255,0)", duration: 1, });
  gsap.from(subTitle.value, { x:-200, opacity: 0, duration: 1.5, delay:0.5  });
  gsap.from(title.value, { x:-200, opacity: 0, duration: 1.5, delay: 1 });
  gsap.from(paragraph.value, { x:-200, opacity: 0, duration: 1.5, delay: 1.2 });
});
</script>
