
import { Inter } from 'next/font/google'
import Login from './googleAuth/Login'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Login />
    </>
  )
}
