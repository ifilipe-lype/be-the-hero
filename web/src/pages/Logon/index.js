import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg"

export default function Logon(){
    const history = useHistory();

    const [ongID, setOngID] = useState("");

    async function handleLogon(e){
        e.preventDefault();

        try {
            const response = await api.post("sessions", { id: ongID });

            localStorage.setItem("ong_id", ongID);
            localStorage.setItem("ong_name", response.data.name);

            history.push("/profile");
        } catch (e) {
            alert("não possivél fazer logon, verifica sua ID")
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit = { handleLogon }>
                    <h1>Faça o seu logon</h1>
                    <input type="text"
                        placeholder="Seu ID"
                        value = {ongID}
                        onChange={ (e) => setOngID(e.target.value)}
                    />
                    <button className="button" type="submit">
                        Entrar
                    </button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    )
}
