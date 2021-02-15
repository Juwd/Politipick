<template>

    <v-layout>
      <v-flex lg8>
    <v-card flat>
        <v-card-title class="text-center justify-center py-6">
          <div v-if="profileLoaded">
          <h1 class="font-weight-bold display-3 basil--text">{{details.name}}</h1>
          </div>
          <div v-else>
            <h1 class="font-weight-bold display-3 basil--text">Loading...</h1>
          </div>
        </v-card-title>
    <v-tabs background-color="transparent" color="basil" v-model="tab" grow icons-and-text>
      <v-tab v-for="item in items" :key="item.title">
        {{ item.title }}
        <v-icon>{{item.icons}}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.title">
        <credentials v-if="item.title=='Credentials'" />
        <criticisms v-if="item.title=='Criticisms'" v-bind:detail="details" />
        <deeds v-if="item.title=='Deeds'" v-bind:detail="details"/>
        <praises v-if="item.title=='Praises'" v-bind:detail="details"/>
        <promises v-if="item.title=='Campaign Promises'" v-bind:detail="details"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
      </v-flex>
      <v-flex lg4>
        <div v-if="profileLoaded">
          <sidebar v-bind:detail="details"/>
        </div>
        <div v-else>
          <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
              <v-skeleton-loader
              class="mx-auto"
              type="card"
              ></v-skeleton-loader>
          </v-sheet>
        </div>
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
import politicianService from '../service/politicianService'

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
    details: [],
    profileLoaded: false
  }
  },
  async created() {
        try {
            this.details = await politicianService.getPoliticiansId(this.$route.params.id);
            this.profileLoaded = true;
            console.log(this.details);
            //console.log(this.profileLoaded)
        } catch (err) {
            this.error = err.message
        }
    },
    inject: {
      theme: {
        default: { isDark: false },
      }
      }
}
</script>
