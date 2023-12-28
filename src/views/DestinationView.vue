<template>
  <div class="bg-destination min-h-dvh">
    <HeaderComp class="pb-20"></HeaderComp>
    <PageTitle class="container pb-10" title="Pick your destination" pageNumber="01"></PageTitle>

    <div
      class="container flex flex-col items-center justify-center gap-20 pb-20 text-center xl:flex-row xl:gap-40 xl:text-start"
    >
      <img
        ref="planetImg"
        :src="currentPlanetData?.planetImg"
        :alt="currentPlanetData?.planetName"
        class="animate-[spin_30s_ease-in_infinite]"
      />
      <div class="md:w-2/3 xl:w-1/3">
        <nav class="pb-10">
          <ul class="flex justify-center gap-9 xl:justify-start">
            <li v-for="(planet, i) in planets" :key="i">
              <button
                @click="toggle(planet)"
                :class="{ 'border-b-[3px]': planet === currentPlanet }"
                class="trading-3 pb-1 font-barlow uppercase tracking-widest"
              >
                {{ planet }}
              </button>
            </li>
          </ul>
        </nav>
        <main>
          <h2 class="pb-4 text-8xl uppercase">{{ currentPlanetData?.planetName }}</h2>
          <p
            class="mb-7 border-b border-[#383B4B] pb-12 font-barlow text-lg leading-relaxed text-secondary"
          >
            {{ currentPlanetData?.paragraph }}
          </p>
          <div class="flex flex-col justify-center gap-8 md:flex-row md:gap-12">
            <section>
              <h3 class="pb-3 font-barlow text-sm text-secondary">AVG. DISTANCE</h3>
              <p class="text-3xl">{{ currentPlanetData?.planetDistance }}</p>
            </section>
            <section>
              <h3 class="pb-3 font-barlow text-sm uppercase text-secondary">Est. travel time</h3>
              <p class="text-3xl uppercase">{{ currentPlanetData?.planetTime }}</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComp from "../components/HeaderComp.vue";
import PageTitle from "../components/PageTitle.vue";
import MoonImage from "@/assets/images/destination/image-moon.png";
import MarsImage from "@/assets/images/destination/image-mars.png";
import TitanImage from "@/assets/images/destination/image-titan.png";
import EuropaImage from "@/assets/images/destination/image-europa.png";

import { ref, computed } from "vue";

interface planetDataType {
  planetName: string;
  planetDistance: string;
  planetTime: string;
  paragraph: string;
  planetImg: string;
}

const planets = ref<string[]>(["Moon", "Mars", "Europa", "Titan"]);
const planetData = ref<planetDataType[]>([
  {
    planetName: "Moon",
    planetDistance: "384,400 KM",
    planetTime: "3 days",
    planetImg: MoonImage,
    paragraph:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  },
  {
    planetName: "Mars",
    planetDistance: "225 MIL. KM",
    planetTime: "9 months",
    planetImg: MarsImage,
    paragraph:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
  },
  {
    planetName: "Europa",
    planetDistance: "628 MIL. KM",
    planetTime: "3 years",
    planetImg: EuropaImage,
    paragraph:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
  },
  {
    planetName: "Titan",
    planetDistance: "1.6 BIL. KM",
    planetTime: "7 years",
    planetImg: TitanImage,
    paragraph:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
  }
]);
const planetImg = ref<HTMLElement | null>(null);
const currentPlanet = ref<string>("Moon");

const currentPlanetData = computed(() => {
  return planetData.value.find((planet) => planet.planetName === currentPlanet.value);
});

function toggle(val: string) {
  currentPlanet.value = val;
}
</script>

<style scoped>
.bg-destination {
  background: url(@/assets/images/destination/background-destination-mobile.jpg) center/cover
    no-repeat;
}
@media screen and (min-width: 768px) {
  .bg-destination {
    background: url(@/assets/images/destination/background-destination-tablet.jpg) center/cover
      no-repeat;
  }
}
@media screen and (min-width: 1280px) {
  .bg-destination {
    background: url(@/assets/images/destination/background-destination-desktop.jpg) center/cover
      no-repeat;
  }
}
</style>
