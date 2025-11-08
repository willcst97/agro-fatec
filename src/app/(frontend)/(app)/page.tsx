import '../styles.css'
import { Box } from '@mui/material'
import { Appresentation } from '../components/Appresentation'
import { Footer } from '../components/Footer'

export default async function HomePage() {
  return (
    <>
      <Box>
        <Appresentation />
      </Box>
      <Box>
        <h1>textos</h1>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  )
}
