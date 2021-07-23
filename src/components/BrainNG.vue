<!-- 
  Copyright (c) 2021, Brain Games
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree. 
-->

<template>
<div>
  <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-3 text-white">BrainNG Servers</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-pink-600 mb-4">We are proud to host two great BeamMP servers, one of which including one of the largest modpacks on the platform!</p>
      <h2 class="title-font font-medium text-3xl text-white" v-if="vanillaServer.version">{{vanillaServer.version}}</h2><h2 class="title-font font-medium text-3xl text-white" v-else-if="moddedServer.cversion">{{moddedServer.cversion}}</h2><h2 class="title-font font-medium text-3xl text-white" v-else>N/A</h2>
      <p class="leading-relaxed">BeamMP Version</p>
    </div>
  </div>
</section>


<section class="text-gray-400 bg-gray-900 body-font">
  <img class="object-cover h-96 w-full" :src="vanillaImg">
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-white">Vanilla Server</h1>
        <div class="leading-relaxed text-pink-600">Looking for something quick and fun to play with your friends? If so, this is the server for you!</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white" v-if="vanillaServer.players">{{vanillaServer.players}}</h2>
        <h2 class="title-font font-medium text-3xl text-white" v-else>N/A</h2>
        <p class="leading-relaxed">Players on Now</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white" v-if="vanillaServer.maxplayers">{{vanillaServer.maxplayers}}</h2>
        <h2 class="title-font font-medium text-3xl text-white" v-else>N/A</h2>
        <p class="leading-relaxed">Max Players</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <div class="leading-relaxed text-pink-600">Players Online Now</div>
      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider" v-for="player in vanillaPlayers" :key="player">{{player}}</h2>
      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider" v-if="vanillaPlayers.length == 0">None</h2>
    </div>
  </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <img class="object-cover h-96 w-full" :src="moddedImg">
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-white">Modded Server</h1>
        <div class="leading-relaxed text-pink-600">Getting bored of the default vehicles? This server is one of the most modded on BeamMP with over 110+ mods to choose from!</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white" v-if="moddedServer.players">{{moddedServer.players}}</h2>
        <h2 class="title-font font-medium text-3xl text-white" v-else>N/A</h2>
        <p class="leading-relaxed">Players on Now</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white" v-if="moddedServer.maxplayers">{{moddedServer.maxplayers}}</h2>
        <h2 class="title-font font-medium text-3xl text-white" v-else>N/A</h2>
        <p class="leading-relaxed">Max Players</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white" v-if="moddedServer.modstotal">{{moddedServer.modstotal}}</h2>
        <h2 class="title-font font-medium text-3xl text-white" v-else>N/A</h2>
        <p class="leading-relaxed">Mods</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <div class="leading-relaxed text-pink-600">Players Online Now</div>
      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider" v-for="player in moddedPlayers" :key="player">{{player}}</h2>
      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider" v-if="moddedPlayers.length == 0">None</h2>
    </div>
  </div>

  <div class="container mx-auto m-auto" style="max-width: 800px; margin-top: 25px; padding: 15px;">
    <h2 class="text-white text-3xl mb-1 font-medium title-font">Mod Suggestion Form</h2>
    <p class="leading-relaxed mb-5 text-white">Would you like to see a mod you choose added onto the BrainNG modded server? Suggest one below and your admins will approve them to be added!
      <br>
      <br>
      The sky's the limit, we love mods and we know you do as well!</p>
    <div class="relative mb-4">
      <label for="name" class="leading-7 text-sm text-gray-400">Discord Username</label>
      <input type="text" id="name" v-model="dUsername" name="name" placeholder="BrainGames#0000" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    </div>
    <div class="relative mb-4">
      <label for="add" class="leading-7 text-sm text-gray-400">Mod Suggestion</label>
      <br>
      <input type="text" id="add" name="add" v-model="name" placeholder="Name" class="w-3/12 bg-gray-800 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> <input type="text" id="add" v-model="url" placeholder="URL" name="add" class="w-7/12 bg-gray-800 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> <button class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg" v-on:click="add">+ Add</button>
    </div>
    <div class="relative mb-4">
      <div id="error">Please do not suggest the same mod twice!</div>
      <div id="error1">Please don't leave fields empty!</div>
      <div id="success">Success!</div>
      <label class="leading-7 text-sm text-gray-400">Your Suggestions:</label>
      <ol class="list-disc text-white" style="padding-left: 20px;">
        <li v-for="item in suggestions" :key="item">
          {{ item }}
        </li>
      </ol>
    </div>
    <button class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg mb-48" v-on:click="sendRequest">Submit</button>
  </div>
</section>
</div>
</template>

<script>
 export default {
   data() {
    return {
     results: [],
     vanillaServer: {},
     moddedServer: {},
     vanillaPlayers: [],
     moddedPlayers: [],
     dUsername: "",
     suggestions: ["None"],
     name: "",
     url: "",
     vanillaImg: require('@/assets/BrainNG/D15.png'),
     moddedImg: require('@/assets/BrainNG/crawling.png')
    }
   }, methods: {
      add() {
        if (this.suggestions.length == 1 && this.suggestions[0] == "None") {
          this.suggestions.pop();
        }
        document.getElementById("error").style.display = "none";
        document.getElementById("error1").style.display = "none";
        if (this.name == "" || this.url == "") {
          document.getElementById("error1").style.display = "block";
        } else if (this.suggestions[this.suggestions.length - 1] != this.name + " - " + this.url){
          this.suggestions.push(this.name + " - " + this.url);
        } else {
          document.getElementById("error").style.display = "block";
        }
      },
      getServerDetails() {
        let uri = 'https://api.realbraingames.com:24568/beammp';
        this.axios.get(uri).then(res => {
        this.results = res.data;
        if (this.results.length == 2) {
          if (this.results[0].modstotal > 1) {
            this.moddedServer = this.results[0];
            this.vanillaServer = this.results[1];
          } else {
            this.moddedServer = this.results[1];
            this.vanillaServer = this.results[0];
          }
          this.vanillaPlayers = this.vanillaServer.playerslist.split(";");
          this.moddedPlayers = this.moddedServer.playerslist.split(";");
        } else if (this.results.length == 1) {
          if (this.results[0].modstotal > 1) {
            this.moddedServer = this.results[0];
            this.moddedPlayers = this.moddedServer.playerslist.split(";");
          } else {
            this.vanillaServer = this.results[0];
            this.vanillaPlayers = this.vanillaServer.playerslist.split(";");
          }
        }
      });
      }, sendRequest() {
        let send = {};
        send.suggestions = this.suggestions;
        send.dUsername = this.dUsername;
        let uri = 'https://api.realbraingames.com:24568/mail'
        this.axios.post(uri, send).then(res => {
          document.getElementById("success").style.display = "block";
          this.dUsername = "";
          this.suggestions = ["None"];
          this.name = "";
          this.url = "";
          console.log(res);
        });
      }
    }, 
      created() {
        this.getServerDetails();
  }
 }
</script>

<style scoped>
#error{
  display: none;
  color: red;
}
#error1{
  display: none;
  color: red;
}
#success{
  display: none;
  color: green;
}
</style>