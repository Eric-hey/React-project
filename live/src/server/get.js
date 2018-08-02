import  axios from 'axios'

const URL='http://120.78.184.120:9000'
export function HttpGet(url,token=''){
       var result=axios({
            method:"GET",
            headers:{
                'Content-type':'application/json;charset=UTF-8',
                'X-UserToken': token
            },
            url:URL+url,
            withCredentials:true
        })
    return result
}
