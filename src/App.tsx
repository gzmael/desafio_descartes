import { Sidebar } from 'components/organisms/Sidebar'
import './styles/globals.css'

import logo from './assets/logo.svg'
import { Container } from 'components/templates/Container'
import { Map } from 'components/organisms/Map'
import { MapProvider } from 'contexts/MapContext'
import { MainLayout } from 'components/templates/Main'

function App() {
  return (
    <MapProvider>
      <MainLayout>
        {/* Logo */}
        <img src={logo} alt="Descartes Weather Logo" />
        {/* Content */}
        <Container>
          <Sidebar />
          <Map />
        </Container>
      </MainLayout>
    </MapProvider>
  )
}

export default App
