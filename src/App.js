import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      aaa
      {process.env.REACT_APP_SECRET_NAME}
      {process.env.REACT_APP_NOT_SECRET_CODE}
    </div>
  );
}

export default App;
