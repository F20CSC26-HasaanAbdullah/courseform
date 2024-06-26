import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface FormWrapperProps {
    children: React.ReactNode;
    title: string;
    description?: string;
}

export const FormWrapper = ({ children, title, description }: FormWrapperProps) => {
    return (
        <Card className="flex flex-col mt-5 items-center justify-center w-[800px] h-[800px]  border border-black">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}
