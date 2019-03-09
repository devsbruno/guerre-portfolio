<template>
	<v-container>
		<p>Landing page</p>
		<!-- call to action button -->
	<v-layout row wrap justify-end  >
		<v-flex xs12 sm6 class="text-xs-center text-sm-right pa-3"  >
			<v-btn large  router to='/blogs' class="primary" >
				All Blogs Post
			</v-btn>
		</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left pa-3" >
			<v-btn large  router to='/new' class="primary" >
				New Post
			</v-btn>
		</v-flex>
	</v-layout>



	<!-- carousel -->
		<!-- a picture accompaning some text like 120 characters from the blog -->
	<!-- this comes from the data method called preview  -->
		<!-- use slice method from befire -->
	<v-layout>
		<v-flex xs12>
			<v-carousel style="cursor:pointer">
				<v-carousel-item  v-for='preview in fposts' :src='preview.url' :key="preview.id" @click="onLoad(preview.id)">
           <div class="ti3le display-3 "> {{preview.title}}</div>
				</v-carousel-item>
			</v-carousel>

		</v-flex>
	</v-layout>

		<v-layout class=" mt-2">
		<v-flex xs12 text-xs-center>
    <p class="display-3"> Proceed to the Blog Posts</p>	
		</v-flex>
	</v-layout>

</v-container>
</template>


<script>
export default {
	data() {
		return{
			previews:{}
		}
	},
	methods: {
		onLoad :function(id) {
		 	this.$router.push('/blogs/post/' + id)
		}
	},
	computed:{
		fposts() {
			return this.$store.getters.featuredposts
		}
	}
}
</script>

<style scoped>
.ti3le {
	position: absolute;
	bottom: 50px;
	left : 0%;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	/* font-size: 47px; */
	padding: 5px;
	color:rgb(226, 43, 43);

}

</style>

