import '../styles.css'
import { Box } from '@mui/material'
import { Appresentation } from '../components/Appresentation'
import { IntroServices } from '../components/IntroServices'
import { Footer } from '../components/Footer'
import { IntroAbout } from '../components/IntroAbout'
import { Agendamento } from '../components/Agendamento'

export default async function HomePage() {
  return (
    <>
      <Box>
        <Appresentation />
      </Box>
      <Box>
        <IntroServices />
      </Box>
      <Box>
        <h1>cards dos serviços</h1>
      </Box>
      <Box>
        <Agendamento />
      </Box>
      <Box>
        <IntroAbout />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  )
}
