import  axios from 'axios'

const URL='http://120.78.184.120:9000'
export function HttpPost(url,data,token=''){
    var result=axios({
        method:"POST",
        headers:{
            'Content-type':'application/json;charset=UTF-8',
            'X-UserToken': token
        },
        url:URL+url,
        data:data
    })
    return result
}