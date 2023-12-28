<template>
  <div class="bg-technology min-h-dvh">
    <HeaderComp></HeaderComp>
    <div class="container overflow-hidden py-20 xl:pr-0">
      <PageTitle title="SPACE LAUNCH 101" pageNumber="03"></PageTitle>
      <main ref="gsapAnimation" class="flex flex-wrap items-center xl:flex-nowrap">
        <picture class="xl:order-3">
          <source :srcset="currentData!.image.landscape" media="(min-width: 1280px)" />
          <img class="ms-auto" :src="currentData!.image.portrait" :alt="currentData!.title" />
        </picture>
        <div class="mx-auto flex gap-8 py-10 xl:flex-col xl:py-0">
          <button
            class="aspect-square w-20 rounded-full border bg-transparent text-2xl hover:bg-white hover:text-black"
            v-for="(t, i) in terminologyTitle"
            @click="toggle(t)"
            :key="t"
          >
            {{ i + 1 }}
          </button>
        </div>
        <section class="text-center xl:ml-20 xl:mr-24 xl:w-[600px] xl:text-left">
          <h3 class="pb-3 text-secondary">THE TERMINOLOGY…</h3>
          <h2 class="pb-4 text-6xl">{{ currentData!.title }}</h2>
          <p class="text-lg leading-relaxed">
            {{ currentData!.paragraph }}
          </p>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { computed, ref, watchEffect } from "vue";

import HeaderComp from "../components/HeaderComp.vue";
import PageTitle from "../components/PageTitle.vue";

import LaunchLand from "../assets/images/technology/image-launch-vehicle-landscape.jpg";
import LaunchPort from "../assets/images/technology/image-launch-vehicle-portrait.jpg";
import SpaceLand from "../assets/images/technology/image-space-capsule-landscape.jpg";
import SpacePort from "../assets/images/technology/image-space-capsule-portrait.jpg";
import SpaceportLand from "../assets/images/technology/image-spaceport-landscape.jpg";
import SpaceportPort from "../assets/images/technology/image-spaceport-portrait.jpg";

type Terminology = {
  title: string;
  paragraph: string;
  image: {
    portrait: string;
    landscape: string;
  };
};
const dataTerminology = ref<Terminology[]>([
  {
    title: "LAUNCH VEHICLE",
    paragraph: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    image: {
      portrait: LaunchLand,
      landscape: LaunchPort
    }
  },
  {
    title: "SPACEPORT",
    paragraph: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    image: {
      portrait: SpaceLand,
      landscape: SpacePort
    }
  },
  {
    title: "SPACE CAPSULE",
    paragraph: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    image: {
      portrait: SpaceportLand,
      landscape: SpaceportPort
    }
  }
]);
const current = ref<string>("LAUNCH VEHICLE");

const terminologyTitle = computed(() => {
  return dataTerminology.value.map(({ title }) => title);
});
const currentData = ref<Terminology>();
let mm = gsap.matchMedia();
const gsapAnimation = ref<HTMLElement | null>(null);

watchEffect(() => {
  currentData.value = dataTerminology.value.find(({ title }) => title == current.value);
  mm.add("(min-width: 1280px)", () => {
    gsap.from(gsapAnimation.value, { y: 200, opacity: 0, duration: 1, ease: "back.out(1.7)" });
  });
});

function toggle(title: string) {
  current.value = title;
}
</script>

<style scoped>
.bg-technology {
  background: url(@/assets/images/technology/background-technology-mobile.jpg) center/cover
    no-repeat;
}
@media screen and (min-width: 768px) {
  .bg-technology {
    background: url(@/assets/images/technology/background-technology-tablet.jpg) center/cover
      no-repeat;
  }
}
@media screen and (min-width: 1280px) {
  .bg-technology {
    background: url(@/assets/images/technology/background-technology-desktop.jpg) center/cover
      no-repeat;
  }
}
</style>
