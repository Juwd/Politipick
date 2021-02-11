<template>
        <v-row wrap>
            <v-col lg=12 v-for="deeds in details.deeds" :key="deeds._id">
                <v-card outlined>
                    <v-list-item three-line>
                        <v-list-item-content> 
                            <div class="overline mb-4">
                                {{deeds.publisher}}
                            </div>   
                            <v-list-item-title class="headline mb-1">
                                {{deeds.title}}
                            </v-list-item-title>
                            
                            <v-list-item-content>
                                {{deeds.description}}... <a :href="deeds.url">Read more</a>
                            </v-list-item-content>
                            
                        </v-list-item-content>
                        <v-list-item-avatar tile class="ma-3" size="125"><v-img :src="deeds.image"></v-img></v-list-item-avatar>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
</template>

<script>

export default {
    name:'deeds',
    props : ['detail'],
    data () { 
      return{
        tabs: null,
        details: this.detail,
          //promises: [{title: 'Total Promises', promise:'20'}, {title: 'Promises Followed', promise: '0'}]
    }},
}

</script>
