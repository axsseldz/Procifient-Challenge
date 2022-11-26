import './Header.css';

export default function Header() {                  //Function that returns the application Header 
    return (

        /* Header container where we store the Nav container.
           Inside the container Nav we're storing the content (Icon and text)
        */
        <header className='header-container'>
            <nav className='header-nav'>
                <img
                    className='header-nav-icon'
                    src='Icons/cil_house.png'
                />
                <p className='first-text'>How We Work</p>
                <p>Services</p>
                <p>Free Quote</p>
                <p>Contact</p>
            </nav>
        </header>
    )
}