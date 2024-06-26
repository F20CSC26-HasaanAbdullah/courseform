"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { Createcourse } from "@/actions/courseserver";


export const CourseSchema = z.object({
    Name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    Coursename: z.string().min(2, {
        message: "Course name must be at least 2 characters.",
    }),
    email: z.string().email(),
    phonenumber: z.string().min(2, {
        message: "Phonenumber must be at least 11 characters.",
    }),
})



export const Courseform = () => {
    const form = useForm<z.infer<typeof CourseSchema>>({
        resolver: zodResolver(CourseSchema),
        defaultValues: {
            Name: " ",
            Coursename: " ",
            email: " ",
            phonenumber: " ",
        },
    })

    function onSubmit(values: z.infer<typeof CourseSchema>) {

        console.log(values)
        Createcourse(values)
    }
return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Name" className="border border-black w-[500px]"{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Coursename"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Course Name" className="border border-black w-[500px]"{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email" className="border border-black w-[500px]"{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phonenumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Phone Number" className="border border-black w-[500px]"{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="mt-3">Submit</Button>
            </form>
            
            <div className="text-right mt-2">
                <Link href={'/deleteform'}>
                Delete Page
                </Link>
            </div>
            <div className="text-left mt-2">
                <Link href={'/updateform'}>
                Update Page
                </Link>
            </div>
        </Form>
    );


};