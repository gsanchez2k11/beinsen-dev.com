import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Comparador Beinsen — Specs lado a lado de prensas transfer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div style={{ background: '#0a0a0a', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '72px 80px', position: 'relative', fontFamily: 'sans-serif' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,102,0,0.18) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #FF6600, #FF8533)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', color: '#FF6600', fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em' }}>
                    Comparador
                </div>
                <div style={{ fontSize: '72px', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '20px', fontStyle: 'italic' }}>
                    Compara hasta
                    <br />
                    <span style={{ color: '#FF6600' }}>3 Modelos</span>
                </div>
                <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.55)', fontWeight: 300, marginBottom: '40px', maxWidth: '700px' }}>
                    Specs lado a lado, fotos y precios para decidir sin dudar.
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(255,102,0,0.12)', border: '1px solid rgba(255,102,0,0.3)', borderRadius: '999px', color: '#FF6600', fontSize: '16px', fontWeight: 700 }}>
                    beinsen.com/comparar
                </div>
            </div>
        ),
        { ...size }
    )
}
