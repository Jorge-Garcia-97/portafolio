import React from 'react';
import '../../css/LoginCSS.css';

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.replace('/');
    }

    return (
        <div className="fondo animate__animated animate__fadeIn">
            <div className="text-center">
                <p className="text-white fixed-top mt-3 h5 animate__animated  animate__zoomIn">Todo lo que necesitas en un solo lugar</p>
                <div>
                    <img className="img animate__animated  animate__slideInDown" src={`../assets/images/asus-rog.png`} alt="rog" />
                </div>
                <h1 className="display-2 text-white animate__animated  animate__slideInDown"><strong>FGT IMPORTADORA</strong></h1>
                <button className="btn btn-outline-light btn-lg mt-2 animate__animated  animate__zoomIn" onClick={handleLogin}>
                    Ingresar
            </button>
            </div>
        </div>
    )
}
