import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Download, FileText, User, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getArticle, getArticleSlugs, getAllArticles, CATEGORY_LABELS } from "@/lib/articles";
import { planchasData, allAccessoriesData, allConsumablesData } from "@/data/products";
import { enrichWithLocalImages } from "@/lib/productImages";
import { enrichWithLocalDownloads } from "@/lib/productDownloads";
import { getLocalized } from "@/lib/i18n";
import { CatalogProductCard } from "@/components/CatalogProductCard";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
    return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticle(slug);
    if (!article) return { title: "Artículo no encontrado | Beinsen" };
    const url = `${SITE_URL}/aprende/${slug}`;
    return {
        title: `${article.title} | Beinsen`,
        description: article.excerpt,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: article.title,
            description: article.excerpt,
            url: `${SITE_URL}/aprende/${slug}`,
            // si hay hero image del artículo úsala; si no, Next.js usa el opengraph-image dinámico
            ...(article.heroImage ? { images: [{ url: article.heroImage, width: 1200, height: 630, alt: article.title }] } : {}),
            type: "article",
            publishedTime: article.publishedAt,
            authors: article.author ? [article.author] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            // si no hay heroImage, Next.js usa el opengraph-image.tsx por defecto
            ...(article.heroImage ? { images: [article.heroImage] } : {}),
        },
    };
}

const mdxComponents = {
    h2: (props: any) => <h2 className="text-3xl md:text-4xl font-black mt-16 mb-6 tracking-tight" {...props} />,
    h3: (props: any) => <h3 className="text-2xl md:text-3xl font-black mt-12 mb-4 tracking-tight" {...props} />,
    p: (props: any) => <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground font-light" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground font-light" {...props} />,
    li: (props: any) => <li className="text-lg leading-relaxed" {...props} />,
    a: (props: any) => <a className="text-[#FF6600] hover:underline font-bold" {...props} />,
    strong: (props: any) => <strong className="text-foreground font-black" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-[#FF6600] pl-6 my-8 italic text-muted-foreground" {...props} />,
    code: (props: any) => <code className="bg-muted px-2 py-0.5 rounded font-mono text-sm" {...props} />,
    pre: (props: any) => <pre className="bg-muted p-6 rounded-2xl overflow-x-auto mb-6" {...props} />,
};

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticle(slug);
    if (!article) notFound();

    const allSourceItems = [...planchasData, ...allAccessoriesData, ...allConsumablesData];
    const relatedProducts = (article.products || [])
        .map((s) => allSourceItems.find((p) => p.slug === s))
        .filter(Boolean)
        .map((p: any) => enrichWithLocalDownloads(enrichWithLocalImages(p)));

    const relatedDownloads = (article.downloads || []).flatMap((productSlug) => {
        const item: any = relatedProducts.find((p: any) => p.slug === productSlug)
            ?? allSourceItems.find((p: any) => p.slug === productSlug);
        if (!item) return [];
        const enriched: any = enrichWithLocalDownloads(item);
        return enriched.downloads || [];
    });

    const allOthers = getAllArticles().filter((a) => a.slug !== article.slug);
    const otherArticles = [
        ...allOthers.filter((a) => a.category === article.category),
        ...allOthers.filter((a) => a.category !== article.category),
    ].slice(0, 3);

    const articleUrl = `${SITE_URL}/aprende/${article.slug ?? ""}`;

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        image: article.heroImage
            ? (article.heroImage.startsWith('http') ? article.heroImage : `${SITE_URL}${article.heroImage}`)
            : `${SITE_URL}/opengraph-image`,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        author: article.author
            ? { "@type": "Person", name: article.author, jobTitle: article.authorRole || "Ingeniero Beinsen" }
            : { "@type": "Organization", name: "Beinsen", url: SITE_URL },
        publisher: {
            "@type": "Organization",
            name: "Beinsen",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/logo.png` },
        },
        url: articleUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Aprende", item: `${SITE_URL}/aprende` },
            { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
        ],
    };

    return (
        <article className="min-h-screen bg-background pb-24 selection:bg-[#FF6600] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([blogPostingSchema, breadcrumbSchema]) }}
            />
            {/* Hero */}
            <header className="relative pt-32 pb-16 overflow-hidden border-b border-border/40">
                {article.heroImage && (
                    <div className="absolute inset-0 opacity-10">
                        <Image src={article.heroImage} alt="" fill className="object-cover blur-2xl scale-110" />
                    </div>
                )}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/aprende"
                        className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-8"
                    >
                        <ArrowLeft size={16} /> Volver al centro
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">
                        <span className="text-[#FF6600]">{CATEGORY_LABELS[article.category].es}</span>
                        <span>·</span>
                        <span>{new Date(article.publishedAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
                        {article.readingMinutes && (
                            <>
                                <span>·</span>
                                <span className="flex items-center gap-1"><Clock size={10} /> {article.readingMinutes} min lectura</span>
                            </>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-6">
                        {article.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                        {article.excerpt}
                    </p>
                    {article.author && (
                        <div className="mt-10 flex items-center gap-3 text-sm">
                            <div className="w-10 h-10 rounded-full bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                                <User size={18} />
                            </div>
                            <div>
                                <div className="font-black">{article.author}</div>
                                {article.authorRole && <div className="text-muted-foreground text-xs">{article.authorRole}</div>}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero image */}
            {article.heroImage && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-border/50 shadow-xl bg-white">
                        <Image src={article.heroImage} alt={article.title} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain scale-125" priority />
                    </div>
                </div>
            )}

            {/* Video */}
            {article.videoUrl && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-xl">
                        <iframe src={article.videoUrl} title={article.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <MDXRemote source={article.content} components={mdxComponents} />
            </div>

            {/* Downloads */}
            {relatedDownloads.length > 0 && (
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground mb-6">Descargas</h3>
                    <div className="space-y-4">
                        {relatedDownloads.map((dl: any, i: number) => (
                            <a
                                key={i}
                                href={dl.url}
                                className="flex items-center justify-between p-6 bg-card border border-border/50 rounded-2xl hover:border-[#FF6600] transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                                        <FileText size={20} />
                                    </div>
                                    <span className="font-bold">{getLocalized(dl.label, "es")}</span>
                                </div>
                                <Download size={18} className="text-muted-foreground group-hover:text-[#FF6600] transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Related products */}
            {relatedProducts.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground mb-8">Productos relacionados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedProducts.map((p: any, i: number) => (
                            <CatalogProductCard key={p.id} item={p} locale="es" index={i} />
                        ))}
                    </div>
                </div>
            )}

            {/* Other articles */}
            {otherArticles.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-border/40">
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground mb-8">Sigue aprendiendo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherArticles.map((a) => (
                            <Link
                                key={a.slug}
                                href={`/aprende/${a.slug}`}
                                className="group p-6 bg-card border border-border/40 rounded-3xl hover:border-[#FF6600]/40 transition-all"
                            >
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6600] mb-3">
                                    {CATEGORY_LABELS[a.category].es}
                                </div>
                                <h4 className="font-black text-lg mb-2 group-hover:text-[#FF6600] transition-colors">{a.title}</h4>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{a.excerpt}</p>
                                <span className="inline-flex items-center gap-2 text-[#FF6600] text-xs font-black uppercase tracking-widest">
                                    Leer <ArrowRight size={12} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
