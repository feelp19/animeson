<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <v-app-bar :color="color === 'amber' ? color : 'error'" absolute>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
      <v-main :style="tam">

        <v-card-text v-show ="items.length >= 0" v-for="item in items" :key="item.id">
          {{ item.id }} - {{ item.name }} - {{ item.age }}
        </v-card-text>

        <v-btn @click.prevent="addElement()">Add item</v-btn>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    tam: [{ height: "auto" }],
    color: "amber",
    items: [{id: 1, name: 'Felipe', age: 28}],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    addElement() {
      let id = 0
      return this.items.push({ id: id+1, name: "Felipe", age: 28 });
    }
  },
}
</script>