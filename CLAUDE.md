# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 14** application using the **App Router** architecture with **Clerk** authentication. The application is a simple contact form that requires user authentication - unauthenticated users see sign-in options, while authenticated users can access a contact form that generates `mailto:` links.

**Key Technologies:**
- Next.js 14.2.7 with App Router (`app/` directory)
- React 18.3.1 with TypeScript
- Clerk for authentication
- TailwindCSS (installed but not actively used in code)

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
# Copy .env.local and add your Clerk keys

# Start development server
npm run dev
# Opens on http://localhost:3000

# Build for production
npm run build

# Start production server
npm run start
```

## Development Commands

Available npm scripts in `package.json:5-9`:
- `npm run dev` - Start development server (port 3000, hostname 0.0.0.0)
- `npm run build` - Create production build
- `npm run start` - Start production server (port 3000, hostname 0.0.0.0)
- `npm run lint` - Run ESLint with Next.js rules

**Note:** No test framework is configured. To add tests, consider setting up Jest, Vitest, or Cypress.

## Architecture

### Directory Structure

```
app/
├── layout.tsx        # Root layout with ClerkProvider
├── page.tsx          # Homepage with authentication-gated contact form
└── globals.css       # Global styles

middleware.ts         # Clerk authentication middleware
```

### Key Components

- **Root Layout** (`app/layout.tsx:1-30`): Defines metadata, wraps app in `ClerkProvider`, imports global styles
- **Homepage** (`app/page.tsx:1-73`): Client component with auth gates (`SignedIn`, `SignedOut`) showing contact form to authenticated users
- **Middleware** (`middleware.ts:1-15`): Configures Clerk authentication with custom matcher for public routes
- **Environment** (`.env.local`): Contains Clerk test keys (pk_test_*, sk_test_*)

### Authentication Flow

1. Middleware protects all routes by default
2. Public routes are configured in `middleware.ts:11`
3. `SignedIn`/`SignedOut` components from Clerk conditionally render UI based on auth state
4. Contact form only visible to authenticated users

### Important Code Patterns

- **Client Components**: Marked with `"use client"` directive (`app/page.tsx:1`)
- **Server Components**: Default in App Router - layout and metadata are server-side
- **Metadata**: Exported from layout for page metadata
- **Styling**: Uses custom CSS (not Tailwind despite dependency)

## Configuration

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `tsconfig.json` | TypeScript config (strict mode **disabled**) |
| `next.config.js` | Minimal config (empty object - uses defaults) |
| `.eslintrc.json` | ESLint with `next/core-web-vitals` |
| `middleware.ts` | Clerk authentication at edge |
| `.env.local` | **Never commit** - contains Clerk test keys |

## Contact Form Details

The contact form (`app/page.tsx:45-73`):
- Collects: Name, Email, Comments
- Generates `mailto:` link to `kirkwon@gmail.com`
- No backend processing - all client-side
- Uses standard HTML form elements with proper labels

## Deployment

Configured for **Replit** deployment:
- `.replit` file includes deployment configuration
- Build command: `npm run build`
- Run command: `npm run start`
- Port: 3000, Hostname: 0.0.0.0

## Known Issues

- **README.md is outdated**: References old Pages Router structure (`pages/index.tsx`, `pages/api/hello.ts`) that no longer exists
- **Tailwind not used**: Installed as dependency but code uses custom CSS
- **TypeScript strict mode disabled**: Consider enabling for better type safety
- **No test coverage**: No testing framework configured
- **Outdated API routes**: Old `pages/api/hello.ts` was removed during migration

## Migration History

This repository was migrated from **Pages Router** to **App Router**:
- **Removed**: `pages/_app.tsx`, `pages/index.tsx`, `pages/api/hello.ts`, `styles/Home.module.css`, `styles/globals.css`
- **Added**: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `middleware.ts`
- **Changes**: Layout moved to `app/layout.tsx`, page became client component, added Clerk authentication

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public test key
- `CLERK_SECRET_KEY` - Clerk secret test key

For testing, use Clerk's test keys. **Never commit `.env.local` to production.**