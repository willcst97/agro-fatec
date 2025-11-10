import { Box, Typography, Link as MuiLink } from '@mui/material'
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Leaf } from 'lucide-react'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#101828',
        color: 'white',
        pt: 6,
        pb: 3,
        px: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr' },
          gap: 4,
          mb: 4,
        }}
      >
        
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Box
              sx={{
                backgroundColor: '#016630',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 2,
              }}
            >
              <Leaf color="white" />
            </Box>
            <Typography sx={{ fontSize: 24, fontWeight: 500, color: 'white' }}>
              AgroConsult
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 16, color: '#8892a6', lineHeight: 1.6, mb: 3 }}>
            Especialistas em consultoria agronômica para milho, soja e sorgo. Transformamos
            conhecimento em resultados práticos para o seu agronegócio.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 35,
                borderRadius: '15%',
                bgcolor: '#2a3441',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
            >
              <Facebook />
            </Box>
            <Box
              sx={{
                width: 40,
                height: 35,
                borderRadius: '15%',
                bgcolor: '#2a3441',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
            >
              <Instagram />
            </Box>
            <Box
              sx={{
                width: 40,
                height: 35,
                borderRadius: '15%',
                bgcolor: '#2a3441',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
            >
              <Linkedin />
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 3 }}
          >
            Nossos Serviços
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: '14px',
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Consultoria em Milho
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              Consultoria em Soja
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Consultoria em Sorgo
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Análise de Solo
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Manejo Integrado
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Monitoramento de Safra
            </MuiLink>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Empresa
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Sobre Nós
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Nossa Equipe
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Casos de Sucesso
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Artigos e Blog
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Carreiras
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Política de Privacidade
            </MuiLink>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Contato
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <MapPin size={18} color="#00A63E" />
              <Box>
                <Typography variant="body2" sx={{ color: '#8892a6', fontSize: 14 }}>
                  Rua do Agronegócio, 123
                </Typography>
                <Typography variant="body2" sx={{ color: '#8892a6', fontSize: 14 }}>
                  Ribeirão Preto, SP
                </Typography>
                <Typography variant="body2" sx={{ color: '#8892a6', fontSize: 14 }}>
                  CEP: 14000-000
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Phone size={18} color="#00A63E" />
              <Typography variant="body2" sx={{ color: '#8892a6', fontSize: 14 }}>
                (16) 3333-4444
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Mail size={18} color="#00A63E" />
              <Typography variant="body2" sx={{ color: '#8892a6', fontSize: 14 }}>
                contato@agroconsult.com.br
              </Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontSize: 14,
                }}
              >
                Horário de Atendimento
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="body2" sx={{ color: '#8892a6', fontSize: 14 }}>
                  Segunda à Sexta: 8h às 18h
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#8892a6', fontSize: 14 }}>
                Sábado: 8h às 12h
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid #2a3441',
          pt: 3,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#8892a6',
              fontSize: 14,
            }}
          >
            © 2025 AgroConsult. Todos os direitos reservados.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Termos de Uso
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Política de Privacidade
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#8892a6',
                textDecoration: 'none',
                fontSize: 14,
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: 'color 0.3s ease',
              }}
            >
              Cookies
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
