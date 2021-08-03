 
import Http from "../config/api";

export const GetAllDomains=()=>{
    return Http.get("/brand/domains");
}

export const GetCategory=(donainId:string)=>{
    return Http.get(`/brand/domains/${donainId}`);
}

export const PostBrand=(requestData:string)=>{
    return Http.post('/brand',requestData);
}