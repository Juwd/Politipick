<template>
    <div>
        <p>i am Deeds </p>
    <!-- <div v-for="citation in details.citation" :key="citation.index">
        <v-card v-for="detail in details.school" :key="detail.index">
            <v-title>{{citation.cited}}</v-title>
            <v-subtitle>{{detail}}</v-subtitle>
        </v-card>
        
        
        <p>{{citation}} </p>
    </div> -->
    </div>
    
</template>

<script>
export default {
    name:'deeds',
    data () {
        return {
            details: {school:[{description:'Unibersidad ng somewhere' ,level:'PHD in economics'}, {description:'That university' ,level:'Master in economics'}], 
                    certificate:[{description: 'magaling lang', place: 'DSWD'}, {description: 'taga hulma ng lupa', place: 'DPWH'}], plans:['wala','wala talaga', 'mag budots'], highlights:[{description:'nagpatayo ng waiting shed', date:'2020'}], belief:'Authoritarianism',
                    affiliation:[{description: 'kaliwa', date: '2016'}, {description: 'kanan', date: '2020'}], job:'Taga-kurakot', relatives:[{person:'John doe',position:'VP of finance'}], citation:[{url:"a.com", cited:"school"}, {url:"b.com", cited:"school"}, {url:"c.com", cited:"certificate"},{url:"d.com", cited:"plans"},{url:"e.com", cited:"highlights"}, 
                    {url:"f.com", cited:"Affiliation"},{url:"c.com", cited:"belief"}, {url:"c.com", cited:"job"}]}
        }
    }
}
</script>