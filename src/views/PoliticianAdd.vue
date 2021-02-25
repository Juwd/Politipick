<template>
<v-container>  
  <v-stepper v-model="e1" non-linear>
    <v-stepper-header>
      <v-stepper-step :complete="e1>1" step="1">
        Credentials
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Citations  <small>credentials</small>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Adding Deeds <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4"> Adding Praises <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="5"> Adding Criticisms <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="6"> save </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <!-- content for credentials -->
      <!-- <v-container> -->
      <v-stepper-content step="1">
        <credentials v-bind:politicians="politician"/>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <!-- </v-container> -->
      <!-- content for citation -->
      <v-stepper-content step="2">
        <citations v-bind:politicians="politician"/>

        
        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text @click="e1 =1">
          return
        </v-btn>
      
      </v-stepper-content>
      <!-- content for adding deeds -->
      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-container>
</template>

<script>
import credentials from '../components/politician/adding/credentials.vue'
import citations from '../components/politician/adding/citations.vue'
export default {
  name: 'PoliticianAdd',
  components: {
    credentials,
    citations
  },
  data () { return {
    e1:1,
    politician:{credentials:{name:'' ,status:'',position:'',pastStatus:'',pastPosition:'', schools:[{description:"",level:"",}], 
                  certificates:[{description:"",place:""}], plans:[], highlights:[{description:"", date:""}], belief:"", 
                  affiliations:[{description:"", date:""}],job:"", relatives:[{person:"",position:""}], },}
  }
  },
  methods :{
    
  }
}
</script>
