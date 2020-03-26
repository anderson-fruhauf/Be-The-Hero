import React from 'react'
import logoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'
import './styles.css'

export default function Profile(){
    const ongName = localStorage.getItem('ongName')
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo Be the hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size='18' color='#e02041'/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size='20' color='#0808b3'/>
                    </button>
                </li>

                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size='20' color='#0808b3'/>
                    </button>
                </li>

                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size='20' color='#0808b3'/>
                    </button>
                </li>

                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size='20' color='#0808b3'/>
                    </button>
                </li>
            </ul>
        </div>
    )
}