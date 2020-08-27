import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import logoImg from "../../assets/logo.svg"

import "./style.css";

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vindo, ONU</span>

                <Link to="/incidents/new" className="button">
                    Cadastrar novo incidente
                </Link>
                <button>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
        </div>
    )
}

