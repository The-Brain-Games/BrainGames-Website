<template>
  <div id="app" class="bg-gray-900">
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img class="object-cover object-center rounded" alt="BrainGames Logo" width="50px" :src="brain">
          <span class="ml-3 text-xl">BrainGames</span>
        </span>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <router-link to="/"><span class="mr-5 hover:text-white">Home</span></router-link>
          <router-link to="/hello"><span class="mr-5 hover:text-white">Hello</span></router-link>
          <router-link to="/"><span class="mr-5 hover:text-white">Link 3</span></router-link>
          <router-link to="/hello"><span class="mr-5 hover:text-white">Link 4</span></router-link>
        </nav>
        <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
    data () {
        return {
            brain: require('@/assets/brain.png')
        }
    },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
