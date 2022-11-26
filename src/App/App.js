import Header from '../Components/Header/Header';
import Section from '../Components/Section/Section';
import MainContent from '../Components/MainContent/MainContent';
import Footer from '../Components/Footer/Footer';
import { Data } from '../Data';
import './App.css';

export default function App() {

  const main_content = Data.map(box => {
    return <MainContent icon={box.icon} name={box.name} />
  })


  return (
    <div>
      <Header />
      <Section />
      <main className='app-main'>
        {main_content}
      </main>
      <Footer />
    </div>
  );
}

