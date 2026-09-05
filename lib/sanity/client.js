import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  // useCdn=true: respuestas más rápidas y gratuitas para contenido público.
  // Next.js revalida cada 60s (ver revalidate en las consultas) así los
  // cambios del Studio se reflejan en el sitio sin necesidad de redeploy.
  useCdn: true,
})
