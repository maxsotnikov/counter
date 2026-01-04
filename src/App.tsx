import './App.css'
import {UniversalCounter} from "./components/UniversalCounter/UniversalCounter.tsx";
import {SimpleCounter} from './components/SimpleCounter/SimpleCounter.tsx';

function App() {
  return (
    <div className={'container'}>
      <UniversalCounter />
      {/*<SimpleCounter />*/}
      <SimpleCounter />
    </div>
  )
}

export default App