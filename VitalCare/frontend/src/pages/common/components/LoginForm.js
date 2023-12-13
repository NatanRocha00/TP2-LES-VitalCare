import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ handleLogin, isLogged }) {
    const inputBoxStyle =
        "px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500";
    const buttonStyle =
        "uppercase mt-4 text-sm font-bold py-2 px-6 bg-gray-800 text-white hover:bg-gray-700 rounded-md";

    const navigate = useNavigate();

    React.useEffect(() => {
        if (isLogged) navigate("/admin/lista/consultas");
    }, [isLogged]);

    return (
        <form
            className="w-full h-full text-cs flex flex-col font-semibold"
            onSubmit={(e) => {
                e.preventDefault();
                handleLogin(e);
            }}
        >
            <div className="flex flex-col h-full w-full justify-center items-center">
                <label className="uppercase text-center mb-4 font-bold text-2xl">Login</label>
                <div className="flex flex-col">
                    <label>Email</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="email"
                        placeholder="Seu email"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Senha</label>
                    <input
                        className={inputBoxStyle}
                        type="password"
                        name="senha_hash"
                        placeholder="Sua senha"
                    />
                </div>
                <button className={buttonStyle} type="submit">
                    Entrar
                </button>
            </div>
        </form>
    );
}

export default LoginForm;
