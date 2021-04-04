const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/index.html">
                        <img className="rounded-circle img-fluid"  src="D:\ECE\ING 4\PPE\frontend\src\component\logo.png" alt="" />TRIP-Covid
                    </a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/equipe.html">Notre equipe</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/covid.html">info covid</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/prédiction.html">prédiction</a></li>
                        </ul>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/signin.html">Sign Up</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/login.html">Log In</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
