import '@/App.css';

import { MainPage } from '@/components/MainPage/MainPage';
import { Form } from '@/components/Form/Form';
import { NavBar } from '@/components/NavBar/NavBar';

function App() {
  return (
    <div className="h-screen p-8 flex flex-col">
      <NavBar />
      <MainPage />
      <Form />
    </div>
  );
}

export default App;
