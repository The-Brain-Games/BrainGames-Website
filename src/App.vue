<template>
  <div id="app" class="bg-gray-900">
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <router-link to="/">
          <span class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img class="object-cover object-center rounded" alt="Brain Games Logo" width="50px" :src="brain">
            <span class="ml-3 text-xl">Brain Games</span>
          </span>
        </router-link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <router-link to="/"><span class="mr-5 hover:text-white">Home</span></router-link>
          <router-link to="/braincraft"><span class="mr-5 hover:text-white">BrainCraft</span></router-link>
          <router-link to="/brainng"><span class="mr-5 hover:text-white">BrainNG</span></router-link>
          <router-link to="/about-us"><span class="mr-5 hover:text-white">About Us</span></router-link>
          <div class="no-mobile">
          </div>
        </nav>
        <span class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" style="margin-right: 15px;">
            <span class="blink_me" style="margin-right: 5px;" v-if="online == 2"><svg height="10" width="10"><circle cx="5" cy="5" r="5" fill="#3bc38e" /></svg> </span><strong style="color: #3bc38e;" v-if="online == 2"> Online</strong>
            <span class="blink_me" style="margin-right: 5px;" v-if="online == 1"><svg height="10" width="10"><circle cx="5" cy="5" r="5" fill="yellow" /></svg> </span><strong style="color: yellow;" v-if="online == 1"> Outages</strong>
            <span class="" style="margin-right: 5px;" v-if="online == 0"><svg height="10" width="10"><circle cx="5" cy="5" r="5" fill="red" /></svg> </span><strong style="color: red;" v-if="online == 0"> Offline</strong>
        </span>
        <a href="https://www.patreon.com/thebraingames" target="_blank" rel="noopener noreferrer">
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Donate
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
          
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <footer class="footer text-gray-400 bg-gray-900 body-font relative pt-1 border-b-2 border-pink-700">
      <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
              <span class="font-bold text-white uppercase mb-2">Pages</span>
              <span class="my-2"><router-link to="/braincraft"><div class="text-pink-700 text-md hover:text-pink-500">BrainCraft</div></router-link></span>
              <span class="my-2"><router-link to="/brainng"><div class="text-pink-700 text-md hover:text-pink-500">BrainNG</div></router-link></span>
              <span class="my-2"><router-link to="/about-us"><div class="text-pink-700 text-md hover:text-pink-500">About us</div></router-link></span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Support</span>
              <span class="my-2"><a href="https://www.patreon.com/thebraingames" target="_blank" rel="noopener noreferrer" class="text-pink-700  text-md hover:text-pink-500">Donate</a></span>
              <span class="my-2"><a href="https://discord.gg/TfvF9J8Ks8" target="_blank" rel="noopener noreferrer" class="text-pink-700 text-md hover:text-pink-500">BrainCraft Discord</a></span>
              <span class="my-2"><a href="https://discord.gg/vhGhEsDyCf" target="_blank" rel="noopener noreferrer" class="text-pink-700 text-md hover:text-pink-500">BrainNG Discord</a></span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Source</span>
              <span class="my-2"><a href="https://github.com/The-Brain-Games/BrainGames-Website" target="_blank" rel="noopener noreferrer" class="text-pink-700 text-md hover:text-pink-500">Github</a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-pink-700 font-bold mb-2">
              Brain Games
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    data () {
        return {
            brain: require('@/assets/brain.png'),
            online: 2,
            results: [],
            vanillaServer: {},
            moddedServer: {},
            vanillaPlayers: [],
            moddedPlayers: [],
        }
    }, methods: {
      setServerStatus() {
        var count = 0;
        let uri = 'https://api.realbraingames.com:24568/beammp';
        this.axios.get(uri).then(res => {
          count+= res.data.length;
          let url = 'https://api.realbraingames.com:24568/mc';
          this.axios.get(url).then(res => {
          if (res.data.status == 'offline') {
            console.log("Offline");
          } else {
            count++;
          }

          console.log(count);
          if (count == 3) {
            this.online = 2;
          } else if (count > 0) {
            this.online = 1;
          } else {
            this.online = 0;
          }
          });
        });
      }
    }, created() {
      this.setServerStatus();
    }
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
.blink_me {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
