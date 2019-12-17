import Vuex from 'vuex';
import DarkMode from "@/store/darkmode";
var date = new Date();
var bolDark = (date.getHours() > 17 || date.getHours() < 6);
export const state = () => ({
    dark: null,
    mini: true,
    customTabs: [],
})

export const getters = {
    dark(state) {
        return state.dark
    },
    mini(state) {
        return state.mini
    },
    customTabs(state) {
      return state.customTabs
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
    },
    SET_CUSTOM_TABS(state, customTabs) {
      state.customTabs.push(customTabs)
      // state.customTabs = customTabs
    },
    DEL_CUSTOM_TABS(state, customTabs) {
      state.customTabs.splice(customTabs, 1)
      // state.customTabs = customTabs
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
    },
    setCustomTabs({ commit }, customTabs) {
      commit('SET_CUSTOM_TABS', customTabs)
    },
    delCustomTabs({ commit }, customTabs) {
      commit('DEL_CUSTOM_TABS', customTabs)
    }
}

