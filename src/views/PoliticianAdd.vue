<template>
<v-container>  
  <v-stepper v-model="e1" non-linear>
    <v-stepper-header>
      <v-stepper-step :complete="e1>1" step="1">
        Credentials
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Citations <small>Credentials</small> </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        Adding promises  <small>optional</small>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4"> Citations <small>Promises</small> </v-stepper-step>
      <v-divider></v-divider>
      
      <v-stepper-step :complete="e1 > 5" step="5"> Adding Deeds <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 6" step="6"> Adding Praises <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 7" step="7"> Adding Criticisms <small>optional</small></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="8"> save </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <!-- content for credentials -->
      <!-- <v-container> -->
      <v-stepper-content step="1">
        <credentials v-bind:politicians="politician"> </credentials>

        <v-btn v-if="checkEmpty()" color="primary" @click="e1 = 2;addDp()">
          Continue
        </v-btn>
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
      <!-- content for adding citations for promises -->
      <v-stepper-content step="4">
        <citations2 v-bind:politicians="politician"></citations2>
        <v-btn color="primary" @click="e1 = 5 ; ">
          Continue
        </v-btn>

        <v-btn @click="e1 =1" text>
          return
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <deeds ref="deeds" v-bind:politicians="politician"></deeds>


        <v-btn color="primary" @click="e1 = 6 ;saveDeeds()">
          Continue
        </v-btn>

        <v-btn @click="e1 =1" text>
          return
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="6">
      <praises ref="praises" v-bind:politicians="politician"></praises>
      <v-btn color="primary" @click="e1 = 7 ; savePraises() ">
          Continue
        </v-btn>

        <v-btn @click="e1 =1" text>
          return
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="7">
      <criticisms ref="criticisms" v-bind:politicians="politician"></criticisms>
      <v-btn color="primary" @click="e1 = 8 ; saveCriticisms() ">
          Continue
        </v-btn>

        <v-btn @click="e1 =1" text>
          return
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="8">
      <v-row>
        <v-col><h1>You are about to submit an entry to Polipick!</h1></v-col>
      </v-row>
      <v-row>
      <v-col>
        <p class="body-1">
          The future of the country is indebt to you for your time and effort for this entry. 
        </p >
      </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="body-2">
          By clicking the submit button you solemnly agree that all the information inserted here is 
          factual and is non-partisan in all manner.
          </p>
          </v-col> 
      </v-row>
      <v-btn color="primary" @click="e1 = 8 ; saveToBackend() ">
          Submit
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
import praises from "../components/politician/adding/praises.vue"
import criticisms from "../components/politician/adding/criticisms.vue"
import citations2 from '../components/politician/adding/citations2.vue'
import politicianService from "../service/politicianService"

export default {
  name: 'PoliticianAdd',
  components: {
    credentials,
    citations,
    citations2,
    deeds,
    promises,
    criticisms,
    praises,
  },
  data () { return {
    e1:1,
    politician:{credentials:{name:'' ,status:{status:'',position:'',citation:[{url:""}]},pastStatus:{pastStatus:'',pastPosition:'', citation:[{url:""}]},famousWords:{famousWords:"",citation:[{url:""}]}, schools:[{description:"",level:"",citation:[{url:""}]}], 
                  certificates:[{description:"",place:"",citation:[{url:""}]}], plans:[], highlights:[{description:"", date:"",citation:[{url:""}]}], belief:{belief:"",citation:[{url:""}]}, 
                  affiliations:[{description:"", date:"",citation:[{url:""}]}],job:{job:"",citation:[{url:""}]}, relatives:[{person:"",position:"",citation:[{url:""}]}], },
                  image:{src:undefined,fileType:''},
                  promises:[{window:1,policy:'',subpolicy:'',opinion:'',why:'',how:'', citation:[{url:""}]}],
                  priorities:{priorities:'',citation:[{url:""}]},
                  reasons:{reasons:'',citation:[{url:""}]},
                  deeds:{},
                  cloudinary_id:'',
                  avatar:'',
                  praises:{},
                  criticisms:{}},
                  tempArray:[]
  }
  },
  methods :{
    async pictureToBackend(){
      console.log(this.politician.image.src)
     
      if(this.politician.image.fileType=='Mano')
      {
      this.tempArray = await politicianService.uploadDp(this.politician.image.src);
      this.politician.avatar= this.tempArray.secure_url
        this.politician.cloudinary_id= this.tempArray.public_id
      }
      else
      {
        this.politician.avatar=this.politician.image.src;
        this.politician.cloudinary_id=null
      }
    },
    saveDeeds() {
      if(this.$refs.deeds.tempArray)
        {
          this.politician.deeds =this.$refs.deeds.tempArray;
        }
      console.log(this.politician.deeds)
    },
    savePraises() {
      if(this.$refs.praises.tempArray)
      {
        this.politician.praises =this.$refs.praises.tempArray;
      }
      console.log(this.politician.praises)
    },
    saveCriticisms() {
      if(this.$refs.criticisms.tempArray)
        {
        this.politician.criticisms =this.$refs.criticisms.tempArray;
        }
      console.log(this.politician.criticisms)
      },
      checkEmpty() {
        if(this.politician.credentials.name && this.politician.credentials.status.status && this.politician.credentials.status.position &&
        this.politician.credentials.pastStatus.pastStatus && this.politician.credentials.pastStatus.pastPosition && this.politician.credentials.famousWords.famousWords
        && this.politician.credentials.schools[0].description && this.politician.credentials.certificates[0].description && this.politician.credentials.highlights[0].description
        && this.politician.credentials.belief.belief && this.politician.credentials.affiliations[0].description && this.politician.credentials.job.job && this.politician.credentials.relatives[0].person)
        {
          return true
        } else
        {
          return false
        } 
          //        affiliations:[{description:"", date:"",citation:[{url:""}]}],job:{job:"",citation:[{url:""}]}, relatives:[{person:"",position:"",citation:[{url:""}]}], },
      },
    async addDp(){
      if(this.politician.image.fileType=="Mano")
       {
         let result = await politicianService.uploadDp(this.politician.image.src)
        this.politician.avatar=result.secure_url;
        this.politician.cloudinary_id=result.public_id;
       } else
       {
         this.politician.avatar=this.politician.image.src
       }
    },
    async saveToBackend(){
      let politicianData=await politicianService.savePolitician(this.politician);
      
      this.$router.push(politicianData._id)
    },
  }
}
</script>
