import React from 'react'

import { TextCarFaq ,ArrowFaq,DivCarFaq} from './styles'
const CarFaq = ({title,subtitle}) => {
  return (
    <DivCarFaq>
        <ArrowFaq/>
        <TextCarFaq>
            <h5>
                {title}
            </h5>
            <h6>
                {subtitle}
            </h6>
        </TextCarFaq>
    </DivCarFaq>
  )
}

export default CarFaq