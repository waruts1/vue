<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-select
            v-model="priceForm.source"
            :items="source"
            hide-selected
            :rules="[(v) => !!v || 'Source is required']"
            label="Source"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            v-model="priceForm.destination"
            :items="destination"
            :rules="[(v) => !!v || 'Destination is required']"
            label="Destination"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            v-model="priceForm.stops"
            :items="stopage"
            :rules="[(v) => !!v || 'Stops is required']"
            label="Stops"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            v-model="priceForm.airline"
            :items="airline"
            :rules="[(v) => !!v || 'Airline is required']"
            label="Airline"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" sm="3">
          <v-date-picker v-model="dates" range required></v-date-picker>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="dateRangeText"
            label="Date range"
            prepend-icon="mdi-calendar"
            readonly
          ></v-text-field>
          model: {{ dates }}
        </v-col>

        <v-col cols="12" sm="3">
          <h2>Start:</h2>
          <v-time-picker
            v-model="start"
            :max="end"
            format="24hr"
            required
          ></v-time-picker>
        </v-col>
        <v-col cols="12" sm="3">
          <h2>End:</h2>
          <v-time-picker
            v-model="end"
            :min="start"
            format="24hr"
            required
          ></v-time-picker>
        </v-col>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="save"
          block
        >
          Validate
        </v-btn>
      </v-row>
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="300px" dark origin="center center">
          <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="py-3">Expected Price {{ (price.price).toFixed(0) }}</div>
        </v-sheet>
      </v-bottom-sheet>
    </v-container>
  </v-form>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    sheet: false,
    valid: false,
    source: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
    destination: ["Cochin", "Delhi", "New_Delhi", "Hyderabad", "Kolkata"],
    start: null,
    end: null,
    airline: [
      "Jet Airways",
      "IndiGo",
      "Air India",
      "Multiple carriers",
      "SpiceJet",
      "Vistara",
      "GoAir",
      "Multiple_carriers Premium_economy",
      "Jet Airways Business",
      "Vistara Premium economy",
      "Trujet",
    ],
    stopage: [0, 1, 2, 3, 4, 5, 6, 7],
    priceForm: {
      Dep_Time: "",
      Arrival_Time: "",
      stops: "",
      airline: "",
      source: "",
      destination: "",
    },
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
    ...mapState(["price"]),
  },
  methods: {
    ...mapActions(["addPrediction"]),
    save() {
      this.priceForm.Dep_Time = this.dates[0] + "T" + this.start + "Z";
      this.priceForm.Arrival_Time = this.dates[1] + "T" + this.end + "Z";
      this.addPrediction(this.priceForm);
      this.sheet = true;
    },
  },
};
</script>
