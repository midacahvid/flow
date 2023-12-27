import Image from 'next/image'
import Header from './components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <Header />
    </main>
  )
}
