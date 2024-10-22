import Profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <header className="flex items-center justify-between border-b-2 py-3">
            <h2 className="text-3xl md:text-4xl font-bold">Knowledge Cafe</h2>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;