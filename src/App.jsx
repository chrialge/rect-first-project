import './App.css';
import Card from './components/Card';
import CardForm from './components/CardForm';
import Example from './components/Example';
import { useSelector } from 'react-redux';


function App() {
  const cities = useSelector((state) => state.cities.value)

  return (
    <>
      <Example></Example>
      <CardForm></CardForm>
      <div className='container_cards'>
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.title}
            imgUrl={city.image}
            isVisited={city.isVisited}>
          </Card>
        ))}
      </div>
    </>
  )
}

export default App
