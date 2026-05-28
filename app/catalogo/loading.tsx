import { Skeleton } from "@/components/ui/skeleton";
import { Zap, Search, Settings2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background pb-24 overflow-x-hidden selection:bg-[#FF6600] selection:text-white">
            {/* Header Skeleton */}
            <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-[#FF6600]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="flex justify-center mb-8">
                        <Skeleton className="h-9 w-48 rounded-full" />
                    </div>
                    <div className="flex justify-center mb-6">
                        <Skeleton className="h-16 md:h-20 w-3/4 max-w-xl rounded-2xl" />
                    </div>
                    <div className="flex justify-center mb-12">
                        <Skeleton className="h-8 md:h-10 w-2/3 max-w-2xl rounded-xl" />
                    </div>
                </div>
            </div>

            {/* Advanced Filters Skeleton */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-20">
                <div className="bg-card/50 rounded-[2rem] border border-border/50 shadow-sm p-4 md:p-6 opacity-80 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="w-full md:w-1/3">
                            <Skeleton className="h-16 w-full rounded-2xl" />
                        </div>
                        <div className="hidden md:flex flex-col md:flex-row gap-6">
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Skeleton key={i} className="h-10 w-24 rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bento Grid Layout Skeleton */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={`flex flex-col h-full bg-card/60 rounded-[2rem] overflow-hidden border border-border/20 shadow-sm opacity-80 backdrop-blur-sm ${i === 1 ? 'md:col-span-2' : ''}`}
                        >
                            <div className={`relative overflow-hidden ${i === 1 ? 'aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'}`}>
                                <Skeleton className="w-full h-full rounded-none" />
                            </div>

                            <div className="p-8 flex flex-col flex-1 relative bg-gradient-to-br from-card/80 to-muted/10">
                                <div className="flex justify-between items-start mb-4">
                                    <Skeleton className="h-8 w-3/4 rounded-lg" />
                                    <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                                </div>

                                <Skeleton className="h-4 w-full mb-3 rounded-md" />
                                <Skeleton className="h-4 w-5/6 mb-6 rounded-md" />

                                <div className="mt-auto pt-6 border-t border-border/20 flex flex-wrap items-center gap-4">
                                    <Skeleton className="h-6 w-24 rounded-lg" />
                                    <Skeleton className="h-6 w-20 rounded-lg" />
                                    <div className="ml-auto">
                                        <Skeleton className="h-4 w-24 rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
