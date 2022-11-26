import './Header.css';

export default function Header() {                  //Function that returns the application Header 
    return (

        /* 

        The header container where we store the Nav container.
        Inside the container Nav we're storing the content (Icon and text).
        
        */
        <header className='header-container'>
            <nav className='header-nav'>
                <img
                    className='header-nav-icon'
                    src='Icons/cil_house.png'
                />
                <p className='first-text-nav'>How We Work</p>
                <p className='second-text-nav'>Services</p>
                <p className='third-text-nav'>Free Quote</p>
                <p className='fourth-text-nav'>Contact</p>
            </nav>
        </header>
    )
}