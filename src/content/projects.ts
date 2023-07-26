import { ProjectCardProps } from '@/components/ProjectCard'
import project01MusicPlayer from '@/assets/01-music-player.png'

export const projects: ProjectCardProps[] = [
  {
    imgSrc: project01MusicPlayer.src,
    projectName: 'Music Player',
    projectDescription:
      'Desenvolva o player conforme especificado utilizando as tecnologias da sua preferência. Você pode adicionar outros detalhes, como animações.',
    projectLink: 'music-player',
    projectLayout:
      'https://www.figma.com/file/XnielIsj9qrix1qxAQLT9X/23boraCodar-Desafio-1',
    projectGithubLink:
      'https://github.com/Gustavo-Nasc/Bora-Codar/tree/main/src/app/music-player',
  },
]
