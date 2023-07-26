import Image from 'next/image'
import { FcOpenedFolder } from 'react-icons/fc'

export type ProjectCardProps = {
  imgSrc: string
  projectName: string
  projectDescription: string
  projectLink: string
  projectLayout: string
  projectGithubLink: string
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="bg-white text-alt rounded-lg border-white border-2">
      <Image
        src={props.imgSrc}
        width={1000}
        height={1000}
        alt={`Imagem de Preview do Projeto ${props.projectName}`}
        className="w-full h-max rounded-t-lg"
      />
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-4">{props.projectName}</h3>
          <p className="font-bold text-lg">Desafio Proposto:</p>
          <p className="text-sm">{props.projectDescription}</p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <a href={props.projectLink} title="Acessar Projeto">
            <FcOpenedFolder size={40} />
          </a>
          <a
            href={props.projectLayout}
            target="_blank"
            title="Acessar Layout no Figma"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma Logo"
              width={40}
              height={40}
            />
          </a>
          <a
            href={props.projectGithubLink}
            target="_blank"
            title="Acessar Projeto no Github"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub Logo"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
