import Vuex from 'vuex';
import Vue from 'vue';
import price from './modules/price'

 //Load Vuex
 Vue.use(Vuex);

 //Create store
 export default new Vuex.Store({
     modules :{
        price
     }
 })