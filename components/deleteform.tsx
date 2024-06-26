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
import { Deletecourse } from "@/actions/courseserver";


export const DeleteSchema = z.object({
    Id: z.string().nonempty(),
  
})

export const Deleteform = () => {
    const form = useForm<z.infer<typeof DeleteSchema>>({
        resolver: zodResolver(DeleteSchema),
        defaultValues: {
            Id: " ",
            
        },
    })

    function onSubmit(values: z.infer<typeof DeleteSchema>) {

        console.log(values)
        Deletecourse(values)
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
                <Button type="submit" className="flex mt-5 items-center text-center">Delete</Button>
            
            </form>
            
        </Form>
    );


};