import { Box, Typography, Button } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const Especialidades = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        bgcolor: '#f8fafc',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 6,
          alignItems: 'center',
        }}
      >
        {/* Conteúdo Textual */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 'bold',
              color: '#1e293b',
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Nossa Equipe de Especialistas
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              color: '#64748b',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Contamos com uma equipe multidisciplinar de engenheiros agrônomos, especialistas em
            solos, entomologistas e consultores em agronegócio. Cada membro da nossa equipe possui
            vasta experiência prática e conhecimento científico atualizado.
          </Typography>

          {/* Lista de Características */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#10b981',
                  mt: 1,
                  mr: 2,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    mb: 0.5,
                  }}
                >
                  Formação Acadêmica Sólida
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    color: '#64748b',
                  }}
                >
                  Mestres e doutores das melhores universidades do país
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#10b981',
                  mt: 1,
                  mr: 2,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    mb: 0.5,
                  }}
                >
                  Experiência Prática
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    color: '#64748b',
                  }}
                >
                  Mais de uma década trabalhando diretamente no campo
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#10b981',
                  mt: 1,
                  mr: 2,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    mb: 0.5,
                  }}
                >
                  Atualização Constante
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    color: '#64748b',
                  }}
                >
                  Participação em congressos e pesquisas internacionais
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Botão */}
          <Button
            variant="contained"
            endIcon={<ArrowRight size={20} />}
            sx={{
              bgcolor: 'secondary.main',
              color: 'white',
              px: 2,
              py: 1,
              borderRadius: 3,
              textTransform: 'none',
              fontSize: 14,
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'primary.main',
              },
            }}
          >
            Conheça Nossa Equipe
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/image.png"
            alt="Equipe de Especialistas AgroConsult"
            width={500}
            height={400}
            style={{
              objectFit: 'cover',
              borderRadius: '12px',
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
