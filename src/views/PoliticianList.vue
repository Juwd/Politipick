<template>
    <div class="PoliticianList">
        <h1 class="subheading grey--text">Politicians</h1>
        <v-container class="my-5">
            <v-layout row class="mb-3">
                <v-btn small flat color="grey" @click="sortBy('position')">
                    <v-icon left>mdi-account-tie</v-icon>
                    <span class="caption text-lowercase">By position</span>
                </v-btn>
                <v-btn small flat color="grey" @click="sortBy('name')">
                    <v-icon left>mdi-account-box</v-icon>
                    <span class="caption text-lowercase">By name</span>
                </v-btn>
            </v-layout>
            <v-card outlined class="pa-3" v-for="detail in details" :key="detail.name" :to="'politicians/'+ detail._id" router> 
            <v-layout >
                <v-flex xs12 md1 lg1>
                    <v-img contain max-height="100" max-width="100" :src="detail.avatar" :alt="detail.name"></v-img>
                </v-flex>
                <v-flex xs12 lg6>
                    <div class="title">{{detail.name}}</div>
                    <div class="caption">{{detail.position}}, <i>{{detail.status}}</i></div>
                </v-flex>
            </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src
import politicianService from '../service/politicianService'
export default {
  name: 'PoliticianList',
  components: {
  },
  data () { return {
      profileLoaded : false,
      details : [],
  }
  },
  async created() {
        try {
            this.details = await politicianService.getPoliticians();
            this.profileLoaded = true;
            //console.log(this.details);
            //console.log(this.profileLoaded)
        } catch (err) {
            this.error = err.message
        }
    },
    methods :{
        sortBy (prop) {
            this.details.sort((a,b) => a[prop] < b[prop] ? -1:1)
        }
    },
}
</script>
