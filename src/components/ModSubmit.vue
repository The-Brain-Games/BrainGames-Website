<template>
  <div class="container mx-auto m-auto" style="max-width: 800px; margin-top: 150px;">
    <h2 class="text-white text-3xl mb-1 font-medium title-font">Mod Suggestion Form</h2>
    <p class="leading-relaxed mb-5 text-white">Would you like to see a mod you choose added on the BeamMP BrainNG Modded Servers? Suggest one below and your admins will approve them to be added!
      <br>
      <br>
      The sky's the limit, we love mods and we know you do as well.</p>
    <div class="relative mb-4">
      <label for="name" class="leading-7 text-sm text-gray-400">Discord Username</label>
      <input type="text" id="name" name="name" placeholder="BrainGames#0000" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    </div>
    <div class="relative mb-4">
      <label for="add" class="leading-7 text-sm text-gray-400">Mod Suggestion</label>
      <br>
      <input type="text" id="add" name="add" v-model="name" placeholder="Name" class="w-3/12 bg-gray-800 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> <input type="text" id="add" v-model="url" placeholder="URL" name="add" class="w-7/12 bg-gray-800 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> <button class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg" v-on:click="add">+ Add</button>
    </div>
    <div class="relative mb-4">
      <div id="error">Please do not suggest the same mod twice!</div>
      <div id="error1">Please don't leave fields empty!</div>
      <label class="leading-7 text-sm text-gray-400">Your Suggestions:</label>
      <ol class="list-disc text-white" style="padding-left: 20px;">
        <li v-for="item in suggestions" :key="item">
          {{ item }}
        </li>
      </ol>
    </div>
    <button class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Submit</button>
  </div>
</template>

<script>
// TODO: Add reCAPTCHA with https://github.com/AurityLab/vue-recaptcha-v3/tree/vue-v2.x
export default {
    data(){
      return {
        suggestions: ["None"],
        name: "",
        url: ""
      };
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
      }
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
</style>