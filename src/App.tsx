import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from "./components/Home/Home";
import { NewRoom } from "./components/NewRoom/NewRoom";

import {AuthContextProvider} from './contexts/AuthContexts'

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>        
    </BrowserRouter>
  );
}

export default App;
