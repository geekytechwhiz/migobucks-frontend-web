import Http from "../config/api";

export const GetAllProducts=(BrandId:string)=>{
    return Http.get(`/inventory/${BrandId}`);
}
