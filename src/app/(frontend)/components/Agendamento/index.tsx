import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'

export const Agendamento = () => {
  return (
    <Box
      sx={{
        bgcolor: '#00A33D',
        maxWidth: 1200,
        margin: '0 auto',
        textAlign: 'center',
        py: 4,
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
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
            maxWidth: 700,
            margin: '0 auto 26px auto',
            lineHeight: 1.6,
          }}
        >
          Nossa equipe de especialistas está pronta para analisar sua propriedade e desenvolver
          estratégias personalizadas para maximizar seus resultados.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            textTransform: 'none',
            backgroundColor: 'white',
            color: 'secondary.main',
            fontWeight: 'bold',
            fontSize: 14,
            paddingX: 3,
            paddingY: 1,
            borderRadius: 2,
          }}
        >
          Agendar Consultoria Gratuita
        </Button>
      </Box>
    </Box>
  )
}
