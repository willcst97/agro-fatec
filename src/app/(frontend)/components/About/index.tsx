import { Box, Typography, Card, CardContent } from '@mui/material'
import { Target, Lightbulb, Shield, Users } from 'lucide-react'

export const About = () => {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
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
              p: 6,
              borderRadius: 3,
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography
              sx={{
                fontSize: 36,
                fontWeight: 600,
                color: 'secondary.main',
                mb: 1,
              }}
            >
              500+
            </Typography>
            <Typography
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
              p: 6,
              borderRadius: 3,
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography
              sx={{
                fontSize: 36,
                fontWeight: 600,
                color: 'secondary.main',
                mb: 1,
              }}
            >
              15
            </Typography>
            <Typography
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
              p: 6,
              borderRadius: 3,
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography
              sx={{
                fontSize: 36,
                fontWeight: 600,
                color: 'secondary.main',
                mb: 1,
              }}
            >
              30%
            </Typography>
            <Typography
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
              p: 6,
              borderRadius: 3,
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            <Typography
              sx={{
                fontSize: 36,
                fontWeight: 600,
                color: 'secondary.main',
                mb: 1,
              }}
            >
              98%
            </Typography>
            <Typography
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 3,
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
            <Box sx={{ textAlign: 'left' }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  bgcolor: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Target size={28} color="#00A63E" />
              </Box>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#1e293b',
                  mb: 1,
                }}
              >
                Resultados Comprovados
              </Typography>
              <Typography
                sx={{
                  color: '#64748b',
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Mais de 15 anos transformando propriedades rurais em negócios altamente produtivos.
              </Typography>
            </Box>
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
            <Box sx={{ textAlign: 'left' }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  bgcolor: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Lightbulb size={28} color="#00A63E" />
              </Box>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#1e293b',
                  mb: 1,
                }}
              >
                Inovação Constante
              </Typography>
              <Typography
                sx={{
                  color: '#64748b',
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Utilizamos as mais recentes tecnologias e metodologias do agronegócio mundial.
              </Typography>
            </Box>
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
            <Box sx={{ textAlign: 'left' }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  bgcolor: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Shield size={28} color="#00A63E" />
              </Box>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#1e293b',
                  mb: 1,
                }}
              >
                Sustentabilidade
              </Typography>
              <Typography
                sx={{
                  color: '#64748b',
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Práticas que respeitam o meio ambiente e garantem produtividade a longo prazo.
              </Typography>
            </Box>
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
            <Box sx={{ textAlign: 'left' }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  bgcolor: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Users size={28} color="#00A63E" />
              </Box>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#1e293b',
                  mb: 1,
                }}
              >
                Parceria Verdadeira
              </Typography>
              <Typography
                sx={{
                  color: '#64748b',
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Acompanhamos nossos clientes em todas as etapas, do planejamento à colheita.
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
