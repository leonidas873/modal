import { useEffect, useState } from 'react';
import './App.css'
import Modal from './components/Modal/Modal';
import { Link, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Details from './Details';


function App() {

const [isOpen, setIsOpen] = useState(true);
const [myState, setMyState] = useState(false)

const handleOpenModal = () => {
  setIsOpen(true);
}
// 1. ერთხელ
useEffect(()=>{
  console.log("გაეშვება ერთხელ პირველ რენდერზე")
},[])
// 2. დეფენდენსი არაიში არსებული სტეიტების ცვლილებაზე
useEffect(()=>{
  console.log("გაეშვება პირველ რენდერზე და შემდეგ isOpen ის ყოველ ცვლილებაზე")
},[isOpen])
// 3. ყოველ ცვლილებაზე
useEffect(()=>{
  // რენდერი ხდება ყოველი სტეიტის ცვლილებისას. მაგალითად თუ შეიცვალა isOpen, ან myState, ანუ გაეშვება ყველა სტეიტის ცვლილებაზე
  console.log("გაეშვება ყოველ რენდერზე")
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/:id",
    element: <Details/>
  }
]);

  return (<>
     <div>
     <RouterProvider router={router} />
     <Link to={'/thisid'}>click</Link>
     </div>
     </>
  )
}

export default App
