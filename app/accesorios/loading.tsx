import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <div className="bg-card border-b py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Skeleton className="h-12 w-3/4 max-w-md mb-4 rounded-xl" />
                    <Skeleton className="h-6 w-full max-w-2xl rounded-lg" />
                    <Skeleton className="h-6 w-3/4 max-w-lg mt-2 rounded-lg" />
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="flex flex-col glass-card rounded-2xl p-6"
                        >
                            <Skeleton className="w-12 h-12 rounded-xl mb-4" />
                            <Skeleton className="h-7 w-3/4 mb-2 rounded-lg" />
                            <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                                <Skeleton className="h-4 w-24 rounded-md" />
                                <Skeleton className="h-6 w-16 rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-muted/50 rounded-2xl flex items-start gap-4">
                    <Skeleton className="w-10 h-10 rounded-full shrink-0" />
                    <div className="w-full">
                        <Skeleton className="h-6 w-48 mb-2 rounded-lg" />
                        <Skeleton className="h-4 w-full mb-1 rounded-md" />
                        <Skeleton className="h-4 w-3/4 rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
}
