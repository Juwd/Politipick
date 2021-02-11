<template>
        <v-row wrap>
            <v-col lg=12 v-for="criticisms in details.criticisms" :key="criticisms._id">
                <v-card color="red lighten-3">
                    <v-list-item three-line>
                        <v-list-item-content> 
                            <div class="overline mb-4">
                                {{criticisms.publisher}}
                            </div>   
                            <v-list-item-title class="headline mb-1">
                                {{criticisms.title}}
                            </v-list-item-title>
                            
                            <v-list-item-content>
                                {{criticisms.description}}... <a :href="criticisms.url">Read more</a>
                            </v-list-item-content>
                            
                        </v-list-item-content>
                        <v-list-item-avatar tile class="ma-3" size="125"><v-img :src="criticisms.image"></v-img></v-list-item-avatar>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
</template>

<script>

export default {
    name:'criticisms',
    props : ['detail'],
    data () { 
      return{
        tabs: null,
        details: this.detail,
          //promises: [{title: 'Total Promises', promise:'20'}, {title: 'Promises Followed', promise: '0'}]
    }},
}

</script>
