//create a store
export const state = () => ({
    posts: {},
    blogs: {},
});

//getters
export const getters = {
    posts(state) {
        return state.posts
    }
}

//mutations
export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}

//actions
export const actions = {
    setPosts({commit}, posts) {
        commit("SET_POSTS", posts)
    }
}