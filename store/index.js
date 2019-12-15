import Vuex from 'vuex';
import DarkMode from "@/store/darkmode";
var date = new Date();
var bolDark = (date.getHours() > 17 || date.getHours() < 6);
export const state = () => ({
    dark: null,
    mini: true,
})

export const getters = {
    dark(state) {
        return state.dark
    },
    mini(state) {
        return state.mini
    }
}

export const mutations = {
    SET_AUTO(state, dark) {
        state.dark = dark
    },
    SET_DARK(state, dark) {
        state.dark = dark
    },
    SET_MINI(state, mini) {
        state.mini = mini
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
    },
    setMini({ commit }, mini) {
        commit('SET_MINI', mini)
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