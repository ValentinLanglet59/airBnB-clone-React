import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const datas = data.map((item) => {
    return <Card 
    item={item}
    />
  })
 

  return (
    <div>
      <Header />
      <div className="container">
        {datas}
      </div>
    </div>
    
  );
}

export default App;
