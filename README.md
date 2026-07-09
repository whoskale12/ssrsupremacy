# SSR Supremacy Website

Official website project for **SSR SUPREMACY**, an Emotional Pop-Punk / Hardcore band from West Java, Indonesia.

The site is built with React, Vite, Tailwind CSS, and React Router.

## Features

- Responsive band website
- Home page with hero/intro sections
- Profile page for band information
- Music page with Bandcamp album embed
- Store page with merch cards
- Custom dark gritty visual style
- Reusable component structure
- Static data configuration for band info, members, merch, and links

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- PostCSS / Autoprefixer

## Project Structure

```txt
src/
├── components/
│   ├── Footer.jsx
│   ├── GrainOverlay.jsx
│   ├── Icons.jsx
│   ├── Marquee.jsx
│   ├── MemberCard.jsx
│   ├── MerchCard.jsx
│   ├── Navbar.jsx
│   ├── PageHeader.jsx
│   └── SectionHeading.jsx
├── data/
│   ├── members.js
│   ├── merch.js
│   └── site.js
├── pages/
│   ├── Home.jsx
│   ├── Music.jsx
│   ├── NotFound.jsx
│   ├── Profile.jsx
│   └── Store.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Main Data Files

Update site content from these files:

- `src/data/site.js`  
  Band name, origin, genre, album info, navigation, social links.

- `src/data/members.js`  
  Band member data.

- `src/data/merch.js`  
  Store merchandise data.

## Current Status

The website structure and visual layout are already built.

Current pending feature:

- Add-to-cart/order functionality for the Store page.

See [`memories.md`](./memories.md) for detailed progress notes.

## Repository

GitHub repository:

https://github.com/whoskale12/ssrsupremacy.git

## Notes

- `node_modules/` and `dist/` are intentionally ignored by Git.
- Store checkout is not live yet.
- Current merch images use placeholder SVG files.
- Real band images are available in the project and can be wired into the site as needed.

## License

Private project for SSR SUPREMACY.