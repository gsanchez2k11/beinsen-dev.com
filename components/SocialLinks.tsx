import { Facebook, Instagram } from "lucide-react";

const NETWORKS = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/beinsenoficial",
        icon: Instagram,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/beinsenoficial",
        icon: Facebook,
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@beinsenoficial",
        icon: TikTokIcon,
    },
];

interface SocialLinksProps {
    size?: number;
    className?: string;
    itemClassName?: string;
}

export function SocialLinks({
    size = 20,
    className = "",
    itemClassName = "",
}: SocialLinksProps) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {NETWORKS.map(({ name, href, icon: Icon }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Beinsen en ${name}`}
                    title={name}
                    className={`text-muted-foreground hover:text-[#FF6600] transition-colors ${itemClassName}`}
                >
                    <Icon size={size} />
                </a>
            ))}
        </div>
    );
}

// TikTok no está en lucide-react — icono SVG oficial monocromo que hereda el color
function TikTokIcon({ size = 20 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.79A8.16 8.16 0 0 0 21.3 10.4V7a4.85 4.85 0 0 1-1.71-.31Z" />
        </svg>
    );
}
