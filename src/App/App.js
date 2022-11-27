import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Section from '../Components/Section/Section';
import MainContent from '../Components/MainContent/MainContent';
import SummarySection from '../Components/SummarySection/SummarySection';
import Footer from '../Components/Footer/Footer';
import { Data } from '../Data';
import './App.css';

export default function App() {
  const [summary, setSummary] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [clear, setClear] = useState(false);



  const handleClear = () => {   //This function turn on the clear button
    setClear(prev => !prev)
  }



  /*
  Here we are making sure if the Clear button is "ON" and if so,
  we are assigning the value 0 to summary and totalItems
  and at the end we turn off the Clear constant so we don't fall into a loop
   */
  if (clear) {
    setSummary(prev => {
      return 0
    })
    setTotalItems(prev => {
      return 0
    })
    setClear(prev => !prev)
  }



  /*
  Here we declared a constant in which we get the data from Data.js 
  and pass the appropriate props in order to create the necessary components 
  */
  const main_content = Data.map(box => {
    return <MainContent
      key={box.id}
      setSummary={setSummary}
      setTotalItems={setTotalItems}
      clear={clear}
      setClear={setClear}
      icon={box.icon}
      name={box.name}
      squareMeter={box.squareMeter}
    />
  })



  return (
    <div>
      <Header />
      <Section />
      <main className='app-main'>
        {main_content}
      </main>
      <SummarySection
        summary={summary}
        totalItems={totalItems}
        handleClear={handleClear}
      />
      <Footer />
    </div>
  );
}

