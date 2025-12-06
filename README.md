# DevAsign Web - React Website

A modern, responsive React website built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - Currently using v25.2.1
- **npm** (v8 or higher) - Currently using v11.6.2

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install all the required packages including:
- React and React DOM
- TypeScript and type definitions
- Vite and plugins
- Radix UI components
- Tailwind CSS utilities
- And other dependencies

### 2. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000/` and automatically open in your default browser.

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` directory.

## 📁 Project Structure

```
devasignweb/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable React components
│   ├── imports/         # SVG paths and imports
│   ├── styles/          # Additional styles
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript config for Node
├── package.json         # Project dependencies
└── README.md           # This file
```

## 🎨 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI Components** - Built with Radix UI primitives
- **Type Safety** - Full TypeScript support
- **Fast Development** - Hot Module Replacement (HMR) with Vite
- **Optimized Build** - Production-ready builds with code splitting

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## 🌐 Development Server

The dev server runs on port 3000 by default and includes:
- Hot Module Replacement (HMR)
- Fast refresh for React components
- Automatic browser opening
- Error overlay

## 📝 Notes

- The project uses custom font families (Geist Mono) - ensure these are loaded properly
- Image assets are aliased in `vite.config.ts` for easy imports
- Path alias `@/` is configured to point to the `src` directory

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can change it in `vite.config.ts`:
```typescript
server: {
  port: 3001, // Change to any available port
  open: true,
}
```

### Module Not Found
If you encounter module errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Ensure all type definitions are installed:
```bash
npm install --save-dev @types/react @types/react-dom @types/node
```

## 📄 License

© 2025 DevAsign, Inc.

---

**Happy Coding! 🚀**