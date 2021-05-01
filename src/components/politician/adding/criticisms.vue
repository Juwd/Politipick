<template>
<div>
    <h1>Criticisms</h1>
        <!-- <div v-for="element in tempArray" :key="element.index">
        <v-row>
            <v-col> <p>{{element}} {{element.index}}</p></v-col>
        </v-row>
        </div> -->
        <v-row>
            <v-col>
            <div v-if="typeOfInput=='auto'">
                <v-text-field placeholder="Add url of news site" v-model="autoVar" clearable required>
                <template v-slot:append>
                    <v-fade-transition leave-absolute>
                        <div v-if="autoVar">
                        <v-progress-circular v-if="loadingText" size="24" color="info" indeterminate></v-progress-circular>
                        <v-icon @click="callAutoBackend(autoVar);loadingText=true" v-else>mdi-send</v-icon>
                        </div>
                    </v-fade-transition>
                </template>
                </v-text-field>
            </div>
            <!-- manual addition -->
            <div v-if="typeOfInput=='mano'"> 
                <v-row>
                    <v-col lg="12">
                        <v-card outlined>
                            <v-list-item >
                                <v-form ref="form" v-model="valid" lazy-validation>
                                <v-list-item-content> 
                                    <div class="overline mb-4">
                                        Publisher: <v-text-field :rules="Rules" required v-model="manoVar.publisher" placeholder="abs-cbn"></v-text-field>
                                    </div>   
                                    <v-list-item-title class="headline mb-1">
                                        Title: <v-text-field :rules="Rules" required v-model="manoVar.title" placeholder="Philippine politics under Duterte: A Mid term assessment"></v-text-field>
                                    </v-list-item-title>
                                    
                                    <v-list-item-content>
                                        Desciription: <v-text-field :rules="Rules" required v-model="manoVar.description" placeholder="More than two years into Rodrigo Duterte’s presidency, the record is mixed with change, continuity, and regression. This should prompt more robust U.S. support for democracy in the Philippines"></v-text-field>
                                        
                                    </v-list-item-content>
                                    <v-list-item-content>
                                        Source: <v-text-field :rules="Rules" required v-model="manoVar.url" placeholder="https://newsinfo.inquirer.net/1417983/ph-active-covid-19-infections-climb-back-to-over-157000-with-11378-new-cases"></v-text-field>    
                                    </v-list-item-content>
                                    <v-list-item-content>
                                        <v-row>
                                            <v-col lg="4">
                                            <h4>Choose whether to upload the politician image or to paste the image url</h4>
                                            </v-col>
                                            <v-col  lg="4">
                                            <v-btn @click="fileType='Mano'" depressed>
                                                Upload file
                                            </v-btn>
                                            <v-btn @click="fileType='Auto'" depressed>
                                                Paste image url
                                            </v-btn>
                                            </v-col>
                                            <v-col v-if="fileType=='Mano'" lg="4">
                                                <v-file-input v-model="manoVar.image" truncate-length="15" accept="image/png, image/jpeg, image/bmp"
                                                prepend-icon="mdi-camera" placeholder="Upload Image of news for thumbnail"></v-file-input>
                                            </v-col>
                                            <v-col v-if="fileType=='Auto'" lg="4">
                                            <v-text-field v-model="manoVar.image" placeholder="https://lp-cms-production.imgix.net/features/2019/08/shutterstock_1127874026-32c12e090f4f.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                    <!-- <v-file-input label="Insert image here" :rules="rules" placeholder="Select your preferred photo" accept="image/png, image/jpeg, image/bmp" v-model="criticisms.image" filled prepend-icon="mdi-camera"></v-file-input> 
                                    for adding files directly-->
                                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="addMano();">Save</v-btn>
                                </v-list-item-content>
                                </v-form>
                            </v-list-item>
                        </v-card>
                    </v-col>    
                </v-row>    
            </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="6">
                <v-btn block @click="typeOfInput='mano';">Add manually</v-btn>
            </v-col>
            <v-col lg="6">
                <v-btn block @click="typeOfInput='auto';">Add automatically</v-btn>
            </v-col>
        </v-row>
        <v-row v-for="(criticisms,i) in tempArray" :key="criticisms._id" wrap>
            <v-col lg=12>
                <v-card outlined>
                    <v-list-item three-line>
                        <div v-if="editingText">
                        <v-list-item-content> 
                            <div class="overline mb-4">
                                Publisher: <v-text-field v-model="criticisms.publisher"></v-text-field>
                            </div>   
                            <v-list-item-title class="headline mb-1">
                                Title: <v-text-field v-model="criticisms.title"></v-text-field>
                            </v-list-item-title>
                            
                            <v-list-item-content>
                                Desciription: <v-text-field v-model="criticisms.description"></v-text-field>
                            </v-list-item-content>
                            <v-list-item-content>
                                Image source: <v-text-field v-model="criticisms.image"></v-text-field>
                                <small>note: Can only accept src at the mean time. The database can't save images. Please right click "Copy image location" in the said image</small>
                            </v-list-item-content>
                            <!-- <v-file-input label="Insert image here" :rules="rules" placeholder="Select your preferred photo" accept="image/png, image/jpeg, image/bmp" v-model="criticisms.image" filled prepend-icon="mdi-camera"></v-file-input> 
                            for adding files directly-->
                        </v-list-item-content>
                        </div>
                        <div v-else>
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
                        </div>
                    </v-list-item>
                     <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn icon @click="editingText = !editingText">
                            <v-icon v-if="editingText">mdi-check</v-icon>
                            <v-icon v-else>mdi-pencil-outline</v-icon>

                        </v-btn>

                        <v-btn icon @click="deleteThis(i)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
</div>
</template>

<script>
import politicianService from '../../../service/politicianService'
export default {
    name:'criticisms',
    props : ['politicians'],
    data () { 
      return{
        tabs: null,
        details: this.politicians,
        tempArray:[],
        criticismsData:'',
        autoVar:'',
        typeOfInput:'',
        loadingText:false,
        editingText:false,
        manoVar:{publisher:'',title:'',description:'',url:'',image:[]},
        fileType:'',
        tempVar:[],
        valid:true,
        Rules: [v => !!v || 'This is required',],
        // rules: [value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        // ], for adding files directly
          //promises: [{title: 'Total Promises', promise:'20'}, {title: 'Promises Followed', promise: '0'}]
    }},
    methods: {
        deleteThis(i){
            this.tempArray.splice(i,1)
        },
        async addMano(){
            console.log(this.manoVar.image)
            //this.$refs.form.validate()
            if(this.$refs.form.validate())
            {
                console.log("validated")
                this.tempVar = await politicianService.uploadThumbnail(this.manoVar.image);
                this.manoVar.image= this.tempVar.secure_url
                this.tempArray.push(this.manoVar);
                this.typeOfInput=''
                this.manoVar={publisher:'',title:'',description:'',url:'',image:[]}
            }
        },
        async callAutoBackend(autoVar){
            try {
                console.log(autoVar)
                this.criticismsData = await politicianService.getAutoVar(autoVar);
                if(autoVar=='' || null || !this.criticismsData)
                {
                    this.autoVar="invalid url";
                    this.loadingText = false;
                    console.log("here")
                } else
                {
                   console.log(this.criticismsData)
                    this.tempArray.push(this.criticismsData);
                    this.autoVar='';
                    this.loadingText = false;
                }
            } catch (error) {
                console.log("this is error")
                console.log(this.criticismsData)
                console.log(error)
            }
        }
        
    }
}

</script>
