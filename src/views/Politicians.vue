<template>

    <v-layout>
      <v-flex lg8>
    <v-card flat>
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 basil--text">{{politician.name}}</h1>
        </v-card-title>
    <v-tabs background-color="transparent" color="basil" v-model="tab" grow icons-and-text>
      <v-tab v-for="item in items" :key="item.title">
        {{ item.title }}
        <v-icon>{{item.icons}}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.title">
        <credentials v-if="item.title=='Credentials'"/>
        <criticisms v-if="item.title=='Criticisms'" />
        <deeds v-if="item.title=='Deeds'" />
        <praises v-if="item.title=='Praises'"/>
        <promises v-if="item.title=='Campaign Promises'"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
      </v-flex>
      <v-flex lg4>
        <sidebar />
      </v-flex>
    </v-layout>

</template>

<script>
// @ is an alias to /src

//import posts from '../components/posts'
import sidebar from '../components/sidebar'
import credentials from '../components/politician/credentials'
import criticisms from '../components/politician/criticisms'
import deeds from '../components/politician/deeds'
import praises from '../components/politician/praises'
import promises from '../components/politician/promises'

export default {
  name: 'Politicians',
  components: {
   // posts,
   sidebar,
   credentials,
   criticisms,
   deeds,
   praises,
   promises
  },
  data ()  { return {
    tab: null,
    items: [ {title:'Credentials', icons:'mdi-certificate-outline', components:'credentials'}, {title:'Deeds', icons:'mdi-clipboard-list-outline'}, {title:'Campaign Promises', icons: 'mdi-hand-peace'}, {title:'Praises' , icons:'mdi-thumb-up-outline'}, {title:'Criticisms', icons: 'mdi-thumb-down-outline'}
    ],
    politician:{name:'Name of Politician'}
  }
  }
}
</script>
