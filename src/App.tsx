import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import { APP_NAME } from './config/app'

function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{APP_NAME}</h1>
    </main>
  )
}

function PublicTree() {
  const { username } = useParams()
  return <main className="p-6">Árvore de @{username} (em breve)</main>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/u/:username" element={<PublicTree />} />
        <Route path="/u/:username/:eventSlug" element={<PublicTree />} />
      </Routes>
    </BrowserRouter>
  )
}
