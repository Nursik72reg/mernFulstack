import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";


export const AuthPage = () =>{
    const auth = useContext(AuthContext);
    const {request,loading,error,clearError} = useHttp();
    const message = useMessage();

    const [form,setForm] = useState({
        email:"",
        password:""
    });

    const changeHandler = event =>{
        setForm({...form,[event.target.name]:event.target.value})
    };

    useEffect(()=>{
        message(error);
        clearError(false)

    },[error,message,clearError]);



    const registerHandler = async () =>{
        try {
           const data = await request("api/auth/register","POST",{...form});
            message(data.message)
        }catch (e) {
        }
    };
    const loginsHandler = async () =>{
        try {
            const data = await request("api/auth/login","POST",{...form});
            auth.login(data.token, data.userId)
        }catch (e) {
        }
    };

    return(
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>FullStack</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введите Email"
                                       id="email"
                                       type="text"
                                       name="email"
                                       onChange={changeHandler} />
                                    <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field ">
                                <input placeholder="Введите пароль"
                                       id="password"
                                       type="password"
                                       name="password"
                                       onChange={changeHandler} />
                                    <label htmlFor="first_name">First Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button disabled={loading} onClick={loginsHandler} className="btn yellow darken-4" style={{marginRight:"20px"}}>Войти</button>
                        <button disabled={loading} onClick={registerHandler} className="btn grey lighten-1 black-text">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
};