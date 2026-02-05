const Header = ()=>{

    return (
        <div className="header">
    <img className="brandLogo" src="images/a.png" alt=""  />
    <div className="Nav">
        <div className="navlink">
            <label htmlFor="" className="navlink-text">Menu</label>
        </div>

        <div className="navlink">
            <label htmlFor="" className="navlink-text">Location</label>
        </div>

        <div className="navlink">
            <label htmlFor="" className="navlink-text">About</label>
        </div>

        <div className="navlink">
            <label htmlFor="" className="navlink-text">Contact</label>
        </div>
    </div>

    <div className="buttons">
        <label htmlFor="" className="Login">Login</label>
    </div>
</div>)
}

export default Header