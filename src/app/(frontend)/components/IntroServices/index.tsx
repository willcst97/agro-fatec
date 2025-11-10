import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const IntroServices = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
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
          Nossos Serviços
        </Box>

        <Typography
          sx={{
            fontSize: 38, 
            fontWeight: 600,
            color: '#1a2332',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Especialização em Três Culturas Estratégicas
        </Typography>

        <Typography
          sx={{
            fontSize: 18,
            color: '#6b7280',
            mb: 6,
            maxWidth: 700,
            margin: '0 auto 48px auto',
            lineHeight: 1.6,
          }}
        >
          Nossa expertise abrange as principais commodities do agronegócio brasileiro,
          oferecendo soluções personalizadas para cada cultura.
        </Typography>
      </Box>
    </Box>
  )
}