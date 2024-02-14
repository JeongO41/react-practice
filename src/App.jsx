import Header from './components/Header/Header'
import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import Examples from "./components/Examples";
import './index.css'
function App() {

  console.log('App컴포넌트 렌더링됨') ;

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
