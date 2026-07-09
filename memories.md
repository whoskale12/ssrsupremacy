# SSR Supremacy - Progress Notes

## Project Overview
React + Vite web application for **SSR SUPREMACY** band (West Java, Indonesia).
Genre: Emotional Pop-Punk / Hardcore
Label: Simplefun Records
Album: "Now I See You, Now I Don't" (2026)

## Current Status

### ✅ Completed
- [x] Project initialization with Vite + React
- [x] Tailwind CSS styling setup
- [x] React Router navigation structure
  - Home page
  - Profile page
  - Music page (with Bandcamp embed)
  - Store page (with merch grid)
  - 404 Not Found page
- [x] Component structure established
  - Navbar with navigation
  - Footer
  - GrainOverlay (texture effect)
  - MerchCard, MemberCard components
  - PageHeader, SectionHeading components
  - Icons (social links)
  - Marquee component
- [x] Git repository initialization
- [x] Pushed initial commit to GitHub: https://github.com/whoskale12/ssrsupremacy.git

### 🚧 In Progress / TODO
- [ ] **Add-to-Cart Functionality** (Next Priority)
  - MerchCard button is wired but not functional
  - Need: Cart context/state management
  - Need: Cart display component
  - Need: Checkout UI or order form
  
### 📋 Future Features
- [ ] User authentication/accounts
- [ ] Payment integration
- [ ] Order tracking
- [ ] Email notifications for orders
- [ ] Admin panel for merch management
- [ ] Email contact form
- [ ] Comments/Fan messages

## Tech Stack
- **Frontend**: React 18.3.1
- **Build**: Vite 5.4.8
- **Styling**: Tailwind CSS 3.4.13
- **Routing**: React Router DOM 6.26.2
- **Design**: Custom brand styling (bone, blood, ink, olive colors)

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MerchCard.jsx
│   ├── MemberCard.jsx
│   ├── PageHeader.jsx
│   └── ...
├── pages/               # Page components
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Music.jsx
│   ├── Store.jsx
│   └── NotFound.jsx
├── data/                # Static data
│   ├── site.js          # Band info, links, nav config
│   ├── members.js
│   └── merch.js
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Key Design Elements
- **Colors**: bone (primary), blood (accent), ink (dark), olive (secondary)
- **Typography**: Heavy font for headings, mono for metadata
- **Borders**: Hard borders (2px solid) throughout
- **Aesthetic**: Gritty, DIY band website feel

## Notes
- Merch data currently uses placeholder prices in Rupiah (Rp)
- Images use SVG placeholders from `/public/placeholders/`
- Real band photos available: `foto band 1.jpg`, `foto band 2.jpg`
- Store currently shows preview message directing to Instagram DM for orders