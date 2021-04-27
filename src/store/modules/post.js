import api from '@/api'

export default {
    state: {
        posts: [],
        loading: true
    },
    actions: {
        async fetchPosts({commit}) {
            const posts = await api.getPosts();
            commit('updatePosts', posts);
        },

        setLoading({commit}, value) {
            commit('changeLoading', value);
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },

        changeLoading(state, value) {
            state.loading = value;
        }
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },

        isLoading(state) {
            return state.loading;
        }
    }
}