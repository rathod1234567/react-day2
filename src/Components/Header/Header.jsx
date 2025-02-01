

import "./Header.css"
const Header =()=>{

    return(
        <>
        <h2>Hello! WelCome To My World!!</h2>
        <div className="Container">
            <div className="img2">
                <img src="https://thumbs.dreamstime.com/b/books-logo-illustrated-isolated-design-53710670.jpg" alt="books" width={100}/>
            </div>
            <nav className="list">
                
                 <li><a href="#">Home</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Service</a></li>
                 <li><a href="#">Login</a></li>
                
            </nav>
        </div>

        </>
    )
}

export default Header