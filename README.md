# 2FA Input Component

A modern, accessible two-factor authentication input component built with Svelte, TypeScript, and TailwindCSS.

![2FA Input Demo](demo.gif)

## Features

- 🎯 6-digit code input with automatic focus management
- ⌨️ Full keyboard navigation support
- 📋 Clipboard paste support
- 🎨 Smooth animations and visual feedback
- ♿ Accessibility-friendly
- 📱 Responsive design
- 🔒 Input validation

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/rahulserver/svelte-2fa.git
cd svelte-2fa
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Type Checking

```bash
npm run check
# or
yarn check
```

## Development

The project uses:
- Svelte 5
- TypeScript
- Vite
- TailwindCSS
- Vitest for testing

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Button.svelte
│   ├── InputField.svelte
│   └── LockIcon.svelte
├── stores/            # State management
│   └── lockStore.ts
├── routes/            # Page components
│   └── Card.svelte
└── App.svelte         # Root component
```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
