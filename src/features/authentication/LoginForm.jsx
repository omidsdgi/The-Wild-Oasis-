import { useState } from "react";
import Button from "../../ui/Button.jsx";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import {useLogin} from "./useLogin.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

function LoginForm() {
    const [email, setEmail] = useState("omid@gmail.com");
    const [password, setPassword] = useState("123456");
    const{login,isLoading}=useLogin()

    function handleSubmit(e) {
        e.preventDefault();
        if(!email || !password) return
        login({email,password},
            {onSettled:()=>{
                    setEmail("")
                    setPassword("")
        }})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address">
                <Input
                    type="email"
                    id="email"
                    // This makes this form better for password managers
                    autoComplete="username"
                    value={email}
                    disabled={isLoading}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormRowVertical>
            <FormRowVertical label="Password">
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    disabled={isLoading}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button size="large" disabled={isLoading}>{!isLoading ? "Log in" : <SpinnerMini/>}</Button>
            </FormRowVertical>
        </Form>
    );
}

export default LoginForm;
