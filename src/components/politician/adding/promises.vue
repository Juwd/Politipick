<template>
  <div class="promises">
    <v-container>
      <v-row>
        <v-col lg="12">
          <h2>My Priorities</h2>
        </v-col>
        <v-col lg="12">
            <v-textarea  outlined required v-model="politician.priorities.priorities" placeholder="So anong priorities ko? Gusto ko bang iradicate ang corrupt or ang drugs?" :rules="rules" hide-details="auto"
            ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="12">
          <h2>Why I'm running?</h2>
        </v-col>
        <v-col lg="12">
            <v-textarea outlined v-model="politician.reasons.reasons" :rules="rules" placeholder="Bat nga ba gusto ko tumakbo? Para sa mahirap? para sa mayaman?"></v-textarea>
        </v-col>
       
      </v-row>
    </v-container>
    <v-container>
    <!-- <v-card elevation="2"> -->
    
       <v-divider></v-divider>
      <v-row>
        
        <h2>Promises</h2>
      </v-row>
      <v-row>
        <p class="subtitle-1">So what did they promise on fixing the country? What are their opinions? You can categorize them here</p>
      </v-row>
      
      <div v-for="(promise) in politician.promises" :key="promise.index">
        
        <v-row>
          <v-col sm="2">
              <v-input :messages="['Anung gagawin nito para sa bansa?']" prepend-icon="mdi-relation-one-to-one-or-many">Policies</v-input>
          </v-col>
          <!-- <v-col v-else sm="2"></v-col> -->
            <v-col sm="4">
              <v-select  v-model="promise.policy" :items="policies" @change="promise.subpolicy=''" item-text="title" label="Select a policy" outlined></v-select>
          </v-col>
              <v-col sm="2">
                <v-select v-model="promise.subpolicy" outlined :items="subpolicyList(promise.policy)" item-text="title" placeholder="Subpolicy" :rules="rules" hide-details="auto" > </v-select> 
            </v-col> 
        </v-row>
        <v-row>
          <p class="body-1"><span class="font-weight-bold">{{promise.policy}} </span> <br> {{policyDescription(promise.policy)}} </p>  
        </v-row>
        <v-row>
          <p class="body-1"><span class="font-weight-bold">{{promise.subpolicy}} </span> <br> {{subpolicyDescription(promise.policy,promise.subpolicy)}} </p>  
        </v-row>
        <div v-if="promise.policy && promise.subpolicy">
          <v-row>
            <h1> Opinions of {{politician.credentials.name}} </h1>
          </v-row>
          <v-row>
            <v-textarea outlined v-model="promise.opinion" :rules="rules" placeholder="e.g. immigration is a concern we all shall look at"></v-textarea>
          </v-row>
          <v-row>
            <h1> How {{politician.credentials.name}} support this policy </h1>
          </v-row>
          <v-row>
            <v-textarea outlined v-model="promise.how" :rules="rules" placeholder="I can support X policy by enacting etc."></v-textarea>
          </v-row>
          <v-row>
            <h1> Why {{politician.credentials.name}}  support this policy</h1>
          </v-row>
          <v-row>
            <v-textarea outlined v-model="promise.why" :rules="rules" placeholder="I support X policy because"></v-textarea>
          </v-row>
        </div>
        <!-- </v-pagination> -->
        <p>{{promise.opinion}}</p>
        
          <v-btn v-if="promise.how && promise.why && promise.opinion" @click="addPromises()">Add promises</v-btn>
        
        <v-divider></v-divider>
        
      </div>
    <!-- </v-card>  -->
    </v-container>
      <!-- <p>{{politician.promises}}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Promises',
  props:['politicians'],
  data() { return{
    rules: [
        value => !!value || 'Required.',
        // value => (value || '').length <= 20 || 'Max 20 characters',
        // value => {
        //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //   return pattern.test(value) || 'Invalid e-mail.'
        // }
      ],
      showIcon1:false,
    policies: [{ name:"borders",title:"Borders and Migration", model:false,description:"The Covid-19 pandemic has seen global travel grind to a halt. How the country manages its borders is now a major election issue, especially as pressure mounts around reopening the border.",
                subtopics:[{title:"Immigration", description:"Immigration has been restricted by the current government but some parties say that PH shoud limit immigration further. Others say skills and labour from overseas is exactly what the country needs to help the economy recover from Covid-19"},{title:"Borders and quarantine", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Refugees", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},]},
        
        { name:"community",title:"Community and Inclusion", description:"lorem ipsum dolor doler",model:false,
        subtopics:[{title:"Indigenous people", description:"description of indigenous people"},{ title:"Free expression and hate speech", description:"random shizz"},{ title:"Rainbow Community", description:"rainbow"},{ title:"Disability", description:"rainbow"},{ title:"Seniors", description:"Seniors"},{ title:"Animal welfare", description:"rainbow"}, { title:"Young people", description:"rainbow"},{ title:"Women", description:"rainbow"}],},
        
        { name:"defence",title:"Defence and Foreign affairs", description:"eeyyyy defence", model:false,
        subtopics:[{title:"Aid, development and institution", description:"Immigration has been restricted by the current government but some parties say that PH shoud limit immigration further. Others say skills and labour from overseas is exactly what the country needs to help the economy recover from Covid-19"},{ title:"International relations", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Defence and veterans", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},]},
        
        { name:"economy",title:"Economy", description:"economy", model:false,
        subtopics:[{title:"Business support", description:"Immigration"},{ title:"Regional development", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Forestry", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Fisheries", description:"Immigration"},{ title:"Tourism", description:"E"},{ title:"Economic Development and industry", description:"Immigration"},
        { title:"Trade and exports", description:"Immigration"},{ title:"Agriculture", description:"Immigration"},{ title:"Oil, gas and mining", description:"Immigration"},{ title:"Government revenue and finance", description:"Immigration"},{ title:"Foreign investment", description:"Immigration"}],},
        
        { name:"education",title:"Education", model:false,
        subtopics:[{title:"Schools", description:"Immigration"},{ title:"Early child education", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Tertiary education and research", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Tertiary fees and student support", description:"Immigration"},{ title:"Trades and vocational education", description:"E"},]},
        
        { name:"environment",title:"Environment",model:false,
        subtopics:[{title:"Conservation", description:"Immigration"},{ title:"Emmisions reduction", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Waste management", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Climate adaptation", description:"Immigration"},{ title:"Oceans", description:"E"},{ title:"Fresh water and pollution", description:"E"},]},
        
        { name:"health",title:"Health", model:false,
        subtopics:[{title:"Covid-19 health response", description:"Immigration"},{ title:"Public health", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Health funding and workforce", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Alchol and drugs", description:"Immigration"},{ title:"Mental health", description:"E"},{ title:"Health services", description:"E"},]},
        
        { name:"housing",title:"Housing", model:false,
        subtopics:[{title:"Housing and affordability", description:"Immigration"},{ title:"Social and public housing", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Housing quality", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Renting", description:"Immigration"},]},
        
        { name:"incomes",title:"Incomes and Employment",model:false,
        subtopics:[{title:"Tax and income support", description:"Immigration"},{ title:"Jobs and employment", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Wages and working conditions", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Superannuation", description:"Immigration"},{ title:"Benefits", description:"E"},]},
        
        { name:"law",title:"Law,Justice and Government", model:false,
        subtopics:[{title:"Criminal Justice", description:"Immigration"},{ title:"Parliament and democracy", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Local Government", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Civil Justice", description:"Immigration"},{ title:"Policing", description:"E"},{ title:"Family justice and safety", description:"Immigration"},
        { title:"Firearms", description:"Immigration"},{ title:"Public sector", description:"Immigration"},]},
        
        { name:"media",title:"Media, culture and recreation", model:false,
        subtopics:[{title:"Broadcasting and media", description:"description of indigenous people"},{ title:"Arts, culture and heritage", description:"random shizz"},{ title:"Sports and recreation", description:"rainbow"},]},
        
        { name:"transport",title:"Transport and infrastructure",  model:false, 
        subtopics:[{title:"Public transport, cycling and walking", description:"Immigration"},{ title:"Transport funding and planning", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Energy", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Internet and telecommunications", description:"Immigration"},{ title:"Rail transport", description:"E"},{ title:"Cars and roads", description:"Immigration"},
        { title:"Construction", description:"Immigration"},{ title:"Urban planning and resource management", description:"Immigration"},]},]
  }
  },
  components: {
    
  },
  created (){
    this.politician=this.politicians
  },
  methods: {
    subpolicyList(policy){
     for (var i=0; i < this.policies.length; i++) {
        if (this.policies[i].title === policy) {
            return this.policies[i].subtopics
        }
    }
    },
    policyDescription(policy){
      for (var i=0; i < this.policies.length; i++) {
        if (this.policies[i].title === policy) {
            return this.policies[i].description
        }
    }
    },
    subpolicyDescription(policy,subpolicy){
      let tempList='';
      for (var i=0; i < this.policies.length; i++) {
        if (this.policies[i].title === policy) {
             tempList=this.policies[i].subtopics
             for(var j=0;j< tempList.length;j++){
              if (tempList[j].title === subpolicy) {
              return tempList[j].description
              }
               }
        }
      }  
    },
    addPromises(){
    this.politician.promises.push({
        window:1,  
        policy:'',
        subpolicy:'',
        opinion:"",
        why:"",
        how:"",
        citation:[{url:""}]
    })
        // just add it next time, where there would be no duplicates
    // for (var i=0; i < this.policies.length; i++) {
    //     if (this.policies[i].title === this.promise.policy) {
    //         for(var j=0; j < this.policies[i].subtopics.length;j++){
    //           if(this.policies[i].subtopics[j].title === this.promise.subpolicy){
    //             console.log(this.policies[i].subtopics[j].title)
    //           }
    //         }
    //     }
    // }
    },
    //  handlePageChange(value) {
    //   this.politician.promises.window = value;
    // }
  }
}
</script>