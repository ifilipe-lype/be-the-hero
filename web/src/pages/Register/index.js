import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg"

import "./style.css";

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>
                        faça cadastro, entre na plataform e ajuda pessoas a encontrarem os casos da sua ONG.
                    </p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Já tenho cadastro
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Whatsapp"/>
                    <div className="form-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{ width: 80}} />
                    </div>
                    <button type="submit" className="button">cadastrar</button>
                </form>
            </div>
        </div>
    )
}
