<template>
  <header class="flex items-center px-6 pt-10 md:pl-14 md:pr-0">
    <RouterLink to="/" style="border-bottom: 0px"><img src="/logo.svg" alt="logo" /></RouterLink>
    <div class="z-10 hidden h-px flex-grow translate-x-10 bg-white bg-opacity-40 xl:block"></div>
    <nav
      class="ms-auto hidden bg-white bg-opacity-5 px-12 text-white backdrop-blur-sm md:block xl:pl-[123px] xl:pr-[167px]"
    >
      <ul
        class="flex items-center gap-x-[50px] font-barlow tracking-[2.7px] [&_a]:block [&_a]:border-b-[3px] [&_a]:border-transparent [&_a]:py-10 hover:[&_a]:border-white"
      >
        <li>
          <RouterLink to="/"><span class="me-3 font-bold">00</span>HOME</RouterLink>
        </li>
        <li>
          <RouterLink to="/destination"
            ><span class="me-3 font-bold">01</span>DESTINATION</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/crew"><span class="me-3 font-bold">02</span>CREW</RouterLink>
        </li>
        <li>
          <RouterLink to="/technology"><span class="me-3 font-bold">03</span>TECHNOLOGY</RouterLink>
        </li>
      </ul>
    </nav>
    <Transition name="menu">
      <button @click="menuToggle" v-show="menuClose" class="ms-auto md:hidden">
        <img src="@/assets/images/shared/icon-hamburger.svg" alt="menu" />
      </button>
    </Transition>
    <Transition name="menu">
      <nav
        v-show="!menuClose"
        class="fixed bottom-0 right-0 top-0 z-10 w-8/12 origin-right bg-white bg-opacity-5 text-white backdrop-blur-xl md:hidden"
      >
        <button @click="menuToggle" class="ms-auto block pb-16 pr-6 pt-8 md:hidden">
          <img src="@/assets/images/shared/icon-close.svg" alt="menu" />
        </button>
        <ul class="space-y-8 pl-8 font-barlow tracking-[2.7px]">
          <li>
            <RouterLink to="/"><span class="me-3 font-bold">00</span>HOME</RouterLink>
          </li>
          <li>
            <RouterLink to="/destination"><span class="me-3 font-bold">01</span>DESTINATION</RouterLink>
          </li>
          <li>
            <RouterLink to="/crew"><span class="me-3 font-bold">02</span>CREW</RouterLink>
          </li>
          <li>
            <RouterLink to="/technology"><span class="me-3 font-bold">03</span>TECHNOLOGY</RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { debounce } from '../composables/debounce';
const menuClose = ref<boolean>(true);

const menuToggle = debounce(() => (menuClose.value = !menuClose.value), 300);
</script>
<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.5s ease;
}
.menu-leave-to,
.menu-enter-from {
  transform: scaleX(0);
}

.router-link-active {
  border-bottom: 3px solid #fff;
}
</style>
