import Logo from "../../../assets/logo.svg";

function Home() {
	return (
		<div className="w-full h-full flex flex-col justify-center">
			<div className="text-center">
				<img src={Logo} alt="logo" className="mx-auto h-44 w-44" />
				<h1 className="mt-[2%] font-inter text-4xl">
					Bem-vindo(a) à Vital Care!
				</h1>
				<div className="mt-[1%] mx-auto w-[75%]">
					<p className="font-montserrat text-center">
					Na Vital Care, estamos dedicados a proporcionar cuidados de saúde excepcionais e compassivos para cada 
				indivíduo que busca nossos serviços. Nossa clínica é um espaço acolhedor e inovador, onde a qualidade do 
				atendimento e o bem-estar dos nossos pacientes estão sempre em primeiro plano.
					</p>
				</div>
				<h2 className="mt-[2%] font-inter text-2xl">Nossa missão</h2>
				<div className="mt-[1%] mx-auto w-[75%]">
					<p className="font-montserrat text-center">
					Na busca pela excelência em saúde, nossa missão é oferecer tratamentos 
				abrangentes e personalizados, promovendo a prevenção, o diagnóstico precoce e a recuperação eficaz. 
				Estamos comprometidos em criar um ambiente onde a confiança entre equipe médica e pacientes floresça, 
				garantindo que cada jornada de cuidado seja única e adaptada às necessidades específicas de cada pessoa.
					</p>
				</div>
				<h3 className="mt-[2%] font-inter text-2xl">Nossos valores</h3>
				<div className="mt-[1%] mx-auto w-[75%]">
				<p className="font-montserrat text-center">
					Na Vital Care, fundamentamos nossas práticas nos mais elevados padrões éticos e profissionais. 
				Valorizamos a integridade, a empatia e o respeito, buscando sempre aprimorar nossas habilidades e 
				conhecimentos para oferecer tratamentos de última geração. Acreditamos na importância da colaboração 
				e da comunicação transparente, garantindo que nossos pacientes estejam totalmente informados e capacitados a tomar decisões informadas sobre sua saúde.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
