import React, { useState } from 'react'
import './styles.css'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'

import api from '../../services/api'

export default function Logon() {
    const history = useHistory()
    const [id, setId] = useState('')

    async function handleLogon(e) {
        e.preventDefault()
        try {
            const response = await api.post('session', {id})
            
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        } catch (error) {
            alert('Erro ao realizar login')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input
                        type="text"
                        placeholder="Seu Id"
                        value={id}
                        onChange={e=>setId(e.target.value)}
                    />
                    <button type="submit" className='button'>Entrar</button>
                    <Link className='black-link' to="/register">
                        <FiLogIn size="16" color='#e02041' />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="heroes" />
        </div>
    )
}