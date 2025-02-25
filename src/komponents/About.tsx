import Meinsection1 from "./mein/Meinsection1"
import Mainsectin2 from './mein/Mainsectin2';

function About() {
  const user = { name: "Алексей", age:30}
  return (
    <>
    <Meinsection1 title = "Наша команда выграла" />
    <Meinsection1 title = "Привет ето App.tsx" />
    <Mainsectin2 user={user} title = "Привет ето 2 App.tsx" />
    </>
  )
}

export default About