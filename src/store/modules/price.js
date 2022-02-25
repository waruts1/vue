 import axios from 'axios';

 const base_url = 'http://192.168.88.163:105/predict'

const state = {
     price:[]

};

const getters = {
// allPrices:(state) => state.prices
}

const actions = {
async addPrediction ({commit},price){
    const response = await axios.post(base_url , price);
    commit('setPrice', response.data)
}
}

const mutations = {
    setPrice:(state, new_price) => (state.price = new_price)

}

export default {
    state, getters , actions , mutations
}