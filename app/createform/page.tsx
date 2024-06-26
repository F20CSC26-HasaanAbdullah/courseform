import { Courseform } from '@/components/courseform'
import { FormWrapper } from '@/components/form-wrapper'
import React from 'react'

const CourseCreatepage = () => {
  return (
    <div className='flex ml-[30px] mt-6 w-screen h-[800px] items-center justify-center'>
      <FormWrapper  title='Course Form' >
        <Courseform />
      </FormWrapper>
    </div>
  )
}

export default CourseCreatepage
