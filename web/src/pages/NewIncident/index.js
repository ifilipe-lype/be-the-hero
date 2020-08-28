import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";

import "./style.css";

export default function NewIncident(){
    const ongID = localStorage.getItem("ong_id");
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    async function handleCreateIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        }
        try {
            const response = await api.post("incidents", data, {
                headers: {
                    Authorization: ongID
                }
            });
            history.push("/profile");
        } catch (e) {
            alert("Não foi possivél criar novo caso! tente de novo.");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleCreateIncident}>
                    <input type="text"
                        placeholder="Titúlo do caso"
                        value = {title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value = {description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                    <input type="text"
                        placeholder="Valor em reais"
                        value = {value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit" className="button">cadastrar</button>
                </form>
            </div>
        </div>
    )
}
