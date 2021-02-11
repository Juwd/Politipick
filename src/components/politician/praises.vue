<template>
        <v-row wrap>
            <v-col lg=12 v-for="praises in details.praises" :key="praises._id">
                <v-card color="light-green lighten-3">
                    <v-list-item three-line>
                        <v-list-item-content> 
                            <div class="overline mb-4">
                                {{praises.publisher}}
                            </div>   
                            <v-list-item-title class="headline mb-1">
                                {{praises.title}}
                            </v-list-item-title>
                            
                            <v-list-item-content>
                                {{praises.description}}... <a :href="praises.url">Read more</a>
                            </v-list-item-content>
                            
                        </v-list-item-content>
                        <v-list-item-avatar tile class="ma-3" size="125"><v-img :src="praises.image"></v-img></v-list-item-avatar>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
</template>

<script>

export default {
    name:'praises',
    props : ['detail'],
    data () { 
      return{
        tabs: null,
        details: this.detail,
          //promises: [{title: 'Total Promises', promise:'20'}, {title: 'Promises Followed', promise: '0'}]
    }},
}

</script>
