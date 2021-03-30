<template>
  <div>
  <v-form ref="form">
      
      <v-row>
        <v-col>
            <h1>Adding Credentials</h1>
        </v-col>
      </v-row>
      <!-- names -->
      <v-row>
        <v-col lg="6">
            <v-text-field required v-model="firstName" label="First Name" :rules="rules" hide-details="auto"
            @change="fullName"></v-text-field>
        </v-col>
        <v-col lg="6">
            <v-text-field v-model="lastName" :rules="rules" label="Last Name" @change="fullName"></v-text-field>
        </v-col>
        <!-- Adding the avatar -->
        <!-- <v-col lg="4">
            <v-file-input v-model="politician.image" truncate-length="15" accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-camera" placeholder="Upload Image of Politician here"></v-file-input>
        </v-col> -->
      </v-row>

      <!-- Position -->
      <v-row>
        <v-col md="3">
            <v-select v-model="politician.credentials.status.status" :items="credentials.status" label="Latest status" outlined></v-select>
        </v-col>
        <v-col md="3">
            <v-text-field v-model="politician.credentials.status.position" required label="Position" :rules="rules" hide-details="auto"
            ></v-text-field>
        </v-col>
        <v-col md="3">
            <v-select v-model="politician.credentials.pastStatus.pastStatus" :items="credentials.status" label="Past status" outlined></v-select>
        </v-col>
        <v-col md="3">
            <v-text-field v-model="politician.credentials.pastStatus.pastPosition" required label="Position" :rules="rules" hide-details="auto"
            ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="2">
          <v-input :messages="['Anung pinakang magandang salita, na lumabas sa bungaga nito?']" prepend-icon="mdi-account-tie-voice">Famous words</v-input> 
        </v-col>
        <v-col sm="10">
          <v-text-field v-model="politician.credentials.famousWords.famousWords" placeholder="E.g. Ang kabataan ang pag-asa ng bayan"></v-text-field>
        </v-col>
      </v-row>
      <!-- Education shit -->
      <div v-for="(education,i) in politician.credentials.schools" :key="education.index">
      <v-row>
        <v-col v-if="i==0" sm="2">
            <v-input :messages="['May pinag aralan ba to?']" prepend-icon="mdi-school">Educational Background</v-input> 
        </v-col>
        <v-col v-else sm="2"></v-col>
          <v-col sm="4">
              <v-combobox  v-model="education.description" :items="credentials.schools" label="Select a university or add a new one"  clearable outlined></v-combobox>
          </v-col>
          <v-col sm="6">
              <v-text-field v-model="education.level" placeholder="E.g. BS Economics" :rules="rules" hide-details="auto" append-outer-icon="mdi-plus" :append-icon="showIcon1?'mdi-minus':undefined" @click:append="removeEduc(i)" @click:append-outer="addEduc"> </v-text-field>
          </v-col>
      </v-row>
      </div>
      <!-- Certification -->
      <div v-for="(certification,i) in politician.credentials.certificates" :key="certification.index">
      <v-row>
          <v-col v-if="i==0" sm="2">
            <v-input :messages="['May training ba ito?']" prepend-icon="mdi-certificate">Certification</v-input> 
          </v-col>
          <v-col v-else sm="2"></v-col>
          <v-col sm="4">
              <v-text-field v-model="certification.place" placeholder="E.g. Institution of X" :rules="rules" hide-details="auto" > </v-text-field>
          </v-col>
          <v-col sm="6">
              <v-text-field v-model="certification.description" placeholder="E.g. Training in Good governance" :rules="rules" hide-details="auto" append-outer-icon="mdi-plus" :append-icon="showIcon2?'mdi-minus':undefined" @click:append="removeCerti(i)" @click:append-outer="addCerti"> </v-text-field>
          </v-col>
      </v-row>
      </div>
      <!-- Economic plans -->
      <v-row>
        <v-col sm="2">
            <v-input :messages="['Anung focus niya?']" prepend-icon="mdi-google-analytics">Economic Plan</v-input> 
          </v-col>
          <v-col sm="10">
              <v-textarea rows="1" v-model="tempPlans" placeholder="E.g. Boosting infrastructure by increasing taxes for the next 20 years... etc." @keyup.enter="addPlans" hide-details="auto"> </v-textarea>
          </v-col>
      </v-row>
      <v-row>
        <v-col sm="2"></v-col>
        <v-col sm="10">
        <v-card flat>
          <v-card-title>
            Politician's Plans 
          </v-card-title>
          <v-card-text v-for="plan in politician.credentials.plans" :key="plan.index">
              {{plan.plans}}
          </v-card-text>
        </v-card>
        <v-divider></v-divider>
        </v-col>
      </v-row>
      <!-- Political highlights -->
      <div v-for="(highlight,i) in politician.credentials.highlights" :key="highlight.index">
      <v-row>
        <v-col v-if="i==0" sm="2">
            <v-input :messages="['Sa career niya ng politiko, anong ipagmamalaki nito?']" prepend-icon="mdi-seal">Political highlights</v-input> 
        </v-col>
        <v-col v-else sm="2"></v-col>
          <v-col sm="7">
              <v-text-field  v-model="highlight.description" placeholder="E.g. Decreased wealth disparity by writing and passing the X policy etc."  clearable outlined></v-text-field>
          </v-col>
          <v-col sm="3">
              <v-text-field v-model="highlight.date" placeholder="E.g. March, 2020" :rules="rules" hide-details="auto" append-outer-icon="mdi-plus" :append-icon="showIcon3?'mdi-minus':undefined" @click:append="removeHighlights(i)" @click:append-outer="addHighlights"> </v-text-field>
          </v-col>
      </v-row>
      </div>
      <!-- Beliefs -->
      <v-row>
        <v-col sm="2">
          <v-input :messages="['left ? right? centrist?']" prepend-icon="mdi-seal">Political belief</v-input> 
          </v-col>
          <v-col sm="4">
              <!-- <v-text-field  label="E.g. christian democracy" :rules="rules" hide-details="auto"> </v-text-field> -->
              <v-combobox v-model="politician.credentials.belief.belief"  :items="credentials.beliefs" label="Select a belief or add a new one" clearable outlined></v-combobox>
          </v-col>
      <!-- Job -->
          <v-col sm="2">
            <v-input :messages="['Mayroong trabaho ba ito bago napapad dito?']" prepend-icon="mdi-briefcase-variant">Job</v-input> 
          </v-col>
          <v-col sm="4">
              <v-text-field v-model="politician.credentials.job.job" placeholder="E.g. Chairman of X company" :rules="rules" hide-details="auto"> </v-text-field>
          </v-col>
      </v-row>
      <!-- Affiliation -->
      <v-row>
        <v-col sm="2">

        </v-col>
        
      </v-row>
      <div v-for="(affiliation,i) in politician.credentials.affiliations" :key="affiliation.index">
      <v-row>
        <v-col v-if="i==0" sm="2">
            <v-input :messages="['Sinong mga kakampi nito?']" prepend-icon="mdi-relation-one-to-one-or-many">Political affiliation</v-input>
        </v-col>
        <v-col v-else sm="2"></v-col>
          <v-col sm="4">
              <!-- <v-text-field label="E.g. Liberal Party" :rules="rules" hide-details="auto"> </v-text-field> -->
            <v-combobox  v-model="affiliation.description" :items="credentials.parties" label="Select a party or add a new one"  clearable outlined></v-combobox>
          </v-col>
          <v-col sm="2">
              <v-text-field v-model="affiliation.date" placeholder="E.g. March, 2020" :rules="rules" hide-details="auto" append-outer-icon="mdi-plus" :append-icon="showIcon4?'mdi-minus':undefined" @click:append="removeAffiliations(i)" @click:append-outer="addAffiliations"> </v-text-field>
          </v-col>
      </v-row>
      </div>
      <div v-for="(relative,i) in politician.credentials.relatives" :key="relative.index">
      <v-row>
        <v-col v-if="i==0" sm="2">
            <v-input :messages="['Pang ilang *surname* na ba to sa gobyerno?']" prepend-icon="mdi-human-male-female">Relatives in Position</v-input> 
        </v-col>
        <v-col v-else sm="2"></v-col>
          <v-col sm="4">
              <!-- <v-text-field label="E.g. Liberal Party" :rules="rules" hide-details="auto"> </v-text-field> -->
            <v-text-field v-model="relative.person" placeholder="E.g. Juan dela cruz" :rules="rules" hide-details="auto"> </v-text-field>
          </v-col>
          <v-col sm="2">
              <v-text-field v-model="relative.position" placeholder="E.g. March, 2020" :rules="rules" hide-details="auto" append-outer-icon="mdi-plus" :append-icon="showIcon5?'mdi-minus':undefined" @click:append="removeRelatives(i)" @click:append-outer="addRelatives"> </v-text-field>
          </v-col>
      </v-row>
      </div>
  </v-form>
  <p>{{politician.credentials}}</p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'credentials',
  props:['politicians'],
  components: {
  },
  data : () => ({
      rules: [
        value => !!value || 'Required.',
        // value => (value || '').length <= 20 || 'Max 20 characters',
        // value => {
        //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //   return pattern.test(value) || 'Invalid e-mail.'
        // }
      ],
      // Added politician variables
      //for the name
      firstName:'',
      lastName:'',
      //for the schools
      showIcon1:false,
      showIcon2:false,
      //for the plans
      tempPlans:'',
      //for Highlights
      showIcon3:false,
      //for affiliations
      showIcon4:false,
      //For relatives
      showIcon5:false,
      credentials:{status:["Running for", "Currently elected","Retired"], 
      beliefs:["Social Democracy", "Federalism", "Conservatism","Liberal Conservatism", "Christian Democracy", "Liberalism"], 
      parties:["PDP-Laban", "Nacionalista Party", "Nationalist People's Coalition", "Lakas-Christian Muslim Democrats", "Partido Liberal"], 
      schools:["University of the Philippines", "De La Salle University", "University of Sto. Tomas", "Ateneo de Manila University"]},
      // Main data to be sent
      politician:{},
      // politician:{credentials:{name:'' ,status:{status:'',citation:[{url:""}]},position:{position:'',citation:[{url:""}]},pastStatus:{pastStatus:'',pastPosition:'', citation:[{url:""}]},famousWords:{famousWords:"",citation:[{url:""}]}, schools:[{description:"",level:"",citation:[{url:""}]}], 
                  // certificates:[{description:"",place:"",citation:[{url:""}]}], plans:[], highlights:[{description:"", date:"",citation:[{url:""}]}], belief:{belief:"",citation:[{url:""}]}, 
                  // affiliations:[{description:"", date:"",citation:[{url:""}]}],job:{job:"",citation:[{url:""}]}, relatives:[{person:"",position:"",citation:[{url:""}]}], },}
  }),
  created (){
    this.politician= this.politicians
  },
  methods: {
    fullName (){
      this.politician.credentials.name=this.firstName + ' ' + this.lastName
    },
     addEduc () {
         this.politician.credentials.schools.push({  
           level: "",
           description:"",
           citation:[{url:""}]
         })
         this.showIcon1=true
      },
      removeEduc (index) {
          if(this.politician.credentials.schools.length > 1)
          {
            this.politician.credentials.schools.splice(index, 1)
          }
          if(this.politician.credentials.schools.length ==1){
            this.showIcon1=false
          }
     },
    //  Kaya tong mapaikli pero copy paste na lang lol
     addCerti () {
         this.politician.credentials.certificates.push({ 
           description: "", 
           place: "",
           citation:[{url:""}]
         })
         this.showIcon2=true
      },
      removeCerti (index) {
          if(this.politician.credentials.certificates.length > 1)
          {
            this.politician.credentials.certificates.splice(index, 1)
          }
          if(this.politician.credentials.certificates.length ==1){
            this.showIcon2=false
          }
     },
     addHighlights () {
         this.politician.credentials.highlights.push({ 
           description: "", 
           date: "",
           citation:[{url:""}]
         })
         this.showIcon3=true
      },
      removeHighlights (index) {
          if(this.politician.credentials.highlights.length > 1)
          {
            this.politician.credentials.highlights.splice(index, 1)
          }
          if(this.politician.credentials.highlights.length ==1){
            this.showIcon3=false
          }
     },
     addPlans () {
        if (this.tempPlans) {
          if(!this.politician.credentials.plans.includes(this.tempPlans)){
            // this.tempPlans=this.tempPlans.split('\n').toString()
            this.politician.credentials.plans.push({plans:this.tempPlans.split('\n').join(""),citation:[{url:""}]})
          }
          this.tempPlans=""
        }
     },
     addAffiliations () {
         this.politician.credentials.affiliations.push({ 
           description: "", 
           date: "",
           citation:[{url:""}]
         })
         this.showIcon4=true
      },
      removeAffiliations (index) {
          if(this.politician.credentials.affiliations.length > 1)
          {
            this.politician.credentials.affiliations.splice(index, 1)
          }
          if(this.politician.credentials.affiliations.length ==1){
            this.showIcon4=false
          }
     },
     addRelatives () {
         this.politician.credentials.relatives.push({ 
           description: "", 
           date: "",
           citation:[{url:""}]
         })
         this.showIcon5=true
      },
      removeRelatives (index) {
          if(this.politician.credentials.relatives.length > 1)
          {
            this.politician.credentials.relatives.splice(index, 1)
          }
          if(this.politician.credentials.relatives.length ==1){
            this.showIcon5=false
          }
     },
  }
}
</script>
