// Dominio de producción del sitio. Antes de migrar a beinsen.com se sirve
// desde dev.beinsen.com. Cambiar la env `NEXT_PUBLIC_SITE_URL` en el
// dashboard de Vercel cuando se haga la migración. El default cubre el
// desarrollo local y los previews de Vercel sin .env.
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://dev.beinsen.com';
