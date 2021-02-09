import axios from 'axios'
import {message} from "antd";

export default function ajax(url,data={}, type="Get"){
    return new Promise((resolve, reject) => {
        let promise
        if(type=='Get'){
            promise= axios.get(url,{
                params:data
            })
        }
        else{
           promise=axios.post(url,data)
        }
        promise.then(response=>{
            resolve(response.data)

        }).catch(e=>{
            message.error("error",e.message);
        })

    })


}