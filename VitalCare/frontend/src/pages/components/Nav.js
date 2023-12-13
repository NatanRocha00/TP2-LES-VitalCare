import { Link } from "react-router-dom";

function Nav({ isLogged }) {
    return (
        <nav className={`flex flex-row justify-between items-center w-full h-16 bg-gray-800 text-white shadow-lg px-6`}>
            <div className="flex items-center">
                <Link to="/home" className="text-lg font-bold">
                   
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                {isLogged && (
                    <>
                        <Link to="admin/novo-funcionario" className="nav-link">Cadastrar funcionário</Link>
                        <Link to="admin/novo-paciente" className="nav-link">Cadastrar paciente</Link>
                        <Link to="admin/lista/funcionarios" className="nav-link">Funcionários</Link>
                        <Link to="admin/lista/pacientes" className="nav-link">Pacientes</Link>
                        <Link to="admin/lista/enderecos" className="nav-link">Endereços</Link>
                        <Link to="admin/lista/consultas" className="nav-link">Consultas</Link>
                        <Link to="/home" onClick={() => handleLogout} className="nav-link">Logout</Link>
                    </>
                )}
                {!isLogged && (
                    <>
					    <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/galeria" className="nav-link">Galeria</Link>
                        <Link to="/novo-endereco" className="nav-link">Cadastrar Endereço</Link>
                        <Link to="/agendamento" className="nav-link">Agendamento</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Nav;
