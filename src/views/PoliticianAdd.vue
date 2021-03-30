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

      <v-stepper-step :complete="e1 > 3" step="3"> Adding Promises <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4"> Adding Deeds <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="5"> Adding Praises <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="6"> Adding Criticisms <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="7"> save </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <!-- content for credentials -->
      <!-- <v-container> -->
      <v-stepper-content step="1">
        <credentials v-bind:politicians="politician"> </credentials>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <!-- </v-container> -->
      <!-- content for citation -->
      <v-stepper-content step="2">
        <citations v-bind:politicians="politician"></citations>

        
        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text @click="e1 =1">
          return
        </v-btn>
      
      </v-stepper-content>
      <!-- content for adding promises -->
      <v-stepper-content step="3">
        <promises v-bind:politicians="politician"></promises>

        <v-btn color="primary" @click="e1 = 4">
          Continue
        </v-btn>

        <v-btn @click="e1 =1" text>
          return
        </v-btn>
      </v-stepper-content>
      <!-- content for adding deeds -->
      <v-stepper-content step="4">
        <deeds v-bind:politicians="politician"></deeds>

        <v-btn color="primary" @click="e1 = 1">
          Continue
        </v-btn>

        <v-btn @click="e1 =1" text>
          return
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-container>
</template>

<script>
import credentials from '../components/politician/adding/credentials.vue'
import citations from '../components/politician/adding/citations.vue'
import deeds from "../components/politician/adding/deeds.vue"
import promises from "../components/politician/adding/promises.vue"
export default {
  name: 'PoliticianAdd',
  components: {
    credentials,
    citations,
    deeds,
    promises
  },
  data () { return {
    e1:1,
    politician:{credentials:{name:'' ,status:{status:'',position:'',citation:[{url:""}]},pastStatus:{pastStatus:'',pastPosition:'', citation:[{url:""}]},famousWords:{famousWords:"",citation:[{url:""}]}, schools:[{description:"",level:"",citation:[{url:""}]}], 
                  certificates:[{description:"",place:"",citation:[{url:""}]}], plans:[], highlights:[{description:"", date:"",citation:[{url:""}]}], belief:{belief:"",citation:[{url:""}]}, 
                  affiliations:[{description:"", date:"",citation:[{url:""}]}],job:{job:"",citation:[{url:""}]}, relatives:[{person:"",position:"",citation:[{url:""}]}], },
                  image:'',
                  promises:[{window:1,policy:'',subpolicy:'',opinion:'',why:'',how:'', citation:[{url:""}]}],
                  priorities:{priorities:'',citation:[{url:""}]},
                  reasons:{reasons:'',citation:[{url:""}]},
                  deeds:{},
                  praises:{},
                  criticisms:{}}
  }
  },
  methods :{
    
  }
}
</script>
