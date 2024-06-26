import React from 'react'
import CourseCreatepage from './createform/page'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const page = () => {
  return (
    <div className='flex flex-col text-5xl font-semibold justify-center items-center w-screen h-screen'>
      Welcome to Course Form
      <Button asChild className='mt-4'>
        <Link href={'/createform'}>
          Create Form

        </Link>

      </Button>
    </div>
  )
}

export default page 
