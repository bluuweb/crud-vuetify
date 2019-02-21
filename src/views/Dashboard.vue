<template>

  <v-card>
    <v-layout pa-3 wrap v-for="(item, index) in proyectos" :key="index">
      <v-flex xs12 md6>
        <div>Título del proyecto</div>
        <h3>{{item.titulo}}</h3>
      </v-flex>
      <v-flex xs6 md2>
        <div>Responsable</div>
        <h3>{{item.responsable}}</h3>
      </v-flex>
      <v-flex xs6 md2>
        <div>Entrega</div>
        <h3>{{item.fecha}}</h3>
      </v-flex>
      <v-flex xs12 md2 mt-2>
        <v-chip :color="item.color" text-color="white" small>{{item.estado}}</v-chip>
      </v-flex>
    </v-layout>
  </v-card>
  

</template>

<script>
  export default {
    data() {
      return {
        proyectos: [
          {titulo: 'Crear un nuevo sitio web', responsable: 'Ignacio Gutiérrez', fecha: '12 marzo 2019', estado: 'Sin empezar', color: 'error'},
          {titulo: 'Estudiar Angular 7', responsable: 'Juanito Perez', fecha: '12 marzo 2019', estado: 'En curso', color: 'warning'},
          {titulo: 'Crear curso de Vuetify', responsable: 'Alvaro Felipe', fecha: '12 marzo 2019', estado: 'Finalizado', color: 'success'},
          {titulo: 'Salir a Surfear', responsable: 'Santiago Bueras', fecha: '12 marzo 2019', estado: 'Sin empezar', color: 'error'},
        ]
      }
    },
  }
</script>
