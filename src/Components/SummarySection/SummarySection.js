import './SummarySection.css';


export default function SummarySection({ summary, setSummary }) {
    return (
        <section className='summarySection-container'>
            <div className='summarySection-buttons'>
                <button className='summarySection-first-button' >clear</button>
                <button className='summarySection-second-button'>total</button>
            </div>
            <div className='summarySection-summary-section'>
                <p className='summarySection-summary-tittle'>Summary</p>
                <div className='summarySection-summary-box'>
                    <div className='summarySection-summary-details'>
                        <div>
                            <p>Total Items</p>
                            <p>Total M²</p>
                            <p>Subtotal</p>
                            <p>Tax</p>
                            <p className='bottom-details'>Total</p>
                            <p className='bottom-details'>Due Today 50%</p>
                        </div>
                        <div className='right-side-details'>
                            <p>12</p>
                            <p>8.55</p>
                            <p>$1,710</p>
                            <p>$273</p>
                            <p className='bottom-details'>$1,983</p>
                            <p className='bottom-details'>$991</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}