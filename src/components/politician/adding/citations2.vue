<template>
    <v-container>
    <!-- Priorities -->
    <v-row v-if="politicians.priorities.priorities">
      <v-col sm="2"><v-input :messages="['So anung priorities ko? Magsasaka? Mayayaman?']" prepend-icon="mdi-priority-high">Priorities</v-input></v-col>
       <v-col sm="4">{{politicians.priorities.priorities}}</v-col>
    
      <v-col sm="6">
      <span v-for="(cite,i) in politicians.priorities.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon1?'mdi-minus':undefined"
               @click:append="removePrioritiesCite(i)" @click:append-outer="addPrioritiesCite()" class="mt-0 pt-0" label="Citation"></v-text-field>
      </span>
      </v-col>
    </v-row>
    <!-- reasons -->
    <v-row v-if="politicians.reasons.reasons">
      <v-col sm="2"><v-input :messages="['So bakit gusto ko tumakbo? kasi gusto kong yumaman?']" prepend-icon="mdi-text-to-speech">Reasons</v-input></v-col>
       <v-col sm="4">{{politicians.reasons.reasons}}</v-col>
    
      <v-col sm="6">
      <span v-for="(cite,i) in politicians.reasons.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon2?'mdi-minus':undefined"
               @click:append="removeReasonsCite(i)" @click:append-outer="addReasonsCite()" class="mt-0 pt-0" label="Citation"></v-text-field>
      </span>
      </v-col>
    </v-row>
    <!-- Promise citation -->
    <div v-for="(promise,i) in politicians.promises" :key="promise.index">
      <v-row v-if="politicians.promises[0].opinion">
            <v-col v-if="i==0" sm="2">
                <v-input :messages="['So what did they promise?']" prepend-icon="mdi-account-tie-voice">Promise</v-input>
            </v-col>
            <v-col v-else sm="2"></v-col>
            <v-col sm="4">
                <p>{{promise.policy}}: {{promise.subpolicy}}</p>
            </v-col>
          <v-col sm="6">
              <span v-for="(cite,x) in promise.citation" :key="cite.index"><v-text-field v-model="cite.url" clearable append-outer-icon="mdi-plus" :append-icon="showIcon3[i]?'mdi-minus':undefined"
               @click:append="removePromiseCite(i,x)" @click:append-outer="addPromiseCite(i)" class="mt-0 pt-0" label="Citation"></v-text-field>
              </span>
          </v-col>
      </v-row>
    </div>
    </v-container>    
</template>

<script>
export default {
    name: 'citations',
  components: {
  },
  props:['politicians'],
  data: () => ({
        showIcon1:false,
        showIcon2:false,
        showIcon3:[],
  }),
  created () {
      for (let i=0; i<this.politicians.promises.length;i+=1)
      {
        this.showIcon3.push(false)
      }
  },
  methods: {
      addPrioritiesCite() {
       this.politicians.priorities.citation.push({
         url:""
       })
       this.showIcon1 = true
     },
    removePrioritiesCite(i) {
      if(this.politicians.priorities.citation.length > 1)
          {
            this.politicians.priorities.citation.splice(i, 1)
          }
          if(this.politicians.priorities.citation.length ==1){
            this.showIcon1=false
          }
    },
    addReasonsCite() {
       this.politicians.reasons.citation.push({
         url:""
       })
       this.showIcon2 = true
     },
    removeReasonsCite(i) {
      if(this.politicians.reasons.citation.length > 1)
          {
            this.politicians.reasons.citation.splice(i, 1)
          }
          if(this.politicians.reasons.citation.length ==1){
            this.showIcon2=false
          }
    },
    addPromiseCite (i) {
         this.politicians.promises[i].citation.push({  
           url:""
         })
         this.showIcon3[i]=true
      },
    removePromiseCite (i,index) {
          if(this.politicians.promises[i].citation.length > 1)
          {
            this.politicians.promises[i].citation.splice(index, 1)
          }
          if(this.politicians.promises[i].citation.length ==1){
            this.showIcon3[i]=false
          }
     },

  
  }

}
</script>