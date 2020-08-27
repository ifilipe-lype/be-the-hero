import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

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

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>caso test</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição test</p>
                    <strong>VALOR:</strong>
                    <p>120</p>
                    
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso test</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição test</p>
                    <strong>VALOR:</strong>
                    <p>120</p>
                    
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso test</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição test</p>
                    <strong>VALOR:</strong>
                    <p>120</p>
                    
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso test</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição test</p>
                    <strong>VALOR:</strong>
                    <p>120</p>
                    
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}
