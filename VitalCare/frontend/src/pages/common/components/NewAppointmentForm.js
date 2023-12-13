import React from "react";
import { useNavigate } from "react-router-dom";

function NewAppointmentForm() {
    const inputBoxStyle =
        "px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500";
    const selectBoxStyle =
        "px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none";
    const buttonStyle =
        "uppercase mt-4 text-sm font-bold py-2 px-6 bg-gray-800 text-white hover:bg-gray-700 rounded-md";

    const [specialties, setSpecialties] = React.useState([]);
    const [doctors, setDoctors] = React.useState([]);
    const [selectedDoctorCode, setSelectedDoctorCode] = React.useState("");
    const [openSlots, setOpenSlots] = React.useState([]);

    const navigate = useNavigate();

    async function getSpecialties() {
        const res = await fetch("http://localhost:1999/api/medico?spec=agendar");
        const data = await res.json();
        setSpecialties(data);
    }

    async function getDoctors(e) {
        const res = await fetch(
            `http://localhost:1999/api/medico?spec=agendar&especialidade=${e.target.value}`
        );
        const data = await res.json();
        setDoctors(data);
    }

    async function getOpenSlots(e) {
        const date = e.target.value;
        const doc = selectedDoctorCode || "";
        const res = await fetch(
            `http://localhost:1999/api/agenda?spec=agendar&date=${date}&doc=${doc}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const data = await res.json();
        setOpenSlots(
            ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"].filter(
                (horario) => !data.includes(horario)
            )
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            codigo_medico: selectedDoctorCode,
            data: form.data.value,
            horario: form.horario.value,
            nome: form.nome.value,
            email: form.email.value,
            telefone: form.telefone.value
        };

        try {
            const res = await fetch("http://localhost:1999/api/agenda", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            alert("Consulta cadastrada com sucesso!");
        } catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        getSpecialties();
    }, []);

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
                    Marcar Consulta
                </label>
                <div className="flex flex-col">
                    <label>Especialidade</label>
                    <select
                        className={selectBoxStyle}
                        name="especialidade"
                        onChange={(e) => {
                            e.preventDefault();
                            getDoctors(e);
                        }}
                    >
                        <option hidden disabled selected>
                            Especialidade
                        </option>
                        {specialties.map((specialty) => (
                            <option value={specialty}>{specialty}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Profissional</label>
                    <select
                        className={selectBoxStyle}
                        name="medico_nome"
                        onChange={(e) => {
                            e.preventDefault();
                            setSelectedDoctorCode(e.target.value);
                        }}
                    >
                        <option hidden disabled selected>
                            Profissional
                        </option>
                        {doctors.map((doctor) => (
                            <option value={doctor.codigo}>{doctor.nome}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Data</label>
                    <input
                        className={inputBoxStyle}
                        type="date"
                        name="data"
                        onChange={(e) => {
                            e.preventDefault();
                            getOpenSlots(e);
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <label>Horário</label>
                    <select className={selectBoxStyle} name="horario">
                        <option hidden disabled selected>
                            Horário
                        </option>
                        {openSlots.map((slot) => (
                            <option value={slot}>{slot + ":00"}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Nome</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="nome"
                        placeholder="Nome"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Email</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Telefone</label>
                    <input
                        className={inputBoxStyle}
                        type="text"
                        name="telefone"
                        placeholder="Telefone"
                    />
                </div>
                <button className={buttonStyle} type="submit">
                    Cadastrar
                </button>
            </div>
        </form>
    );
}

export default NewAppointmentForm;
