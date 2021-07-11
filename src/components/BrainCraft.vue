<!-- 
  Copyright (c) <year>, <copyright holder>
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree. 
-->

<template>
<div>
  <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">BrainCraft</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-pink-600">BrainCraft is a 1.16.5 semi-vanilla Minecraft smp server that was opened back in March of 2020. The server can be joined on version 1.16.5 of the bedrock or java edition's of Minecraft</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="img1">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">BrainCraft</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Semi-Vanilla</h1>
            <p class="leading-relaxed">This server includes useful plugins such as land claims and a sign shop system.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="img2">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">BrainCraft</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Community</h1>
            <p class="leading-relaxed">BrainCraft is a small, humble community who are very active on the <a href="https://discord.gg/uWKNJbj7dT" style="color:#753e61" target="_blank" rel="noopener noreferrer">Discord</a>.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="img3">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">BrainCraft</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Economy</h1>
            <p class="leading-relaxed">BrainCraft has a completely player built economy using diamonds as a currency and player built shops.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-6 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-2xl mb-2 text-white">BrainCraft Server Status:</h1>
        <!-- <div class="leading-relaxed text-pink-600">The current status of BrainCraft</div> -->
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">{{results.onlinePlayers}}</h2>
        <p class="leading-relaxed">Players on Now</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">{{results.maxPlayers}}</h2>
        <p class="leading-relaxed">Max Players</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-2xl text-white">{{results.version}}</h2>
        <p class="leading-relaxed">Version</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <div class="leading-relaxed text-pink-600">Players Online Now</div>
      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider" v-for="player in players" :key="player">{{player.name}}</h2>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-12 mx-auto flex flex-wrap">
    <div class="container border-4 border-gray-800">
      <iframe
        class="iframe-placeholder"
        src="https://map.realbraingames.com:24569/"
        width="100%"
        height="1200" 
        frameborder="0">
        <p>Your browser does not support iframes.</p>
     </iframe>
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
     players: [],
     img1: require('@/assets/BrainCraft/shops.jpg'),
     img2: require('@/assets/BrainCraft/community.jpg'),
     img3: require('@/assets/BrainCraft/district.jpg')
    }
   },
   created() {
   let uri = 'https://api.realbraingames.com:24568/mc';
   this.axios.get(uri).then(res => {
    this.results = res.data;
    this.players = res.data.samplePlayers;
   });
  }
 }
</script>

<style>
.iframe-placeholder {
  background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100% 100%"><text fill="%23a255a6" x="50%" y="50%" font-family="\'Lucida Grande\', sans-serif" font-size="24" text-anchor="middle">Loading Dynamic Map...</text></svg>') 0px 0px no-repeat;
}
</style>