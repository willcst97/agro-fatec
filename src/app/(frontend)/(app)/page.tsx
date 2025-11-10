import '../styles.css'
import { Box } from '@mui/material'
import { Appresentation } from '../components/Appresentation'
import { IntroServices } from '../components/IntroServices'
import { Footer } from '../components/Footer'
import { IntroAbout } from '../components/IntroAbout'
import { Agendamento } from '../components/Agendamento'
import { About } from '../components/About'
import { Especialidades } from '../components/Especialidades'

export default async function HomePage() {
  return (
    <>
      <Box sx={{ bgcolor: '#EFFDF3' }}>
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
      <Box
        sx={{
          mt: 9,
          bgcolor: '#f8fafc',
        }}
      >
        <IntroAbout />
        <About />
        <Especialidades />
        <Footer />
      </Box>
    </>
  )
}
