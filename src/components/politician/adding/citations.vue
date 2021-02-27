<template>
  <v-container>
      <v-row v-for="(school,i) in politician.credentials.schools" :key="school.index">
          <v-col v-if="i==0" sm="2">
              <v-input :messages="['May pinag aralan ba to?']" prepend-icon="mdi-school">Educational Background</v-input>
          </v-col>
          <v-col v-else sm="2">
          </v-col>
          <v-col sm="4" justify>
              <body-1>{{school.level}}</body-1> at <body-2>{{school.description}}</body-2>
          </v-col>
          <v-col sm="6">
              <v-text-field v-model="citations[i].url" class="mt-0 pt-0" label="Citation"></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-col >
          <p>{{citations}}</p>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'citations',
  components: {
  },
  props:['politicians'],
  data : () => ({
      citations:[],
      politician:{},
      rules: [
        value => !!value || 'Required.',
        // value => (value || '').length <= 20 || 'Max 20 characters',
        // value => {
        //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //   return pattern.test(value) || 'Invalid e-mail.'
        // }
      ],
  }),
  created() {
      this.politician=this.politicians
      for( var i=0; i<this.politician.credentials.schools.length; i++){
          this.citations.push({url: "",cited:"school"})
        }
  },
  computed :{
      
  }
}
</script>


