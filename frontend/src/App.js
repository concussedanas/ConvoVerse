import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact /> {/*Need to have the exact, here so any other url with head url does not show this html as well*/}
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
