'use client'

import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/content/projects'
import { useEffect } from 'react'
import WebFont from 'webfontloader'

export default function Home() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Tektur'],
      },
    })
  }, [])

  return (
    <main className="p-6 bg-main">
      <h1 className="font-secondary text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
        #bora<span className="text-logo">codar</span>
      </h1>
      <h2 className="font-secondary text-center mb-12">
        <a
          className="underline"
          target="_blank"
          href="https://github.com/Gustavo-Nasc"
        >
          Gustavo-Nasc
        </a>
        <span> & </span>
        <a
          className="underline"
          target="_blank"
          href="https://www.rocketseat.com.br/"
        >
          Rocketseat
        </a>
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              projectLink={project.projectLink}
              projectLayout={project.projectLayout}
              projectGithubLink={project.projectGithubLink}
            />
          )
        })}
      </section>
    </main>
  )
}
