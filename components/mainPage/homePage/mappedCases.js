import build from 'next/dist/build'
import React,{useState} from 'react'
import SuccessCase from './successCase'

const MappedCases = () => {
    const[state, setState] = useState([
        {
            id: 1,
            type: 'custom build',
            buildTopic: 'Fixing for marketing',
            stleTopic: 'for for a saas company',
            buildContent: 'play is a free software company, tha hav jdhjd jsjdb hjdgshb hbdshcb bhsbh bhbs hschbhgcb bhbhsd bhbsh sdbchdn hghds jhsjm',
            imgFile:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        },
        {
            id: 2,
            type: 'Quick Fix',
            buildTopic: 'Fixing for marketing',
            stleTopic: 'for for a saas company',
            buildContent: 'play is a free software company, tha hav jdhjd jsjdb hjdgshb hbdshcb bhsbh bhbs hschbhgcb bhbhsd bhbsh sdbchdn hghds jhsjm',
            imgFile:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        },
        {
            id: 3,
            type: 'Staff Aug',
            buildTopic: 'Fixing for marketing',
            stleTopic: 'for for a saas company',
            buildContent: 'play is a free software company, tha hav jdhjd jsjdb hjdgshb hbdshcb bhsbh bhbs hschbhgcb bhbhsd bhbsh sdbchdn hghds jhsjm',
            imgFile:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        }
    ])
  return (
    <>
        {/* <SuccessCase content={state} /> */}
    </>
  )
}

export default MappedCases