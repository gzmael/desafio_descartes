import { Sidebar } from 'components/organisms/Sidebar'
import './styles/globals.css'

import logo from './assets/logo.svg'
import { Container } from 'components/templates/Container'
import { Map } from 'components/organisms/Map'
import { MapProvider } from 'contexts/MapContext'
import { MainLayout } from 'components/templates/Main'
import { Text } from 'components/atoms/Text'

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
        <Text size="sm" className="w-full text-center">
          Desenvolvido por{' '}
          <a href="https://github.com/gzmael" className="text-light-blue-200">
            Jezmael Basilio
          </a>
          .
        </Text>
      </MainLayout>
    </MapProvider>
  )
}

export default App
