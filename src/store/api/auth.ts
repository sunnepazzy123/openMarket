import { AppDispatch } from "..";
import { loginFailure, loginStart, 
    loginSuccess, registerStart,
     registerSuccess, registerFailure } from "../userReducer";
import { publicRequest, } from "./setups";


export const loginApi = async (dispatch: AppDispatch, user: any) => {
    dispatch(loginStart());
    try {
    const res = await (await publicRequest.post("/auth/local", user)).data;
    dispatch(loginSuccess(res.user));
    localStorage.setItem('openMarket', res.jwt);
    } catch (err) {
    dispatch(loginFailure());
    }
};
    

export const registerApi = async (dispatch: any, user: any) => {
    dispatch(registerStart());
    try {
        const res = await (await publicRequest.post("/auth/local/register", user)).data;
        dispatch(registerSuccess(res.user));
        localStorage.setItem('openMarket', res.jwt)
    } catch (err) {
        dispatch(registerFailure());
    }
    };

    