# Prep Me Client

## Overview

The **Prep Me Client** is a modern frontend application built with Next.js 14, offering server-side rendering, static site generation, and a powerful developer experience.

## Project Structure
```
frontend/
├── src/
│ ├── app/
│ │ ├── (root)/
│ │ │ └── page.tsx
│ │ ├── layout.tsx
│ │ └── globals.css
│ ├── components/
│ │ ├── ui/
│ │ │ ├── accordion.tsx
│ │ │ ├── button.tsx
│ │ │ ├── card.tsx
│ │ │ └── carousel.tsx
│ │ └── landing-page/
│ │ ├── sections/
│ │ ├── Feature.tsx
│ │ └── InfoCard.tsx
│ ├── lib/
│ │ └── utils.ts
│ └── providers/
│ └── index.tsx
├── public/
│ ├── background/
│ ├── icons/
│ └── images/
└── config files
```

```bash
 The structure follows Next.js 15 conventions with:
- `src/app`: Contains the application's pages and layouts using the App Router
- `src/components`: Reusable UI components and page-specific components
- `src/lib`: Utility functions and shared logic
- `src/providers`: Context providers and global state management
- `public`: Static assets like images and icons
- Configuration files at the root level
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone [[repository-url]](https://github.com/Prepme-Academy/dapp.git)
   ```

2. Install dependencies:

```bash
  npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Technology Stack

- Framework: Next.js 14
- Language: TypeScript
- Styling: Tailwind CSS
- State Management: TanStack Query
- Components: Custom UI components with shadcn/ui
- Linting: ESLint
- Formatting: Prettier

## Key Features

- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- File-based routing
- Optimized image handling
- Built-in performance optimization