import React from 'react'
import {FiLogIn, FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './styles.css'
import logoImg from '../../assets/logo.svg'


export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo Be the hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link className='black-link' to="/profile">
                        <FiLogIn size="16" color='#e02041' />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input type="text" placeholder='Titulo do caso' />
                    <textarea placeholder='Descriçã'/>
                    <input type="text" placeholder='Valor em reais' />

                    <button className='button' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}