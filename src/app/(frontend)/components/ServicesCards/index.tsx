import { Box, Typography, Button, Card, CardContent } from '@mui/material'
import { ArrowRight, Wheat, Sprout, Zap } from 'lucide-react'
import Image from 'next/image'

export const ServicesCards = () => {
  const services = [
    {
      id: 1,
      title: 'Consultoria em Milho',
      description:
        'Maximização da produtividade através de técnicas avançadas de manejo, escolha de variedades e otimização de recursos.',
      benefits: [
        'Análise de solo especializada',
        'Seleção de híbridos',
        'Manejo integrado de pragas',
        'Otimização de irrigação',
      ],
      highlight: 'Aumento médio de 25% na produtividade',
      image:
        'https://images.unsplash.com/photo-1655131468751-c4210f1c4c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc2MTgwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Wheat size={32} color="#00A63E" />,
    },
    {
      id: 2,
      title: 'Consultoria em Soja',
      description:
        'Estratégias completas para cultivo sustentável de soja, desde o plantio até a colheita, com foco em qualidade e rendimento.',
      benefits: [
        'Rotação de culturas',
        'Manejo de resistência',
        'Controle biológico',
        'Monitoramento de doenças',
      ],
      highlight: 'Redução de 40% nos custos de produção',
      image:
        'https://images.unsplash.com/photo-1562702076-c719c8796b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3liZWFuJTIwZmFybXxlbnwxfHx8fDE3NTc2MTgzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Sprout size={32} color="#00A63E" />,
    },
    {
      id: 3,
      title: 'Consultoria em Sorgo',
      description:
        'Aproveitamento das características únicas do sorgo para diversificação produtiva e sustentabilidade no agronegócio.',
      benefits: [
        'Resistência à seca',
        'Adaptação climática',
        'Uso em biocombustíveis',
        'Integração lavoura-pecuária',
      ],
      highlight: '35% maior resistência à estiagem',
      image:
        'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NjE4MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Zap size={32} color="#00A63E" />,
    },
  ]

  return (
    <Box
      sx={{
        mb: 12,
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 4,
          }}
        >
          {services.map((service) => (
            <Card
              key={service.id}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                  '& .service-image': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 200,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="service-image"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {service.icon}
                </Box>
              </Box>

              
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
