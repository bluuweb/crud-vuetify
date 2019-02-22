<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn frat slot="activator" color="success">Agregar Tarea</v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Nueva Tarea</span>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form" @submit.prevent="submit">
          <v-text-field v-model="title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea v-model="content" label="Information" prepend-icon="edit" :rules="inputRules"></v-textarea>

          <v-menu>
            <v-text-field :rules="inputRules" :value="formatoFecha" slot="activator" label="Ingresa Fecha" prepend-icon="date_range"></v-text-field>
            <v-date-picker v-model="due" locale="es-cl"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn color="success" type="submit" :loading="loading">Agregar Proyecto</v-btn>
        </v-form>
      </v-card-text>
      
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      dialog: false,
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Mínimo 3 carácteres'
      ],
      loading: false
    }
  },
  methods:{
    submit(){
      if(this.$refs.form.validate()){

        this.loading = true

        const proyecto = {
          title: this.title,
          content: this.content,
          due: moment(this.due).format('LL'),
          person: 'Ignacio Gutiérrez',
          estado: 'Sin empezar',
          color: 'error'
        }

        setTimeout(() => {
          console.log(proyecto)
          this.loading = false
          this.dialog = false

        }, 2000);
      }
    }
  },
  computed:{
    formatoFecha(){
      moment.locale('es');
      return this.due ? moment(this.due).format('LL') : ''
    }
  }
}
</script>

