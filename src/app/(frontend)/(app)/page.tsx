import '../styles.css'
import { Box } from '@mui/material'
import { Appresentation } from '../components/Appresentation'
import { IntroServices } from '../components/IntroServices'
import { Footer } from '../components/Footer'

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
        <Footer />
      </Box>
    </>
  )
}
