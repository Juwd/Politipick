import axios from 'axios'
//post service is the middleware between the back end and the front end,
//therefore make seperate services for each data that is needed to return
//One for the users, one for the posts
const url = 'http://localhost:5000/api/politicians/';

class politicianService {
    static getPoliticians(){
        //promise is short hand for calling a function
        //then making sure na may reply siya kung success
        //or fail
        return new Promise((resolve,reject)=>{
            try {
                //in order to get the url from the database
                axios.get(url).then((res) => {
                let data = res.data;
                //if calling the promise is sucess it would gather all the posts
                //and create a new array using the map() method and putting it on data
                // resolve(
                //     data.map(post => ({
                //         ...post,
                //         //di ko magets to though, yung createdAt
                //         createdAt: new Date(post.createdAt)
                //     })
                // ))
                resolve(data);
                console.log(data);     
            });
                
            } catch (err) {
                reject(err);
            }
        
        });
    }

    static getPoliticiansId(id){
        //promise is short hand for calling a function
        //then making sure na may reply siya kung success
        //or fail
        return new Promise((resolve,reject)=>{
            try {
                //in order to get the url from the database
                axios.get(`${url}${id}`).then((res) => {
                let data = res.data;
                resolve(data);
                console.log(data);   
            });
                
            } catch (err) {
                reject(err);
            }
        
        });
    }
    static getAutoVar(autoVar){
        //promise is short hand for calling a function
        //then making sure na may reply siya kung success
        //or fail
        return new Promise((resolve,reject)=>{
            try {
                //in order to get the url from the database
                console.log(autoVar)
                axios.post(`${url}deeds/`,{autoVar} ).then((res) => {
                let data = res.data;
                resolve(data);
                console.log(data);   
            });
                
            } catch (err) {
                reject(err)
            }
        
        });
    }
    static uploadDp(file){
        return new Promise((resolve,reject)=>{
            try {
                let formData = new FormData();
                formData.append("file", file);
                console.log(formData)
                axios.post(`${url}dp/`,formData ).then((res) => {
                let data = res.data;
                resolve(data);
                console.log(data);   
            });
                
            } catch (err) {
                reject(err);
            }
        
        });
    }
    static uploadThumbnail(file){
        return new Promise((resolve,reject)=>{
            try {
                let formData = new FormData();
                formData.append("file", file);
                console.log(formData)
                axios.post(`${url}newsThumbnail/`,formData ).then((res) => {
                let data = res.data;
                resolve(data);
                console.log(data);   
            });
                
            } catch (err) {
                reject(err);
            }
        
        });
    }
    static savePolitician(politician){
        console.log(politician)
       return new Promise((resolve,reject) => {
        try {
        axios.post(`${url}credentials/`,politician).then((res)=> {
            let data =res.data;
            resolve(data);
            console.log(data);
        })
        //console.log(res.data)
    } catch(err){
        reject(err);
        console.log(err);
    }
    });
}
// create Post
//post_user.js

// const axios = require('axios');

// async function makePostRequest() {

//     params = {
//         id: 6,
//         first_name: 'Fred',
//         last_name: 'Blair',
//         email: 'freddyb34@gmail.com'
//       }

//     let res = await axios.post('http://localhost:3000/users/', params);

//     console.log(res.data);
// }

// makePostRequest();

    static insertPost(text){
        //you could edit this in order to accomodate the
        //creation of news story with citations
        return axios.post(url, {
            text
        });
    }

    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }




}
export default politicianService;