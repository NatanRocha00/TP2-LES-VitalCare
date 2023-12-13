import Logo from "../../assets/logo.svg";

function Header() {
	return (
		<header className="flex flex-row w-full h-full p-2 bg-[#A9A9A9]">
			<img src={Logo} alt='logo' />
		</header>
	);
}

export default Header;
