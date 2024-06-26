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
import { Updatecourse } from "@/actions/courseserver";


export const UpdateSchema = z.object({
    Id: z.string().nonempty(),
    Coursename: z.string().min(2, {
        message: "Course name must be at least 2 characters.",
    }),

})

export const Updateform = () => {
    const form = useForm<z.infer<typeof UpdateSchema>>({
        resolver: zodResolver(UpdateSchema),
        defaultValues: {
            Id: " ",
            Coursename: "",

        },
    })

    function onSubmit(values: z.infer<typeof UpdateSchema>) {

        console.log(values)
        Updatecourse(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center h-screen">
                <FormField
                    control={form.control}
                    name="Id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Id</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Id" className="border border-black w-[500px]" {...field} />
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
                                <Input placeholder="Enter your Course Name" className="border border-black w-[500px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="flex mt-5 items-center text-center">Update</Button>

            </form>

        </Form>
    );


};