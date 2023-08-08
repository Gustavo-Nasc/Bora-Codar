'use client'

import { Canvas } from '@react-three/fiber'
import { Sofa } from './components/Sofa'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

export default function ProductCard() {
  return (
    <main className="p-6 min-h-screen w-screen bg-[#D9CDF7] flex items-center">
      <div>
        <Canvas>
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={1} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Sofa />
        </Canvas>
      </div>
      <div className="flex flex-col text-[#271A45]">
        <span className="uppercase">Código: 42404</span>
      </div>
    </main>
  )
}