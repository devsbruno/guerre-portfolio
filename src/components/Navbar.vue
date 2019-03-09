<template>
  <v-card >
    <v-toolbar  color="orange lighten-3" height='127' clipped-right >

      <!-- side drawer btn -->
      <v-toolbar-side-icon class="hidden-lg-and-up"   @click="drawer=!drawer" scroll-toolbar-off-screen >
      </v-toolbar-side-icon> 

      <!-- logo -->
      <v-img contain @click="goHome" src="/logo.png" alt="logo"  style="cursor:pointer" height='100%' class=" ml-3 "> </v-img> 
      
      <v-spacer></v-spacer>
       
     <v-btn color='cyan' large  round flat router to='/bruno' >	Blog </v-btn>

      <!-- drop menu -->
      <v-menu offset-y>
        <v-btn slot="activator" round ripple outline color="black">
          <v-icon left>expand_more</v-icon>
          <span class="green--text">Blog</span>
        </v-btn>
          <v-list>
            <v-list-tile v-for="blink in blinks" :key="blink.text" router :to="blink.route">
              <v-list-tile-title>{{blink.text}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>


      <!-- toolbar-links -->
      <span v-for="link in links" :key="link.text" class="hidden-md-and-down" > 
        <v-btn round  color='purple lighten-5  purple--text' router :to='link.route'>
          <v-icon left >{{link.icon}}</v-icon>
          <span>{{link.text}}</span>
        </v-btn>
      </span>
    </v-toolbar>

    <!-- the side-nav links -->
    <v-navigation-drawer app v-model="drawer" temporary  class="yellow lighten-4">
      <v-list >
        <v-layout column  align-center>
          <v-flex class="mt-5">
            <v-avatar size="173">
              <img src="/az4.png" alt="logo"  @click="goHome"  style="cursor:pointer">           
            </v-avatar>
          </v-flex>
          <span class="title">Bruno Devs Services</span>
        </v-layout>

        <v-list-tile v-for='link in links' :key="link.text" router :to= "link.route" @click="drawer=false" class="mt-4">
          <v-list-tile-action>
            <v-icon class="  purple--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="red--text text--darken-4 font-weight-bold">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>   
    </v-navigation-drawer>

  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer : false,


      links:[
      {  icon:'business', text : "Profile", route:"/about" },
      {  icon:'mail', text : "Contact", route:"/contact" },
      {  icon:'folder', text : "Skills", route:"/skills" },
      {  icon:'person', text : "Portfolio", route:"/portfolio" },
     ],


      blinks:[
        {  icon:'cake', text : "Home", route:"/bruno" },
       {  icon:'cake', text : "Blog Lists", route:"/blogs" },
       {  icon:'cake', text : "post", route:"/blogs/post" },   
       {  icon:'person', text : "New-Post", route:"/new" },
       {  icon:'person', text : "Sign-In", route:"/signin" },
       {  icon:'person', text : "Sign-Up", route:"/signup" }
      ]

    }    
  },
  methods :{
    goHome() {
      return this.$router.push('/')
    }
  }
	
}
</script>
