import './MainContent.css';

export default function MainContent(props) {       // Function that returns the application Main Content
    return (

        /*

        The main tag is in charge of storing
        the box with the product and the buttons

        */
        <main>
            <div className='mainContent-box'>
                <img src={props.icon} />
                <p className='mainContent-icon-description'>{props.name}</p>
            </div>
            <div className='mainContent-buttons'>
                <button className='button-1'>-</button>
                <p className='number'>0</p>
                <button className='button-2'>+</button>
            </div>
        </main>
    )
}