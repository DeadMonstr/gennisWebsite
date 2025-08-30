import img from "assets/logo/original logo.png"

import "./justItem.sass"
import Form from "components/platform/platformUI/form/Form";
import Input from "components/platform/platformUI/input";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setMessage} from "slices/messageSlice";
import Message from "components/platform/platformMessage";


export const JustItem = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
        setUsername(null)
        setPassword(null)

        dispatch(setMessage({
            msg: "Succesfully",
            type: "success",
            active: true
        }))

    }
    return (
        <div className={"main"}>
            <Message/>
            <img src={img} alt=""/>

            <div className={"main__item"}>
                <h1>Request for delete account</h1>
                <h3>You can delete your account from here. All the submissions are reviewed within 3 days. Send your
                    request!</h3>
            </div>
            <Form onSubmit={onSubmit}>
                <Input clazz={"main__input"} onChange={setUsername} value={username} placeholder={"Username"}/>
                <Input clazz={"main__input"} onChange={setPassword}  value={password} placeholder={"Password"}/>
                {/*<Input/>*/}

            </Form>


        </div>
    );
};

