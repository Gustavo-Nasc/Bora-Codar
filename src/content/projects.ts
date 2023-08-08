import { ProjectCardProps } from '@/components/ProjectCard'
import project01MusicPlayer from '@/assets/01-music-player.png'
import project02ProductCard from '@/assets/02-product-card.png'

export const projects: ProjectCardProps[] = [
  {
    imgSrc: project01MusicPlayer.src,
    projectName: 'Player de Música',
    projectDescription:
      'Desenvolva o player conforme especificado utilizando as tecnologias da sua preferência. Você pode adicionar outros detalhes, como animações.',
    projectLink: 'music-player',
    projectLayout:
      'https://www.figma.com/file/XnielIsj9qrix1qxAQLT9X/23boraCodar-Desafio-1',
    projectGithubLink:
      'https://github.com/Gustavo-Nasc/Bora-Codar/tree/main/src/app/music-player',
  },
  {
    imgSrc: project02ProductCard.src,
    projectName: 'Card de Produto',
    projectDescription: 'Desenvolva o card de produto conforme especificado utilizando as tecnologias da sua preferência. O arquivo do Figma contém um protótipo e o link para baixar o arquivo .gif a ser utilizado.',
    projectLink: 'product-card',
    projectLayout: 'https://www.figma.com/community/file/1195050984449538256',
    projectGithubLink: 'https://github.com/Gustavo-Nasc/Bora-Codar/tree/main/src/app/product-card'
  }
]
