import { Box, Typography, Card, CardContent } from '@mui/material'
import { Target, Lightbulb, Shield, Users } from 'lucide-react'

export const About = () => {
  return (
    <Box
      
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Seção de Métricas */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
            gap: 3,
            mb: 8,
          }}
        >
          <Card
            sx={{
              textAlign: 'center',
              p: 3,
              borderRadius: 3,
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: 36,
                fontWeight: 600,
                color: '#10b981',
                mb: 1,
              }}
            >
              500+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Propriedades Atendidas
            </Typography>
          </Card>

          <Card
            sx={{
              textAlign: 'center',
              p: 3,
              borderRadius: 3,
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: 36,
                fontWeight: 600,
                color: '#10b981',
                mb: 1,
              }}
            >
              15
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Anos de Experiência
            </Typography>
          </Card>

          <Card
            sx={{
              textAlign: 'center',
              p: 3,
              borderRadius: 3,
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: 36,
                fontWeight: 600,
                color: '#10b981',
                mb: 1,
              }}
            >
              30%
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Aumento Médio de Produtividade
            </Typography>
          </Card>

          <Card
            sx={{
              textAlign: 'center',
              p: 3,
              borderRadius: 3,
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: 36,
                fontWeight: 600,
                color: '#10b981',
                mb: 1,
              }}
            >
              98%
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Satisfação dos Clientes
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
