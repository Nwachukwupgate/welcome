import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div>
        <div className="m-auto text-center mb-12 md:w-8/12 lg:w-6/12">
            <h2 className="text-2xl text-black font-bold md:text-4xl">
                {title}
            </h2>
        </div>
        
    </div>
  )
}

export default SectionTitle