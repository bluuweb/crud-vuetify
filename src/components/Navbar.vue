<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span>bluu</span>
        <span class="font-weight-light">Tareas</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        <span>Cerrar Sesión</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer class="indigo" app v-model="drawer">
      <v-layout column align-center>
        <v-flex mt-5>
          <v-avatar size="100">
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="display-1 white--text mt-2">Vuetify</p>
        </v-flex>
        <v-flex>
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index" router :to="item.route">
          <v-list-tile-action>
            <v-icon  class="white--text">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title  class="white--text">{{item.titulo}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

import Popup from '@/components/Popup'

export default {
  data() {
    return {
      drawer: false,
      items:[
        {icon: 'brightness_auto', titulo:'Dashboard', route: {name:'dashboard'}},
        {icon: 'strikethrough_s', titulo:'Proyectos', route: {name:'proyectos'}},
        {icon: 'tag_faces', titulo:'Perfil', route: {name:'perfil'}},
      ]
    };
  },
  components:{Popup}
};
</script>

