import { Action } from 'components/Action';
import { Features } from 'components/Features';
import { Footer } from 'components/Footer';
import { Form } from 'components/Form';
import { Header } from 'components/Header';
import { MainInfo } from 'components/MainInfo';
import { ShortenedLinks } from './components/ShortenedLinks';

function App() {
  return (
    <>
      <Header />
      <MainInfo />
      <Form />
      <ShortenedLinks />
      <Features />
      <Action />
      <Footer />
    </>
  );
}

export default App;
