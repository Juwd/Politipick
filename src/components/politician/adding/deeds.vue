<template>
<div>
    <h1>Deeds</h1>
        <v-row>
            <v-col lg="6">
                <v-btn block>Add manually</v-btn>
            </v-col>
            <v-col lg="6">
                <v-btn block>Add automatically</v-btn>
            </v-col>
        </v-row>

        <v-row v-for="deeds in details.deeds" :key="deeds._id" wrap>
            <v-col lg=12>
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
</div>
</template>

<script>

export default {
    name:'deeds',
    props : ['politicians'],
    data () { 
      return{
        tabs: null,
        details: this.politicians,
        autoArray:[],
        manoArray:[{publisher:'',title:'',description:''}],
          //promises: [{title: 'Total Promises', promise:'20'}, {title: 'Promises Followed', promise: '0'}]
    }},
}

</script>
