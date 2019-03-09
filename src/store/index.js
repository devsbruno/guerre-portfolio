import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {
			lddposts: [
				{url:'https://www.sde.co.ke/sdemedia/sdeimages/tuesday/qpmjinkhojgfsrgf57b293a45b8d3.jpg', 
				title:'Githurai',   id:1,
				date:'2019-07-05'
			
			},

				{url:'https://pbs.twimg.com/profile_images/666334060441042944/XLwf7rHm_400x400.jpg', 
				title:'twitter-kibura', id:2,
			  date:'2019-05-07'
			
			},

			{url:'https://avatars0.githubusercontent.com/u/46294538?s=460&v=4', title: 'Github' , id: 3,
			date:'2019-07-23'
			}
			 ],

			 user: {
				 id: 'wqdknwejnjdc',
				//  set the post likes
				 regsteredlikes:[ 'wdjsed234454n']
			 }		
		
	 },
	mutations: {},
	actions: {}, 
  getters: {
    lddposts (state) {
      return state.lddposts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    featuredposts (state, getters) {
      return getters.lddposts.slice(0, 5)
		},
		fposts:state=>{
			var fposts = state.posts.id.Slice (0, 5)(lddpost =>{
				return{
					url: lddpost.url,
					title: lddpost.title,
					id : lddpost.id,
					date : lddpost.date
				}
			}) 
			return fposts
		},
		
		
    lddpost (state) {
      return (postId) => {
        return state.lddposts.find((post) => {
          return post.id === postId
        })
      }
    }
  }
})