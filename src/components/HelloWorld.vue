<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        
         <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
    >
    <v-card elevation="2"> Expected Price {{ price.price.toFixed(0) }} </v-card>
    </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",

  data: () => ({}),

  computed: mapState(["price"]),
};
</script>
