import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <section className="relative overflow-hidden bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <Skeleton className="h-8 w-48 rounded-full" />
                            <Skeleton className="h-20 max-w-xl rounded-2xl" />
                            <Skeleton className="h-16 max-w-lg rounded-xl" />
                            <div className="flex gap-4 pt-4">
                                <Skeleton className="h-14 w-64 rounded-xl" />
                                <Skeleton className="h-14 w-48 rounded-xl" />
                            </div>
                        </div>
                        <div className="relative">
                            <Skeleton className="aspect-square md:aspect-[4/3] rounded-3xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
