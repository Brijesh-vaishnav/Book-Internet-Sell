import { CreateUserModel, LoginModel } from "../models/AuthModel";
import UserModel from "../models/UserModel";
import request from "./request";
// import axios from "axios";

class AuthService {
    ENDPOINT = 'api/public';

    public async login(data: LoginModel): Promise<UserModel> {
        const url = `${this.ENDPOINT}/login`;
        return request.post(url, data).then((res) => {
            console.log("authservice ts", res.data);
            return res.data as UserModel;
            
        })
        // .catch((error)=>{            
        //    return false;

        // });
    }

    public async create(data: CreateUserModel): Promise<any> {
        const url = `${this.ENDPOINT}/register`;
        return request.post<CreateUserModel>(url, data )
        .then((res) => {
            
            return res.data;
        })
        .catch((error)=>{
            
            return (alert("Invalid format"))

        });
       
    }
}
export default new AuthService();
