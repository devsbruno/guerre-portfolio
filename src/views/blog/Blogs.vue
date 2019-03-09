<template>
	<v-container>
		<v-layout row wrap  v-for="post in posts" :key="post.id" class="mb-3">
			<v-flex xs12 sm10 md10  offset-sm1 offset-md1 >
				<v-card class="info lighten-4">
					<v-container fluid>						
						<v-layout row>
							<v-flex xs5 sm4 md3>
								<v-img contain :src= 'post.url' height= '130px' class="ma-0 pa-0">
								</v-img>
							</v-flex>
							<v-flex xs7 sm8 md9>
								  <v-card-title primary-title>
										<div>
										<h2>{{post.title}}</h2>
										<div>{{post.date}}</div>
										</div>
									</v-card-title>
									<v-card-actions>
									 <v-btn class="primary" :to="'/blogs/post/' + post.id">
										 <v-icon left light >arrow_forward </v-icon> View Post </v-btn>
									</v-card-actions>
								</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	computed: {
		posts() {
			return this.$store.getters.lddposts
		}
	}
	
}
</script>



