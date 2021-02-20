<template>
<div>
  <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-3 text-white">BrainNG Servers</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-pink-600 mb-4">We are proud to host two of the most popular servers on the BeamMP, one of which including one of the largest modpacks on the platform!</p>
      <h2 class="title-font font-medium text-3xl text-white">{{results[1].cversion}}</h2>
      <p class="leading-relaxed">BeamMP Version</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Shooting Stars</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-white">Vanilla Server</h1>
        <div class="leading-relaxed text-pink-600">Looking for something quick and fun to play with your friends? If so, this is the server for you!</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">{{results[0].players}}</h2>
        <p class="leading-relaxed">Players on Now</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">{{results[0].maxplayers}}</h2>
        <p class="leading-relaxed">Max Players</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <div class="leading-relaxed text-pink-600">Players Online Now</div>
      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider" v-for="player in vanillaPlayers" :key="player">{{player}}</h2>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-white">Modded Server</h1>
        <div class="leading-relaxed text-pink-600">Getting bored of the default vehicles? This server is one of the most modded on BeamMP with over 110+ mods to choose from!</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">{{results[1].players}}</h2>
        <p class="leading-relaxed">Players on Now</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">{{results[1].maxplayers}}</h2>
        <p class="leading-relaxed">Max Players</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">{{results[1].modstotal}}</h2>
        <p class="leading-relaxed">Mods</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <div class="leading-relaxed text-pink-600">Players Online Now</div>
      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider" v-for="player in moddedPlayers" :key="player">{{player}}</h2>
    </div>
  </div>
</section>
</div>
</template>

<script>
 export default {
   data() {
    return {
     results: [],
     vanillaPlayers: [],
     moddedPlayers: [],
    }
   },
   created() {
   let uri = 'http://localhost:4000/beammp';
   this.axios.get(uri).then(res => {
    this.results = res.data;
    this.vanillaPlayers = res.data[0].playerslist.split(";");
    this.moddedPlayers = res.data[1].playerslist.split(";");
   });
   
  

  }
 }
</script>

<style>

</style>