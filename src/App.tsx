import { Action } from 'components/Action';
import { Features } from 'components/Features';
import { Form } from 'components/Form';
import { Header } from 'components/Header';
import { MainInfo } from 'components/MainInfo';

function App() {
  return (
    <>
      <Header />
      <MainInfo />
      <Form />
      <Features />
      <Action />
    </>
  );
}

export default App;
