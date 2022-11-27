import './Footer.css';

export default function Footer() {   //Function that returns the application Footer

    /*

    Here we have the "footer-container" where store 3 main tags,
    1. footer-first-column
    2. footer-second-column
    3. footer-third-column

    In which we have different tags depending on the text/icon

     */
    return (
        <div className='footer-container'>
            <div className='footer-first-column'>
                <img
                    src='Icons/cil_house.png'
                />
                <div className='footer-first-column-text'>
                    <p>
                        It is a long established fact that a
                        reader will be distracted by the
                        readable content of a page
                        whenters.
                    </p>
                </div>
                <div className='footer-first-column-icons'>
                    <div className='footer-first-column-icon-one'>
                        <img src='Icons/Twitter.png' />
                    </div>
                    <div className='footer-first-column-icon-two'>
                        <img src='Icons/Facebook.png' />

                    </div>
                    <div className='footer-first-column-icon-three'>
                        <img src='Icons/Instagram.png' />

                    </div>
                </div>

            </div>
            <div className='footer-second-column'>
                <p className='second-column-text-one'>About Us</p>
                <p className='second-column-text'>About</p>
                <p className='second-column-text'>Privacy & Policy</p>
                <p className='second-column-text'>Terms & Conditions</p>
                <p className='second-column-text'>Faq</p>
            </div>
            <div className='footer-third-column'>
                <p className='third-column-text-one'>Navigate</p>
                <p className='third-column-text'>How We Work</p>
                <p className='third-column-text'>Services</p>
                <p className='third-column-text'>Faq</p>
                <p className='third-column-text'>Contact</p>
                <p className='third-column-text'>Free Quote</p>
            </div>
            <div className='footer-fourth-column'>
                <p className='fourth-column-text-one'>Contact Us</p>
                <p className='fourth-column-text'>Ricardo Margain 4444</p>
                <p className='fourth-column-text'>Call: +52 81 1234 5674</p>
                <p className='fourth-column-text'>Email: info@challenge.com </p>
                <div>
                    <img src='Icons/Whatsup.png' />
                </div>

            </div>
        </div>
    )
}