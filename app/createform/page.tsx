import { Courseform } from '@/components/courseform'
import { FormWrapper } from '@/components/form-wrapper'
import React from 'react'

const CourseCreatepage = () => {
  return (
    <div>
      <FormWrapper title='Course Form'>
        <Courseform />
      </FormWrapper>
    </div>
  )
}

export default CourseCreatepage
