import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Certificates } from './pages/Certificates'
import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'
import { Work } from './pages/Work'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<ProjectPage />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
