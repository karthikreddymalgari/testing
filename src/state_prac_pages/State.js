import Example from './hooks';
import ObjectHooks from './ObjectHooks';
import ArrayofObjects from './ArrayofObjects';
import ArrayofArray from './ArrayofArray';

function State() {
  return (
    <div className="App">
      <div style={{display: 'flex',marginRight:"10px",flexDirection:"column"}}>
        <Example/>
        <ArrayofArray/>
        </div>
        <div style={{display: 'flex',marginRight:"10px",flexDirection:"column"}}>
        <ObjectHooks/>
        <ArrayofObjects/>
        </div>
    </div>
  );
}

export default State;
