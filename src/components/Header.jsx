import logo from "../images/HAYOOR_1.jpg"
function Header() {
    return (
        <div className="h-16 bg-black sticky top-0 z-50">
            <div>
                <img className="h-20 w-24 object-contain" src={logo} alt="" />
            </div>
        </div>
    )
}

export default Header
