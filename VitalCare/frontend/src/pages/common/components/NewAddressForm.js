import React from "react";
import { useNavigate } from "react-router-dom";

function NewAddressForm() {
    const inputBoxStyle =
        "px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500";
    const buttonStyle =
        "uppercase mt-4 text-sm font-bold py-2 px-6 bg-gray-800 text-white hover:bg-gray-700 rounded-md";

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            cep: form.cep.value || '',
            logradouro: form.logradouro ? form.logradouro.value || '' : '',
            bairro: form.bairro.value || '',
            cidade: form.cidade.value || '',
            estado: form.estado.value || ''
        };

        try {
            const res = await fetch("http://localhost:1999/api/endereco", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            alert("Endereço cadastrado com sucesso!");
        } catch (err) {
            console.log(err);
        }
    }

    async function getAddress(e) {
        const cep = e.target.value || "";
        const res = await fetch(
            "http://localhost:1999/api/endereco?spec=autopr&cep=" + cep,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const result = await res.json();

        if (result && result.length > 0) {
            const { logradouro, bairro, cidade, estado } = result[0];
            const form = e.target.form;

            // Certifique-se de que as propriedades existem antes de acessá-las
            form.logradouro.value = logradouro || "";
            form.bairro.value = bairro || "";
            form.cidade.value = cidade || "";
            form.estado.value = estado || "";
        } else {
            // Se não houver resultado, limpe os campos
            const form = e.target.form;
            form.logradouro.value = "";
            form.bairro.value = "";
            form.cidade.value = "";
            form.estado.value = "";
        }
    }

    return (
        <form
            className="w-full max-h-[95%] text-cs flex flex-col font-semibold"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
            }}
        >
            <div className="flex flex-col h-full w-full justify-around items-center">
                <label className="uppercase text-center mb-4 font-bold text-2xl">
                    Novo Endereço
                </label>
                <div className="flex flex-col">
                    <label>CEP</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        onChange={(e) => {
                            e.preventDefault();
                            getAddress(e);
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <label>Logradouro</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="logradouro"
                        placeholder="Logradouro"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Bairro</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="bairro"
                        placeholder="Bairro"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Cidade</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="cidade"
                        placeholder="Cidade"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Estado</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="estado"
                        placeholder="Estado"
                    />
                </div>
                <button className={buttonStyle} type="submit">
                    Cadastrar
                </button>
            </div>
        </form>
    );
}

export default NewAddressForm;
