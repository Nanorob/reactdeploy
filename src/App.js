import './App.css';
import View from './view';
import Home from './home';

function App() {
  var url = window.location.href.length;
  if (url >= 100) {
    return (
      <>
        <View />
      </>
    );
  }
  else {
    return (
      <>
        <Home link='https://kite.trade/connect/login?api_key=7ebr1ptb3ccwvz07' />
      </>
    )
  }
}

export default App;
