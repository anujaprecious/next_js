
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [val,setVal] = useState("Anuja");
  const [print,setPrint]=useState(false);

const handleSubmit=(e)=>{
  setVal(e.target.value)
 setPrint(false)
}

  return (
    <main>

      <h1>Hey! Anuja Patel</h1>

    <input type='text'  onChange={handleSubmit}/>

     <button onClick={()=>setPrint(true)}>submit</button>
     {
      print?<h1>{val}</h1>:null
    }

    </main>
  )
}
