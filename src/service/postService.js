import axios from 'axios'
//post service is the middleware between the back end and the front end,
//therefore make seperate services for each data that is needed to return
//One for the users, one for the posts
const url = 'http://localhost:5000/api/posts/';

class postService {
    static getPosts(){
        //promise is short hand for calling a function
        //then making sure na may reply siya kung success
        //or fail
        return new Promise((resolve,reject)=>{
            try {
                //in order to get the url from the database
                axios.get(url).then((res) => {
                const data = res.data;
                //if calling the promise is sucess it would gather all the posts
                //and create a new array using the map() method and putting it on data
                resolve(
                    data.map(post => ({
                        ...post,
                        //di ko magets to though, yung createdAt
                        createdAt: new Date(post.createdAt)
                    })
                ))
                });
                
            } catch (err) {
                reject(err);
            }
        
        });
    }

// create Post
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
export default postService;