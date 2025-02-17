
type User = {
    name: string;
    age: number;
}

type WrapperMainProps = {
    title: string;
    user: User;
}


function Mainsectin2({ title , user } : WrapperMainProps) {
  return (
    <>
    <h1>{title}</h1>
    <p>Пользователь: {user.name}, {user.age}</p>
    </>
  )
}

export default Mainsectin2