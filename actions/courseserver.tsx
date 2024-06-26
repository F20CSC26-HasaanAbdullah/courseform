"use server";

import { CourseSchema } from "@/components/courseform";
import { DeleteSchema } from "@/components/deleteform";
import { UpdateSchema } from "@/components/updateform";
import { prisma } from "@/lib/prisma";
import { z } from "zod"

export const Createcourse = async (values: z.infer<typeof CourseSchema>) => {
    console.log(values);


    const course = await prisma.courseForm.create({
        data: {
            Name: values.Name,
            Coursename: values.Coursename,
            email: values.email,
            phonenumber: values.phonenumber,

        }

    })
    console.log(course)
}

export const Deletecourse = async (values: z.infer<typeof DeleteSchema>) => {
    console.log(values);

    const course1 = await prisma.courseForm.deleteMany({
        where: {
            id: values.Id,
        }
    })
    console.log(course1)
}


export const Updatecourse = async (values: z.infer<typeof UpdateSchema>) => {
    console.log(values);

    const course2 = await prisma.courseForm.updateMany({
        where: {
            id: values.Id,
        },
        data: {
            Coursename: values.Coursename,
        }
    })
    console.log(course2)
}
