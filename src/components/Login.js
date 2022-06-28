import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";
import Button from "./Button";
import { Context } from "../context";
import { Wrapper } from "./Login.styles";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        if (name === "username") {
            setUsername(value);
        }
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async () => {
        setError(false);
        try {
            const requesToken = await API.getRequestToken();
            const sessionId = await API.authenticate(requesToken, username, password);
            setUser({ sessionId: sessionId.session_id, username });
            navigate("/");
            console.log(sessionId);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <Wrapper>
            <label>Username:</label>
            <input type="text" value={username} name="username" onChange={handleInput}></input>
            <input type="password" value={password} name="password" onChange={handleInput}></input>
            <Button text="Login" callback={handleSubmit}></Button>
        </Wrapper>
    );
};

export default Login;
