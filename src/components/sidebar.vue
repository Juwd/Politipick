<template>
    <v-card>
        <v-img :src="details.avatar"></v-img>
    <v-card-title>{{details.position}}</v-card-title>
    <v-card-subtitle>{{details.status}}, {{latestAffiliation}}</v-card-subtitle>
    <blockquote class="headline text-center">" {{details.famousWords}} " </blockquote>    
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
    props : ['detail'],
    data () { 
      return{
        tabs: null,
        details: this.detail,
          //promises: [{title: 'Total Promises', promise:'20'}, {title: 'Promises Followed', promise: '0'}]
    }
    },
    computed : {
      latestAffiliation: function() {
            return (this.details.affiliations.reduce((max,affiliation) => 
            affiliation.date.localeCompare(max.date) <0? max:affiliation).date
            )
        }
    }
}
</script>