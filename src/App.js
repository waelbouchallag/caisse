import './App.css';
import Header from './components/header/header'
import Content from './components/content/content'

const getChois= (msg)=>{
  console.log("from App.js",msg);
  return msg;
}
function App() {
  return (
    <div className="App">
      <Header sendChois={getChois}/>
      <Content data={getChois}/>
    </div>
  );
}

export default App;
