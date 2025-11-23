# Techovia Labs Website Guide

## Project Overview

- **Purpose**: Corporate website for Techovia Labs, showcasing services, tech stack, and contact information.
- **Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router DOM.
- **Entry Point**: `src/main.tsx`
- **Build Command**: `npm run build`

## Architecture

- **Routing**: Single-page application with anchor navigation (#home, #services, #techstack, #contact).
- **Styling**: Tailwind CSS with `darkMode: 'class'` strategy.
- **Theming**: CSS variables defined in `src/styles/theme.css` for consistent colors.
- **Animations**: Framer Motion for page transitions and interactive elements.
- **State Management**: Local state for forms and UI toggles.

## Key Sections

1.  **Homepage**: Hero with "Broken Code -> Fixed Solution" animation.
2.  **Services**: Grid layout with hover effects.
3.  **TechStack**: Carousel/Slider with mirror effects.
4.  **Contact**: Form and WhatsApp integration.

## Asset Management

- Images should be placed in `public/assets/` or `src/assets/` and imported.
- Use absolute paths `/assets/` for public assets.

## Development

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
