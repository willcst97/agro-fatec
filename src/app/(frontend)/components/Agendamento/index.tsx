import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const Agendamento = () => {
  return (
    <Box
      sx={{
        bgcolor: '#00A33D',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        py: 6,
        px: 4,
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: 28,
            fontWeight: 600,
            color: 'white',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Pronto para Revolucionar sua Produção?
        </Typography>
      </Box>
    </Box>
  )
}
