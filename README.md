<div align="center">
<samp>

# Next-Template-V3

</samp>
</div>

## Content

- Next.js 13
- Strictest TypeScript
- ESLint
- Prettier
- TailwindCSS
- daisyUI
- Jotai
- Storybook
- Vitest
- zod
- lucide-react
- uuid
- use-media

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Rules

### Directory Structure

```bash
src/
├── __tests__
│   └── setup.ts
├── app
│   ├── globals.css
│   ├── head.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── base # generic ui
│   │   ├── atoms
│   │   │   ├── Button.tsx
│   │   │   └── Button.stories.tsx
│   │   └── molecules
│   ├── feature # domain
│   │   └── user
│   │       ├── atoms
│   │       │   ├── UserButton.tsx # naming follows BCD Design
│   │       │   └── UserButton.stories.tsx
│   │       ├── molecules
│   │       ├── hooks # local hook
│   │       ├── user.constants.ts # local constants
│   │       └── user.types.ts # local types
│   ├── functional
│   └── page
├── constants # generic constants
│   └── media.ts
├── hooks # generic constants
│   └── useMedia.ts
├── libs # library setting
├── providers
├── stores # jotai
├── types # generic types
└── utils # generic utilities
```

### Dependence

<div align="center">
<img src="https://user-images.githubusercontent.com/62370527/218809396-f67603b8-b26a-4e9c-8827-133a2d1952e3.png" alt="" title="image of dependence">
</div>

Dependency rules between directories. If it's below you or next to you, you can import it.

Stores are used within feature and cannot be used within base or functional.

## Reference

https://tech-blog.rakus.co.jp/entry/20230208/frontend

https://zenn.dev/yoshiko/articles/99f8047555f700

https://qiita.com/misuken/items/19f9f603ab165e228fe1
