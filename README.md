This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Tema y Diseño

Este proyecto utiliza un sistema de diseño personalizado con los siguientes colores principales:

- Principal: `#634AFF` - Color principal de la marca
- Negro: `#242424` - Color base para textos y fondos oscuros
- Complementarios:
  - Marrón: `#A67C52` - Para elementos relacionados con mascotas
  - Beige: `#F5E6D3` - Para fondos suaves
  - Sage: `#A8C7B5` - Para elementos naturales
  - Coral: `#FF8D7E` - Para acentos

Para utilizar estos colores, puedes usar las clases de Tailwind personalizadas:

```html
<div class="bg-primary text-dark">
  <div class="bg-pet-brown text-pet-beige"></div>
</div>
```
