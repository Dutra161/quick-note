import React, { useState } from "react";
import {Form,Button} from "react-bootstrap";
import "./Login.css";
import {useHistory} from "react-router-dom";

function Login(){
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    function login(){
        if(email=== "duarte@hotmail.com" && password==="casinha"){
            alert("Bem vindo\n" +email);
            history.push("Home")
        }else{
            alert("Falha no login\n" +email);
        }
        
    }
    return(
        <div className="base">
            <div className="container">
                <div>
                    <img className="image" src="/imagens/Quick_note.png" alt="Quick"/>
                    <Form className="inputs">
                        <Form.Group controlId="email">
                            <Form.Control type="email" placeholder="Email" onChange={(e) =>setEmail(e.target.value) } />
                        </Form.Group>
                        <Form.Group controlId="senha">
                            <Form.Control type="password" placeholder="Senha" onChange={(e) =>setPassword(e.target.value) } />
                        </Form.Group>
                        <Button variant="primary" onClick={login}>Login</Button>{' '}
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Login;