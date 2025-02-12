import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';

function hadleClick() {
  alert('ciao');
};

function hadleChange(e) {
  console.log(e.target.value)
};

function hadleSubmit(e) {
  e.preventDefault();
  console.log(e)
};

function App() {
  const [count, setCount] = useState(0);
  const [items, setItem] = useState([1, 2, 3]);
  const [user, setUser] = useState({ name: 'Alice', age: 50 });
  console.log(items, user)

  const addItem = () => {
    const newItem = 4;
    setItem([...items, newItem])
    console.log(items)
  }

  const updateUserName = () => {
    const updateUser = { ...user, name: 'Bob' };
    setUser(updateUser)
    console.log(user)
  }

  const addCity = (city) => {
    city.id = cities.length;
    setCities([...cities, city])
  }

  const [cities, setCities] = useState([
    {
      id: 0,
      title: "New York",
      image: "https://plus.unsplash.com/premium_photo-1682656220562-32fde8256295?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
    {
      id: 1,
      title: "Roma",
      image: "https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false
    },
    {
      id: 2,
      title: "Madrid",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
    {
      id: 3,
      title: "Tokyo",
      image: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false
    },
    {
      id: 4,
      title: "Mosca",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
      isVisited: false
    },
    {
      id: 5,
      title: "Berlino",
      image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
  ]);

  return (
    <>

      <CardForm addCity={addCity}></CardForm>
      <div className='container_cards'>
        {cities.map((city) => (
          <Card key={city.id} title={city.title} imgUrl={city.image} isVisited={city.isVisited}></Card>
        ))}
        {cities.filter((city) => city.isVisited).map((city) => (
          <Card key={city.id} title={city.title} imgUrl={city.image} isVisited={city.isVisited}></Card>
        ))}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={hadleClick}>
          alert
        </button>
        <button onClick={updateUserName}>
          prova
        </button>
        <input type="text" onChange={hadleChange} />

        <form action="" onSubmit={hadleSubmit}>

          <button type="submit">
            click me!
          </button>
        </form>
      </div>

    </>
  )
}

export default App
