import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from "./components/Home/Home";
import { NewRoom } from "./components/NewRoom/NewRoom";
import { Room } from './components/Room/Room';

import {AuthContextProvider} from './contexts/AuthContexts'

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>        
    </BrowserRouter>
  );
}

export default App;
