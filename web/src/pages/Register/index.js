import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg"

import "./style.css";

export default function Register(){
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUF] = useState("");

    async function handleRegistration(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post("ongs", data);
            alert(`Seu ID: ${response.data.id}`);
            history.push("/");
        } catch(e){
            alert("Não foi possivél cadastrar ong")
        }

    }

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
                <form onSubmit = { handleRegistration }>
                    <input type="text"
                        placeholder="Nome da ONG"
                        value = { name }
                        onChange = { (e) => setName(e.target.value)}
                    />
                    <input type="email"
                        placeholder="Email"
                        value={email}
                        onChange = { (e) => setEmail(e.target.value)}
                    />
                    <input type="text"
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange = { (e) => setWhatsapp(e.target.value)}
                    />
                    <div className="form-group">
                        <input type="text"
                            placeholder="Cidade"
                            value = {city}
                            onChange = { (e) => setCity(e.target.value)}
                        />
                        <input type="text"
                            placeholder="UF" style={{ width: 80}}
                            value = { uf }
                            onChange = { (e) => setUF(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button">cadastrar</button>
                </form>
            </div>
        </div>
    )
}
