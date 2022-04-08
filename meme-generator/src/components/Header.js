import logo from "../img/logo.png"

export default function Header() {
    return (
        <header className="h-[65px] px-[37px] bg-linera-purple text-white flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="logo"></img>
                <p className="text-[20px]">Meme Generator</p>
            </div>
            <p className="text-[12px]">React Course - Project 3</p>
        </header>
    )
}