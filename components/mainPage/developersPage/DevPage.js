import React from 'react'
import DevComp from './devComp/DevComp'
import DevHero from './devComp/DevHero'
import DevStep from './devComp/DevStep'
import { FaqPage } from './devComp/Faq'

function DevPage() {
  return (
    <>
    <div className="container mx-auto">
        <DevHero />
        <DevStep />
        <DevComp />
        <FaqPage />
    </div>
    </>
  )
}

export default DevPage