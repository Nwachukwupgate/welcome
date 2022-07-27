import React, {useState} from 'react';
import { content } from 'tailwind.config';
import { Works } from './works';


export const mappedDoc = () => {
    const [customBuild, setCustomBuild] = useState(
        {
            display: 'contentHide',
            contentMain: 'Custom Build',

            listItems:[
                {
                    id: 1,
                    field: 'Svenvy',
                    contentName: 'Gamifying customer support for zendesk app',
                    img: 'https://cdn.tailgrids.com/1.0/assets/images/portfolio/portfolio-01/image-01.jpg'
                },
                {
                    id: 2,
                    field: 'Svenvy',
                    contentName: 'Gamifying customer support for zendesk app',
                    img: 'https://cdn.tailgrids.com/1.0/assets/images/portfolio/portfolio-01/image-01.jpg'
                },
                {
                    id: 3,
                    field: 'Svenvy',
                    contentName: 'Gamifying customer support for zendesk app',
                    img: 'https://cdn.tailgrids.com/1.0/assets/images/portfolio/portfolio-01/image-01.jpg'
                },
                {
                    id: 4,
                    field: 'Svenvy',
                    contentName: 'Gamifying customer support for zendesk app',
                    img: 'https://cdn.tailgrids.com/1.0/assets/images/portfolio/portfolio-01/image-01.jpg'
                }               
            ]
        },
    )

    const [outSourcing, setOutSourcing] = useState(
        {
            display: 'contentHide',
            contentMain: 'OutSourcing',

            listItems:[
                {
                    id: 1,
                    field: 'Svenvy',
                    contentName: 'Gamifying customer support for zendesk app',
                    img: 'https://cdn.tailgrids.com/1.0/assets/images/portfolio/portfolio-01/image-01.jpg'
                },
                {
                    id: 2,
                    field: 'Svenvy',
                    contentName: 'Gamifying customer support for zendesk app',
                    img: 'https://cdn.tailgrids.com/1.0/assets/images/portfolio/portfolio-01/image-01.jpg'
                }
            ]
        },
    )

    const [hiring, setHiring] = useState(
        {
            display: 'contentHide',
            contentMain: 'OutSourcing',

            listItems:[
                {
                    id: 1,
                    field: 'Svenvy',
                    contentName: 'Gamifying customer support for zendesk app',
                    img: 'https://cdn.tailgrids.com/1.0/assets/images/portfolio/portfolio-01/image-01.jpg'
                },
                {
                    id: 2,
                    field: 'Svenvy',
                    contentName: 'Gamifying customer support for zendesk app',
                    img: 'https://cdn.tailgrids.com/1.0/assets/images/portfolio/portfolio-01/image-01.jpg'
                }
            ]
        },
    )
  return (
    <>
        <Works state={customBuild} />
    </>
  )
}
