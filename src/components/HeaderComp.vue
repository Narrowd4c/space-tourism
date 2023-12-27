<template>
  <header class="pt-10 flex items-center px-6 md:pl-14 md:pr-0">
    <RouterLink to="/"><img src="/logo.svg" alt="logo" /></RouterLink>
    <div class="z-10 hidden h-px flex-grow translate-x-10 bg-white bg-opacity-40 xl:block"></div>
    <nav
      class="ms-auto hidden bg-white bg-opacity-5 px-12 text-white backdrop-blur-sm md:block xl:pl-[123px] xl:pr-[167px]"
    >
      <ul
        class="font-barlow flex items-center gap-x-[50px] tracking-[2.7px] [&_a]:block [&_a]:border-b-[3px] [&_a]:border-transparent [&_a]:py-10 hover:[&_a]:border-white"
      >
        <li>
          <RouterLink to="/"><span class="me-3  font-bold">00</span>HOME</RouterLink>
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
    <Transition name="menu">
      <button @click="menuToggle" v-show="menuClose" class="ms-auto md:hidden">
        <img src="@/assets/images/shared/icon-hamburger.svg" alt="menu" />
      </button>
    </Transition>
    <Transition name="menu">
      <nav
        v-show="!menuClose"
        class="z-10 origin-right fixed bottom-0 right-0 top-0 w-8/12 bg-white bg-opacity-5 text-white backdrop-blur-xl md:hidden"
      >
        <button @click="menuToggle" class="ms-auto block pb-16 pr-6 pt-8 md:hidden">
          <img src="@/assets/images/shared/icon-close.svg" alt="menu" />
        </button>
        <ul
          class="font-barlow space-y-8 pl-8 tracking-[2.7px]"
        >
          <li>
            <RouterLink to="/"><span class="me-3 font-bold">00</span>HOME</RouterLink>
          </li>
          <li>
            <RouterLink to="/"><span class="me-3 font-bold">01</span>DESTINATION</RouterLink>
          </li>
          <li>
            <RouterLink to="/"><span class="me-3 font-bold">02</span>CREW</RouterLink>
          </li>
          <li>
            <RouterLink to="/"><span class="me-3 font-bold">03</span>TECHNOLOGY</RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
const menuClose = ref<boolean>(true);
function debounce(fn:any, delay = 500) {
  let timer:number;
  // debounce function 最終會回傳一個 function
  return (...args: any[]) => {
    // 每一次 debounce function 被觸發時，會先清除之前的 timer，避免觸發先前的 fn 函式
    // 因此只要在 delay 時間內觸發 debounce function，就會一直清除先前的 timer，避免 fn 一直被執行
    clearTimeout(timer);
    // 清除之後，再重新計時
    // 當 delay 時間到時，執行 fn
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
const menuToggle = debounce(()=> menuClose.value = !menuClose.value, 300)

</script>
<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.5s ease;
}
.menu-leave-to,
.menu-enter-from {
  transform:scaleX(0);
}

.router-link-active{
  border-bottom: 3px solid #fff;
}

</style>
