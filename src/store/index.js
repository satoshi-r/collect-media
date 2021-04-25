import { createStore } from 'vuex'
import post from './modules/post'
import sources from './modules/sources'

export default createStore({
  modules: {
    post, sources
  }
})
