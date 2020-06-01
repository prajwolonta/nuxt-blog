import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
 return new Vuex.Store({
   state: {
      loadedPosts: []
   },
   mutations:{
     setPosts(state, posts){
       state.loadedPosts = posts
     },
     addPost(state, post){
       state.loadedPosts.push(post)
     },
     editPost(state, editedPost){
       const postIndex = state.loadedPosts.findIndex( post => post.id === editedPost.id )
       state.loadedPosts[postIndex] = editedPost
     }
   },
   actions: {
     nuxtServerInit(vuexContext, context){
       return axios.get(process.env.baseUrl + '/posts.json')
         .then((res)=>{
           const postsArray = [];
           for(const key in res.data){
             postsArray.push({...res.data[key], id: key })
           }
           vuexContext.commit('setPosts', postsArray)
         })
         .catch(err => context.error(err))
     },
     addPost(vuexContext, post){
       const createdPost = {
         ...post,
         updateDate: new Date()
       }
       return axios.post(process.env.baseUrl + '/posts.json', createdPost)
         .then((res)=>{
           console.log(res)
           vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
         })
         .catch((err) => {console.log(err)})
     },
     editPost(vuexContext, editedPost){
       return axios.put(process.env.baseUrl + '/posts/' + editedPost.id +'.json', editedPost)
         .then(() => {
           console.log(editedPost);
           vuexContext.commit('editPost', editedPost)
         })
         .catch(err => {console.log(err)})
     }
   },
   getters: {
     loadedPosts(state){
       return state.loadedPosts
     }
   }
 })
}

export default createStore
