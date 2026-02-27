import './App.scss'
import {UniversalCounter} from "../components/UniversalCounter/UniversalCounter.tsx";
import {SimpleCounterRedux} from '../components/SimpleCounter/SimpleCounterRedux.tsx';

function App() {
  return (
    <div className={'container'}>
      <UniversalCounter />
      {/*<SimpleCounter />*/}
      <SimpleCounterRedux />
    </div>
  )
}

export default App