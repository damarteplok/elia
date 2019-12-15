import Vuex from 'vuex';
import DarkMode from "@/store/darkmode";
var date = new Date();
var bolDark = (date.getHours() > 22 || date.getHours() < 6);
export const state = () => ({
    dark: null,
})

export const getters = {
    dark(state) {
        return state.dark
    }
}

export const mutations = {
    SET_AUTO(state, dark) {
        state.dark = dark
    },
    SET_DARK(state, dark) {
        state.dark = dark
    }
}

export const actions = {
    nuxtServerInit({ commit }) {        
        commit("SET_AUTO", bolDark)
    },
    setAUTO({ commit }, dark) {
        commit("SET_AUTO", dark)
    },
    setDark({ commit }, dark) {
        commit('SET_DARK', dark)
    }
}


// export const createStore = () => {
//     return new Vuex.Store({
//         state: {},
//         mutations: {},
//         modules: {
//             DarkMode
//         }
//     })
// }