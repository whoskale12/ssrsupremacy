# SSR Supremacy

This project is a React-based application built with Vite. It utilizes various modern web technologies and libraries to deliver a dynamic user experience.

## Features

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool that provides an instant development server and bundles your code for production.
- **Framer Motion:** A production-ready motion library for React.
- **Lucide React:** A beautiful and consistent icon toolkit for React.
- **React Router DOM:** Declarative routing for React.js.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **PostCSS** and **Autoprefixer:** For processing CSS and adding vendor prefixes.

## Project Structure

The project follows a standard React application structure:

- `public/`: Static assets.
- `src/`: Main source code.
  - `src/components/`: Reusable React components.
  - `src/context/`: React context providers for global state management.
  - `src/data/`: Data files used in the application.
  - `src/hooks/`: Custom React hooks.
  - `src/pages/`: Page-level components, representing different views of the application.
  - `src/App.jsx`: The main application component.
  - `src/main.jsx`: Entry point of the React application.
  - `src/index.css`: Main CSS file, likely including Tailwind CSS imports.
- `scripts/`: Utility scripts for various tasks, such as image optimization.

## Installation and Setup

To get the project up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/whoskale12/ssrsupremacy.git
   cd ssrsupremacy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start a local development server, usually accessible at `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   This command bundles the application for production, creating optimized static assets in the `dist` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```
   This command serves the production build locally for testing.

## Scripts

- `scripts/convert_png_to_webp.py`: Converts PNG images to WebP format.
- `scripts/convert_to_webp.py`: Converts images to WebP format.
- `scripts/make_logo_transparent.py`: Script for making the logo transparent.
- `scripts/resize_logo.py`: Script for resizing the logo.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

(Add your license information here, e.g., MIT, Apache 2.0, etc.)