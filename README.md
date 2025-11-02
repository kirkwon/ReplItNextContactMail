# Contact Form App with Clerk Authentication

A **Next.js 14** application using the **App Router** architecture with **Clerk** authentication. This is a simple contact form where authenticated users can send messages via mailto links.

## 🚀 Features

- 🔐 **Secure Authentication** via Clerk
- 📧 **Contact Form** with mailto integration
- 🎨 **Modern UI** with custom CSS styling
- 📱 **Responsive Design**
- ✨ **Animated Components**
- 🔒 **Route Protection** with middleware

## 🛠️ Tech Stack

- **Next.js 14.2.7** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Clerk** - Authentication and user management
- **TailwindCSS** - Installed (but uses custom CSS)
- **Custom CSS** - Styling (not Tailwind despite dependency)

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with ClerkProvider and metadata
├── page.tsx            # Homepage with auth-gated contact form
└── globals.css         # Global styles

middleware.ts           # Clerk authentication middleware

public/
└── placeholder-image.png # Image asset for contact form
```

## ⚡ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**

   Create a `.env.local` file in the root directory with your Clerk keys:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   ```

   For testing, you can use Clerk's test keys from your Clerk dashboard.

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 🏗️ Architecture

### Authentication Flow

1. **Middleware Protection**: All routes are protected by default via `middleware.ts`
2. **Public Routes**: Configured in `middleware.ts:11` for specific public access
3. **Component Guards**: Uses Clerk's `<SignedIn>` and `<SignedOut>` components
4. **Contact Form**: Only visible to authenticated users

### Key Components

- **Root Layout** (`app/layout.tsx`): Defines metadata, wraps app in `ClerkProvider`, imports global styles
- **Homepage** (`app/page.tsx`): Client component with authentication gates showing contact form
- **Contact Form**: Collects name, email, and comments, generates mailto links to `kirkwon@gmail.com`

### Development Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Create production build
npm run start    # Start production server (port 3000)
npm run lint     # Run ESLint with Next.js rules
```

## 🔧 Configuration

### Clerk Setup

1. Create a [Clerk](https://clerk.com) account
2. Create a new application
3. Copy your API keys to `.env.local`
4. Configure your allowed origins for development

### App Configuration

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `tsconfig.json` | TypeScript config (strict mode disabled) |
| `next.config.js` | Next.js configuration (uses defaults) |
| `.eslintrc.json` | ESLint with `next/core-web-vitals` |
| `middleware.ts` | Clerk authentication at edge |
| `.env.local` | **Never commit** - contains Clerk keys |

## 📝 Usage

### For Unauthenticated Users

Users who haven't signed in will see a welcome screen with:
- Lock icon with floating animation
- Welcome message
- Feature highlights
- Sign-in prompt

### For Authenticated Users

Authenticated users can access the contact form with:
- Name field
- Email field
- Comments textarea
- Send button (generates mailto link)

The form creates an email with:
- **To**: kirkwon@gmail.com
- **Subject**: User's name
- **Body**: User's comments

## 🌐 Deployment

Configured for **Replit** deployment:

- **Build Command**: `npm run build`
- **Run Command**: `npm run start`
- **Port**: 3000
- **Hostname**: 0.0.0.0

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [App Router Documentation](https://nextjs.org/docs/app) - Next.js App Router guide
- [Clerk Documentation](https://clerk.com/docs) - Clerk authentication guide
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

## ⚠️ Known Issues

- TypeScript strict mode is disabled (see `tsconfig.json`)
- TailwindCSS installed but not actively used in code
- No test framework configured
- Old Pages Router files removed during migration

## 🔄 Migration History

This repository was migrated from **Pages Router** to **App Router**:

**Removed:**
- `pages/_app.tsx`
- `pages/index.tsx`
- `pages/api/hello.ts`
- `styles/Home.module.css`
- `styles/globals.css`

**Added:**
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `middleware.ts`
- Clerk authentication

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
