<template>
    <v-card>
        <v-img src="@/assets/person.png"></v-img>
    <v-card-title>{{details.title}}</v-card-title>
    <v-card-subtitle>{{details.status}}, {{details.politicalAffiliation}}</v-card-subtitle>
    <blockquote class="headline text-center">" Words I am known by " </blockquote>    
    <!-- <v-tabs v-model='tabs' fixed-tabs>
    <v-tab v-for="promise in promises" :key="promise.title">
     {{promise.title}}
    </v-tab>
     </v-tabs>
     <v-tabs-items v-model="tabs">
      <v-tab-item v-for="promise in promises" :key="promise.promise">
        <v-card color="basil" flat>
         lagay ka na lang dito nung mga components
          <v-card-text>{{promise.promise}}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
    </v-card>
</template>

<script>
export default {
    name: 'sidebar',
    data () { return{
        tabs: null,
          details: {title: 'President',politicalAffiliation: 'Current Political Affiliation', status: 'Candidate'},
          //promises: [{title: 'Total Promises', promise:'20'}, {title: 'Promises Followed', promise: '0'}]
    }
    }
}
</script>