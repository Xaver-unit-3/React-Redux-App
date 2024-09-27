import { connect } from 'react-redux';
import { factsActions } from './actions/factsActions';
import { useEffect } from 'react';
import CatFacts from './components/CatFacts';
import './App.css';

function App(props) {
  useEffect(() => {
    props.getSome()
  },[])
  return (
    <div className="App">
      <h1>CAT FACTS!</h1>
     <CatFacts />
    </div>
  );
}

export default connect(null, {getSome: factsActions})(App);
