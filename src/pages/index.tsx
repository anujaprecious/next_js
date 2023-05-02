
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [val,setVal] = useState("Anuja");


  return (
    <main>

      <h1>Hey! Anuja Patel</h1>
      <form>
    <input type='text' value={val} onChange={(e)=>setVal(e.target.value)} />
    </form>


    <h1>{val}</h1>
    </main>
  )
}
