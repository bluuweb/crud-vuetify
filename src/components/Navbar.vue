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
  }
};
</script>

