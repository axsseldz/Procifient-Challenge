
import './SummarySection.css';


export default function SummarySection({ summary, totalItems, handleClear, handleTotal }) {
    let totalSquare = (summary).toFixed(2);
    let subtotal = summary * 200;
    let tax = subtotal * 0.16;
    let total = subtotal + tax;
    let dueToday = total * 0.50;



    return (
        <section className='summarySection-container'>
            <div className='summarySection-buttons'>
                <button
                    className='summarySection-first-button'
                    onClick={handleClear}
                >
                    Clear
                </button>
                <button
                    className='summarySection-second-button'
                    onClick={handleTotal}
                >
                    Total
                </button>
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
                            <p>{totalItems}</p>
                            <p>{totalSquare}</p>
                            <p>${(subtotal).toFixed(2)}</p>
                            <p>${(tax).toFixed(2)}</p>
                            <p className='bottom-details'>${(total).toFixed(2)}</p>
                            <p className='bottom-details'>${(dueToday).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}