import './App.css';
import CircularProgressWidget from './components/CircularProgressWidget/CircularProgressWidget';
import StrengthBar from './components/StrengthBar/StrengthBar';

const onBarChange = (val) => {
  console.log(val);
};
const onSliderChange = (e) => {
  console.log(e);
};
function App() {
  return (
    <div className='App'>
      <CircularProgressWidget onSliderChange={onSliderChange} />
      <StrengthBar onBarChange={onBarChange} />
    </div>
  );
}

export default App;
