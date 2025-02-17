import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './komponents/header/Header';
import Slider from './komponents/slide/Slider';
import Meinsection1 from "./komponents/mein/Meinsection1"
import Mainsectin2 from './komponents/mein/Mainsectin2';



function App() {
  const user = { name: "Алексей", age:30}
  return (
    <>
    <Header/>
    <Slider/>
    <Meinsection1 title = "Наша команда выграла" />
    <Meinsection1 title = "Привет ето App.tsx" />
    <Mainsectin2 user={user} title = "Привет ето 2 App.tsx" />
    </>
  )
}

export default App
