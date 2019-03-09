<template>
<div>
	<v-container>
		<v-layout row wrap>
     <V-flex xs12 sm10  md10 lg10 >
			 <v-card>
				 <v-card-title>
					 <h2 class='primary--text pa-3'>{{ lddpost.title }}fdfddfd</h2>
				 </v-card-title>
				  <v-img :src= 'lddpost.url' height= '170px' class="ma-0 pa-0">
					</v-img>
					<v-card-text>
						<h1 class="pa-2 display-1">{ldd{post.date}}ggg</h1>
						<div class="pb-2">
						<div class="pa-2 right title cyan lighten-3 purple--text">{{post.date}} date </div>
						</div>
						<p class=" title pa-4 mt-5 " style="line-spacing:2em"> 
							Fire and blood. I would like a trial by combat. The winds of Winter. The rains of castamere. A forked purple lightning bolt, on black field speckled with four-pointed stars. Winter is coming. Our Sun Shines Bright. The tourney of Ashford Meadows. A dream of Spring. A dream of Spring. Pay the iron price. The bear and the maiden fair. The rains of castamere. Can a man still be brave if he’s afraid? That is the only time a man can be brave.The battle of the redgrass field. Winter is coming. Winter is coming.A Lannister always pays his debts. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. Never Resting. The wolf and the lion. The North remembers. A good act does not wash out the bad, nor a bad act the good. Each should have its own . The Dothraki do things in their own time, for their own reasons. You know nothing, Jon Snow. Forgive my manners. I don't see many ladies these days. Lucky for the ladies. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. The rains of castamere. The night is dark and full of terrors. The Knight of Lemonwood. Pay the iron price. As High as Honor. The rains of castamere. The winds of Winter. Bastards are born of passion, aren't they? We don't despise them in Dorne. And now his watch is ended.
						</p>
					</v-card-text>
			  <v-card-actions class="ma3">
					<v-spacer></v-spacer>
					<v-btn class="primary">Register</v-btn>				  				
				</v-card-actions>
			 </v-card>
		 </V-flex>
		</v-layout>
	</v-container>
</div>
</template>

<script>
export default {
	// data() {
  //   return{
	// 		id: this.$route.params.id
	// 	}
	// },
	props: ['id'],
	computed:{
		lddpost() {
				return this.$store.getters.lddpost(this.$route.params.id)
				console.log(post);
				
		}
	}
}
</script>



