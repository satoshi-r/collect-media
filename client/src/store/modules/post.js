import api from '@/api'

export default {
    state: {
        posts: [],
    },
    actions: {
        async fetchPosts(ctx) {
            const posts = await api.getPosts();
            ctx.commit('updatePosts', posts);
        },
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        }
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },

        // filteredPosts(state, sources) {
        //     return state.posts.filter(post => {

        //     })
        // }
    }
}