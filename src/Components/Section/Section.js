import './Section.css';

export default function Section() {                         //Function that returns the Section application Section.
    return (

        /*

        The section container is where we store two div's 
        that are responsible for storing the two texts.
        
        */
        <section className='section-container'>
            <div className='first-text-section-container'>
                <p className='first-text-section'>
                    What items to store?
                </p>
            </div>
            <div className='second-text-section-container'>
                <p className='second-text-section'>
                    Select which items you wish to store before moving to
                    your new home. We’ll keep ’em safe!
                </p>
            </div>
        </section>
    )
}