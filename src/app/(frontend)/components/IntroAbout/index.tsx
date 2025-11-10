import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const IntroAbout = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f8fafc',
        py: 8,
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'inline-block',
            bgcolor: '#DBFCE7',
            color: 'primary.main',
            px: 1,
            borderRadius: 3,
            fontSize: 12,
            fontWeight: 600,
            mb: 2,
            border: '1px solid #e0f2e0',
          }}
        >
          Sobre a AgroConsult
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontSize: 38, 
            fontWeight: 600,
            color: '#1a2332',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Liderança em Consultoria Agronômica
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: 18,
            color: '#6b7280',
            mb: 6,
            maxWidth: 700,
            margin: '0 auto 48px auto',
            lineHeight: 1.6,
          }}
        >
          Somos uma empresa especializada em consultoria para o agronegócio, com foco exclusivo em milho, soja 
          e sorgo. Nossa missão é maximizar a produtividade e rentabilidade das propriedades rurais através de soluções inovadoras e sustentáveis.
        </Typography>
      </Box>
    </Box>
  )
}