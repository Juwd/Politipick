<template>
  <v-container>
    <!-- Position -->
    <h1>General Background</h1>
    <v-divider></v-divider>
    <v-row v-if="politician.status.position">
      <v-col sm="2"><v-input :messages="['Anung gawa niya ngayon?']" prepend-icon="mdi-account-question">Position</v-input></v-col>
       <v-col sm="2">{{politician.status.status}}</v-col>
      <v-col sm="2">{{politician.status.position}}</v-col>
      <!-- Currently iisa lang ang paglalagyan ng citation nung dalawa -->
      <v-col sm="6">
      <span v-for="(cite,i) in politician.status.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon2?'mdi-minus':undefined"
               @click:append="removePosiCite(i)" @click:append-outer="addPosiCite()" class="mt-0 pt-0" label="Citation"></v-text-field>
      </span>
      </v-col>
    </v-row>
    <!-- Past position -->
    <v-row v-if="politician.pastStatus.pastPosition"> 
      <v-col sm="2"><v-input :messages="['Anung gawa niya noon?']" prepend-icon="mdi-account-reactivate">Past status</v-input></v-col>
       <v-col sm="2">{{politician.pastStatus.pastStatus}}</v-col>
      <v-col sm="2">{{politician.pastStatus.pastPosition}}</v-col>
    
      <v-col sm="6">
      <span v-for="(cite,i) in politician.pastStatus.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon3?'mdi-minus':undefined"
               @click:append="removePastPosiCite(i)" @click:append-outer="addPastPosiCite()" class="mt-0 pt-0" label="Citation"></v-text-field>
      </span>
      </v-col>
    </v-row>
    <!-- Famous words -->
    <v-row v-if="politician.famousWords.famousWords">
      <v-col sm="2"><v-input :messages="['Weh sinabi niya to?']" prepend-icon="mdi-account-tie-voice">Famous Words</v-input></v-col>
       <v-col sm="4">{{politician.famousWords.famousWords}}</v-col>
    
      <v-col sm="6">
      <span v-for="(cite,i) in politician.famousWords.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon4?'mdi-minus':undefined"
               @click:append="removeWordsCite(i)" @click:append-outer="addWordsCite()" class="mt-0 pt-0" label="Citation"></v-text-field>
      </span>
      </v-col>
    </v-row>
    <!-- <h1>Educations</h1> -->
    <!-- Put something to separate them -->
    <v-divider></v-divider>
    <!-- Schools citation -->
    <div v-for="(school,i) in politician.schools" :key="school.index">
      <v-row v-if="politician.schools[0].description">
            <v-col v-if="i==0" sm="2">
                <v-input :messages="['May pinag aralan ba to?']" prepend-icon="mdi-school">Educational Background</v-input>
            </v-col>
            <v-col v-else sm="2"></v-col>
            <v-col sm="4">
                <p>{{school.level}} at {{school.description}}</p>
            </v-col>
          <v-col sm="6">
              <span v-for="(cite,x) in school.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon1[i]?'mdi-minus':undefined"
               @click:append="removeEducCite(i,x)" @click:append-outer="addEducCite(i)" class="mt-0 pt-0" label="Citation"></v-text-field>
              </span>
          </v-col>
      </v-row>
    </div>
    <!-- Certificates citation -->
    <div v-for="(certificate,i) in politician.certificates" :key="certificate.index">
      <v-row v-if="politician.certificates[0].description">
            <v-col v-if="i==0" sm="2">
                <v-input :messages="['May training ba to?']" prepend-icon="mdi-certificate">Educational Background</v-input>
            </v-col>
            <v-col v-else sm="2"></v-col>
            <v-col sm="4">
                <p>{{certificate.description}} at {{certificate.place}}</p>
            </v-col>
          <v-col sm="6">
              <span v-for="(cite,x) in certificate.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon5[i]?'mdi-minus':undefined"
               @click:append="removeCertificateCite(i,x)" @click:append-outer="addCertificateCite(i)" class="mt-0 pt-0" label="Citation"></v-text-field>
              </span>
          </v-col>
      </v-row>
    </div>
    <v-divider></v-divider>
    <!-- plans citation -->
    <div v-for="(plan,i) in politician.plans" :key="plan.index">
      <v-row v-if="politician.plans[0].plans">
            <v-col v-if="i==0" sm="2">
                <v-input :messages="['Anung focus niya?']" prepend-icon="mdi-google-analytics">Economic plans</v-input>
            </v-col>
            <v-col v-else sm="2"></v-col>
            <v-col sm="4">
                <p>{{plan.plans}} </p>
            </v-col>
          <v-col sm="6">
              <span v-for="(cite,x) in plan.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon6[i]?'mdi-minus':undefined"
               @click:append="removePlanCite(i,x)" @click:append-outer="addPlanCite(i)" class="mt-0 pt-0" label="Citation"></v-text-field>
              </span>
          </v-col>
      </v-row>
    </div>
    <!-- Highlights citation -->
    <div v-for="(highlight,i) in politician.highlights" :key="highlight.index">
      <v-row v-if="politician.highlights[0].description">
            <v-col v-if="i==0" sm="2">
                <v-input :messages="['May pinag aralan ba to?']" prepend-icon="mdi-seal">Political Highlights</v-input>
            </v-col>
            <v-col v-else sm="2"></v-col>
            <v-col sm="4">
                <p>{{highlight.description}} at {{highlight.date}}</p>
            </v-col>
          <v-col sm="6">
              <span v-for="(cite,x) in highlight.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon7[i]?'mdi-minus':undefined"
               @click:append="removeHighlightCite(i,x)" @click:append-outer="addHighlightCite(i)" class="mt-0 pt-0" label="Citation"></v-text-field>
              </span>
          </v-col>
      </v-row>
    </div>
    <!-- Belief -->
    <v-row v-if="politician.belief.belief">
      <v-col sm="2"><v-input :messages="['left ? right? centrist?']" prepend-icon="mdi-seal">Belief</v-input></v-col>
       <v-col sm="4">{{politician.belief.belief}}</v-col>
    
      <v-col sm="6">
      <span v-for="(cite,i) in politician.belief.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon8?'mdi-minus':undefined"
               @click:append="removeBeliefCite(i)" @click:append-outer="addBeliefCite()" class="mt-0 pt-0" label="Citation"></v-text-field>
      </span>
      </v-col>
    </v-row>
    <!-- Job -->
    <v-row v-if="politician.job.job">
      <v-col sm="2"><v-input :messages="['Mayroong trabaho ba ito bago napapad dito?']" prepend-icon="mdi-briefcase-variant">Job</v-input></v-col>
       <v-col sm="4">{{politician.job.job}}</v-col>
    
      <v-col sm="6">
      <span v-for="(cite,i) in politician.job.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon9?'mdi-minus':undefined"
               @click:append="removeJobCite(i)" @click:append-outer="addJobCite()" class="mt-0 pt-0" label="Citation"></v-text-field>
      </span>
      </v-col>
    </v-row>
    <!-- Affiliation -->
    <div v-for="(affiliation,i) in politician.affiliations" :key="affiliation.index">
      <v-row v-if="politician.affiliations[0].description">
            <v-col v-if="i==0" sm="2">
                <v-input :messages="['May pinag aralan ba to?']" prepend-icon="mdi-relation-one-to-one-or-many">Affiliations</v-input>
            </v-col>
            <v-col v-else sm="2"></v-col>
            <v-col sm="4">
                <p>{{affiliation.description}} at {{affiliation.date}}</p>
            </v-col>
          <v-col sm="6">
              <span v-for="(cite,x) in affiliation.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon10[i]?'mdi-minus':undefined"
               @click:append="removeAffiliationCite(i,x)" @click:append-outer="addAffiliationCite(i)" class="mt-0 pt-0" label="Citation"></v-text-field>
              </span>
          </v-col>
      </v-row>
    </div>

      <v-row>
        <v-col >
          <p>{{politician.affiliations}}</p>
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
      rules: [
        value => !!value || 'Required.',
        // value => (value || '').length <= 20 || 'Max 20 characters',
        // value => {
        //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //   return pattern.test(value) || 'Invalid e-mail.'
        // },
        
      ],
      // Education
      showIcon1:[],
      // Position
      showIcon2:false,
      //PastPosition
      showIcon3:false,
      //FamousWords
      showIcon4:false,
      showIcon5:[],
      showIcon6:[],
      showIcon7:[],
      showIcon8:false,
      showIcon9:false,
      showIcon10:[],
  }),
  created() {
      this.politician=this.politicians.credentials
      for (let i=0; i<this.politicians.credentials.schools.length;i+=1)
      {
        this.showIcon1.push(false)
      }
      for (let i=0; i<this.politicians.credentials.certificates.length;i+=1)
      {
        this.showIcon5.push(false)
      }
      for (let i=0; i<this.politicians.credentials.plans.length;i+=1)
      {
        this.showIcon6.push(false)
      }
      for (let i=0; i<this.politicians.credentials.highlights.length;i+=1)
      {
        this.showIcon7.push(false)
      }
      for (let i=0; i<this.politicians.credentials.affiliations.length;i+=1)
      {
        this.showIcon10.push(false)
      }
  },
  computed :{
      
  },
  methods : {
    addAffiliationCite (i) {
         this.politician.affiliations[i].citation.push({  
           url:""
         })
         this.showIcon10[i]=true
      },
    removeAffiliationCite (i,index) {
          if(this.politician.affiliations[i].citation.length > 1)
          {
            this.politician.affiliations[i].citation.splice(index, 1)
          }
          if(this.politician.affiliations[i].citation.length ==1){
            this.showIcon10[i]=false
          }
     },
    addHighlightCite (i) {
         this.politician.highlights[i].citation.push({  
           url:""
         })
         this.showIcon7[i]=true
      },
    removeHighlightCite (i,index) {
          if(this.politician.highlights[i].citation.length > 1)
          {
            this.politician.highlights[i].citation.splice(index, 1)
          }
          if(this.politician.highlights[i].citation.length ==1){
            this.showIcon7[i]=false
          }
     },
    addPlanCite (i) {
         this.politician.plans[i].citation.push({  
           url:""
         })
         this.showIcon6[i]=true
      },
    removePlanCite (i,index) {
          if(this.politician.plans[i].citation.length > 1)
          {
            this.politician.plans[i].citation.splice(index, 1)
          }
          if(this.politician.plans[i].citation.length ==1){
            this.showIcon6[i]=false
          }
     },
    addCertificateCite (i) {
         this.politician.certificates[i].citation.push({  
           url:""
         })
         this.showIcon5[i]=true
      },
    removeCertificateCite (i,index) {
          if(this.politician.certificates[i].citation.length > 1)
          {
            this.politician.certificates[i].citation.splice(index, 1)
          }
          if(this.politician.certificates[i].citation.length ==1){
            this.showIcon5[i]=false
          }
     },
     addEducCite (i) {
         this.politician.schools[i].citation.push({  
           url:""
         })
         this.showIcon1[i]=true
      },
    removeEducCite (i,index) {
          if(this.politician.schools[i].citation.length > 1)
          {
            this.politician.schools[i].citation.splice(index, 1)
          }
          if(this.politician.schools[i].citation.length ==1){
            this.showIcon1[i]=false
          }
     },
    //  for position
    addPosiCite() {
       this.politician.status.citation.push({
         url:""
       })
       this.showIcon2 = true
     },
    //  Past position
    removePosiCite(i) {
      if(this.politician.status.citation.length > 1)
          {
            this.politician.status.citation.splice(i, 1)
          }
          if(this.politician.status.citation.length ==1){
            this.showIcon2=false
          }
    },
    addPastPosiCite() {
       this.politician.pastStatus.citation.push({
         url:""
       })
       this.showIcon3 = true
     },
    removePastPosiCite(i) {
      if(this.politician.pastStatus.citation.length > 1)
          {
            this.politician.pastStatus.citation.splice(i, 1)
          }
          if(this.politician.pastStatus.citation.length ==1){
            this.showIcon3=false
          }
    },
    addWordsCite() {
       this.politician.famousWords.citation.push({
         url:""
       })
       this.showIcon4 = true
     },
    removeWordsCite(i) {
      if(this.politician.famousWords.citation.length > 1)
          {
            this.politician.famousWords.citation.splice(i, 1)
          }
          if(this.politician.famousWords.citation.length ==1){
            this.showIcon4=false
          }
    },
    addBeliefCite() {
       this.politician.belief.citation.push({
         url:""
       })
       this.showIcon8 = true
     },
    removeBeliefCite(i) {
      if(this.politician.belief.citation.length > 1)
          {
            this.politician.belief.citation.splice(i, 1)
          }
          if(this.politician.belief.citation.length ==1){
            this.showIcon8=false
          }
    },
    addJobCite() {
       this.politician.job.citation.push({
         url:""
       })
       this.showIcon9 = true
     },
    removeJobCite(i) {
      if(this.politician.job.citation.length > 1)
          {
            this.politician.job.citation.splice(i, 1)
          }
          if(this.politician.job.citation.length ==1){
            this.showIcon9=false
          }
    },
  }
}
</script>


