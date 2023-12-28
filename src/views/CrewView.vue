<template>
  <div class="bg-crew min-h-dvh">
    <HeaderComp class="pb-10 xl:pb-20"></HeaderComp>
    <PageTitle class="container pb-12 uppercase" title="Meet your crew" pageNumber="02"></PageTitle>
    <main class="container flex flex-col-reverse gap-20 md:flex-col xl:flex-row xl:pb-20">
      <section class="flex flex-col-reverse text-center md:flex-col xl:w-7/12 xl:text-start">
        <div>
          <h3 class="pb-4 pt-14 uppercase text-gray-400 md:text-2xl xl:pt-20 xl:text-3xl">
            {{ currentMemberData?.role }}
          </h3>
          <h2 class="pb-7 text-2xl uppercase md:text-4xl xl:text-6xl">
            {{ currentMemberData?.name }}
          </h2>
          <p class="pb-12 font-barlow text-lg tracking-widest text-secondary xl:pb-32">
            {{ currentMemberData?.introduction }}
          </p>
        </div>
        <ul class="flex justify-center gap-4 xl:justify-start">
          <li v-for="name in Members" :key="name">
            <button
              :class="{
                'bg-white': name === currentMemberData?.name,
                'bg-gray-500': name !== currentMemberData?.name
              }"
              class="aspect-square w-2 rounded-full"
              @click="toggle(name)"
            ></button>
          </li>
        </ul>
      </section>
      <img
        class="mx-auto w-2/3 object-contain md:w-1/2 xl:ms-auto xl:w-1/3"
        :src="currentMemberData?.image"
        :alt="currentMemberData?.name"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import MemberDouglas from "@/assets/images/crew/image-douglas-hurley.png";
import MemberMark from "@/assets/images/crew/image-mark-shuttleworth.png";
import MemberVictor from "@/assets/images/crew/image-victor-glover.png";
import MemberAnousheh from "@/assets/images/crew/image-anousheh-ansari.png";

import HeaderComp from "@/components/HeaderComp.vue";
import PageTitle from "@/components/PageTitle.vue";

import { ref, computed } from "vue";

interface Member {
  name: string;
  introduction: string;
  role: string;
  image: string;
}
const currentMember = ref<string>("Douglas Hurley");

const crew = ref<Member[]>([
  {
    name: "Douglas Hurley",
    introduction:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    role: "Commander ",
    image: MemberDouglas
  },
  {
    name: "MARK SHUTTLEWORTH",
    introduction:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    role: "Mission Specialist ",
    image: MemberMark
  },
  {
    name: "VICTOR GLOVER",
    introduction:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    role: "Pilot",
    image: MemberVictor
  },
  {
    name: "ANOUSHEH ANSARI",
    introduction:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    role: "Flight Engineer",
    image: MemberAnousheh
  }
]);

const Members = computed(() => {
  return crew.value.map(({ name }) => name);
});

function toggle(val: string) {
  currentMember.value = val;
}

const currentMemberData = computed(() => {
  return crew.value.find(({ name }) => currentMember.value === name);
});
</script>

<style scoped>
.bg-crew {
  background: url(@/assets/images/crew/background-crew-mobile.jpg) center/cover no-repeat;
}
@media screen and (min-width: 768px) {
  .bg-crew {
    background: url(@/assets/images/crew/background-crew-tablet.jpg) center/cover no-repeat;
  }
}
@media screen and (min-width: 1280px) {
  .bg-crew {
    background: url(@/assets/images/crew/background-crew-desktop.jpg) center/cover no-repeat;
  }
}
</style>
