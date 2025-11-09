import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const Agendamento = () => {
  return (
    <Box
      sx={{
        bgcolor: '#00A33D',
        maxWidth: 1200,
        margin: '0 auto',
        textAlign: 'center',
        py: 6,
        px: 4,
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
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
        <Typography
            variant="body1"
          sx={{
            fontSize: 16,
            color: 'white',
            fontWeight: 500,
            mb: 6,
            maxWidth: 700,
            margin: '0 auto 48px auto',
            lineHeight: 1.6,
          }}
        >
          Nossa equipe de especialistas está pronta para analisar sua propriedade e desenvolver estratégias personalizadas para maximizar seus resultados.
        </Typography>
      </Box>
    </Box>
  )
}
