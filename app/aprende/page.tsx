import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { getAllArticles, CATEGORY_LABELS, type ArticleCategory } from "@/lib/articles";

export const metadata = {
    title: "Aprende | Beinsen",
    description: "Guías, técnica, mantenimiento y troubleshooting de planchas térmicas Beinsen por nuestro equipo de ingeniería.",
};

export default function AprendeIndex() {
    const articles = getAllArticles();

    // Group by category for a simple taxonomy view
    const byCategory = new Map<ArticleCategory, typeof articles>();
    for (const a of articles) {
        const arr = byCategory.get(a.category) || [];
        arr.push(a);
        byCategory.set(a.category, arr);
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 selection:bg-[#FF6600] selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-[#FF6600]/10 text-[#FF6600] text-xs font-black uppercase tracking-[0.2em] mb-8 border border-[#FF6600]/20">
                        <BookOpen size={14} /> Centro de Aprendizaje
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">
                        Aprende con Beinsen
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                        Guías, troubleshooting y deep dives técnicos escritos por nuestro equipo de ingeniería.
                    </p>
                </header>

                {articles.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                        <p>Aún no hay artículos publicados.</p>
                    </div>
                ) : (
                    <div className="space-y-20">
                        {Array.from(byCategory.entries()).map(([cat, list]) => (
                            <section key={cat}>
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#FF6600]">
                                        {CATEGORY_LABELS[cat].es}
                                    </h2>
                                    <div className="h-px flex-1 bg-border/40" />
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                                        {list.length} {list.length === 1 ? "artículo" : "artículos"}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {list.map((a) => (
                                        <Link
                                            key={a.slug}
                                            href={`/aprende/${a.slug}`}
                                            className="group flex flex-col bg-card border border-border/40 rounded-3xl overflow-hidden hover:border-[#FF6600]/40 hover:shadow-2xl hover:shadow-[#FF6600]/10 transition-all"
                                        >
                                            <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                                                {a.heroImage ? (
                                                    <Image
                                                        src={a.heroImage}
                                                        alt={a.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                                                        <BookOpen size={40} className="text-muted-foreground/30" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-6 flex flex-col gap-3 flex-1">
                                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/70">
                                                    <span>{CATEGORY_LABELS[a.category].es}</span>
                                                    {a.readingMinutes && (
                                                        <>
                                                            <span>·</span>
                                                            <span className="flex items-center gap-1"><Clock size={10} /> {a.readingMinutes} min</span>
                                                        </>
                                                    )}
                                                </div>
                                                <h3 className="font-black text-xl tracking-tight leading-tight group-hover:text-[#FF6600] transition-colors">
                                                    {a.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                                                    {a.excerpt}
                                                </p>
                                                <span className="inline-flex items-center gap-2 text-[#FF6600] text-xs font-black uppercase tracking-widest mt-2">
                                                    Leer <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
