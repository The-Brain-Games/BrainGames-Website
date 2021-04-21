<template>
<div>
  <div class="w-full bg-cover bg-center header-image" style="height:32rem;">
    <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
      <div class="text-center">
        <h1 class="text-white text-4xl font-semibold font-serif uppercase md:text-8xl">The Brain Games</h1>
          <a href="https://discord.gg/TfvF9J8Ks8" target="_blank" rel="noopener noreferrer">
            <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500" style="margin-right: 10px; background-color: #db2777;">BrainCraft</button>
          </a>
          <a href="https://discord.gg/vhGhEsDyCf" target="_blank" rel="noopener noreferrer">
            <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500" style="margin-right: 10px; background-color: #d46b22;">BrainNG</button> <!-- color options: #c45506, #d97732, #d46b22 -->
          </a>
          <a href="https://www.patreon.com/thebraingames" target="_blank" rel="noopener noreferrer">
            <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Donate</button>
          </a>
        </div>
      </div>
    </div>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto space-y-6">
      <div class="flex items-start justify-center space-x-5">
        <div class="flex flex-col text-center md:text-right w-full mb-20 max-w-md">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            <router-link to="/braincraft">BrainCraft</router-link>
          </h1>
          <p class="leading-relaxed text-pink-600 text-center md:text-right">BrainCraft is a 1.16.5 semi-vanilla Minecraft smp server that was opened back in March of 2020.<br/><br/>The server can be joined on version 1.16.5 of the bedrock or java edition's of Minecraft.</p>
        </div>
        <iframe class="hidden md:block" src="https://discord.com/widget?id=804162605107249213&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
      <div class="flex items-start justify-center space-x-5">
        <iframe class="block w-full mb-20 max-w-md md:hidden" src="https://discord.com/widget?id=804162605107249213&theme=dark" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
      <div class="flex items-start justify-center space-x-5">
        <div class="flex flex-col text-center md:text-right w-full mb-20 max-w-md">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            <router-link to="/brainng">BrainNG</router-link>
          </h1>
          <p class="leading-relaxed text-pink-600 text-center md:text-right">The BrainNG Discord is a place for enthusiasts of the game Beam.NG to play multiplayer on the BeamMP servers we host. We are proud to host two of the most popular servers on the platform, one of which including one of the largest modpacks on the platform! We host events for people to take part in on our Discord and serve as a place for these people to communicate.<br/><br/>On top of the BeamMP servers, this discord is also home to the <a href="https://top.gg/bot/784631695902375956" style="color:#820d94" target="_blank" rel="noopener noreferrer">BeamMP Status discord bot</a>. This bot is used by multiple other servers in the community for pinging and getting information about BeamMP servers.<br/><br/>On the discord, we also welcome any general enthusiasts of car related video games as we all tend to think alike and get along pretty well.</p>
        </div>
        <iframe class="hidden md:block" src="https://discord.com/widget?id=789657841895735337&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
      <div class="flex items-start justify-center space-x-5">
        <iframe class="block w-full mb-20 max-w-md md:hidden" src="https://discord.com/widget?id=789657841895735337&theme=dark" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </div>
</section>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.header-image {
  background-image: url('~@/assets/header.jpg');
}
</style>
