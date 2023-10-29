import "./Login.css"
import logo from "../../assets/LogoRushHour2.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const Login = () => {


    const [res, setRes] = useState("")
    const notify = () => toast(res);


    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handeSubmit = async () => {

        axios.post("http://localhost:1301/api/User/Login", data).then((res) => {
            const response = res;
            console.log(response);
           toast.success(response);
           navigate("/home");
        }).catch((err) => {
            toast.error(err.response.data.message);
        })


    }

    const [data, setData] = useState({})

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
    }

    const navigate = useNavigate();

    return (
        <div className="loginPage">

            <div>
                <ToastContainer />
            </div>
            <div className="formContainer">

                <div className="formTitle">Rush Hour</div>
                <img src={logo} className="logo" />


                <form className="formular" onSubmit={submit}>
                    <div className="formWrapper">
                        <label for="email" className="formLabel">
                            Email:
                        </label>
                        <input type="text" name="email" className="formInput" onChange={updateData} />
                    </div>

                    <div className="formWrapper">
                        <label for="password" className="formLabel">
                            Parola:
                        </label>
                        <input type="password" name="password" className="formInput" onChange={updateData} />
                    </div>


                    <input className="btnLogin" type="submit" value="Submit" onClick={handeSubmit} />
                </form>
            </div>

        </div>
    )
}

export default Login;