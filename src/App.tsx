import Count from './components/Count';
import CountReducer from './components/CountReducer';
import Timer from './components/Timer';

const App = () => {
  return (
    <>
      <h1>Hello, react with Bun!</h1>
      <Count />
      <CountReducer />
      <Timer />
    </>
  )
}

export default App
