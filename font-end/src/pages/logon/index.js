import React from 'react'
import './styles.css'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'

export default function Logon(){

    return(
        
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu Logon</h1>
                    <input type="text" placeholder="Seu Id"/>
                    <button type="submit" className='button'>Entrar</button>
                    <Link to="/register">
                        <FiLogIn size="16" color='#e02041'/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="heroes"/>
        </div>
    )
}