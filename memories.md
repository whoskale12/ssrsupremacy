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
   - Music page
   - Store page
   - Merch detail page
   - Cart page
   - 404 Not Found page
- [x] Component structure established
   - Navbar with navigation
   - Footer with transparent logo
   - GrainOverlay (texture effect)
   - MerchCard, MemberCard components
   - PageHeader, SectionHeading components
   - Icons (Instagram, Bandcamp, YouTube)
   - Marquee component
- [x] Git repository initialization
- [x] Pushed project to GitHub: https://github.com/whoskale12/ssrsupremacy.git
- [x] Added real band/brand assets
   - Transparent `LOGO.png`
   - Band photos
   - Album cover: `Cover Maxi-Single.jpg`
   - T-Shirt image: `kaosputih.png`
   - Key Chain image: `keychain.png`
- [x] Music page updated with album cover and Bandcamp link
- [x] Spotify references removed from the site
- [x] Store merchandise reduced to 3 products:
   - "Now I see you, Now i don't T-Shirt"
   - Key Chain
   - Cassette Tape
- [x] All merch products marked as sold out
- [x] Contact email updated to `ssrsupremacy@gmail.com`
- [x] WhatsApp checkout integration completed
    - Real WhatsApp number: +62 857-1163-1027
    - Removed dummy WhatsApp number text
    - Order form with buyer details (name, phone, address, notes)
    - Cart management (add, remove, update quantity)
- [x] Key Chain status updated to available (soldOut: false)
- [x] Dual checkout feature implemented (QRIS + WhatsApp)
    - Two checkout options: "CHECKOUT VIA QRIS" and "CHECKOUT VIA WHATSAPP"
    - QRIS modal with payment instructions and confirmation checkbox
    - "Lanjut ke WhatsApp" button in modal (disabled until confirmation)
    - Structure ready for Midtrans payment gateway integration
    - lucide-react dependency added for modal close button icon

### 🚧 In Progress / TODO
- [ ] Add final Cassette Tape product photo when asset is ready
- [ ] Replace placeholder YouTube link when official channel/video URL is ready
- [ ] Final copy/content review before full public release

### 📋 Future Features
- [ ] Re-enable merch availability when stock is ready
- [ ] Payment integration
- [ ] Order tracking
- [ ] Email notifications for orders
- [ ] Admin panel for merch management
- [ ] Email contact form
- [ ] Comments/Fan messages

## Tech Stack
- **Frontend**: React 18
- **Build**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 6
- **Design**: Custom brand styling (bone, blood, ink, olive colors)

## Project Structure
```txt
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MerchCard.jsx
│   ├── MemberCard.jsx
│   ├── PageHeader.jsx
│   └── ...
├── context/             # App state
│   └── CartContext.jsx
├── pages/               # Page components
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Music.jsx
│   ├── Store.jsx
│   ├── MerchDetail.jsx
│   ├── Cart.jsx
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
- Current contact email: `ssrsupremacy@gmail.com`
- Social links currently include Instagram, Bandcamp, and YouTube only.
- Spotify has been removed from the site.
- Merch data uses Rupiah (Rp) prices.
- All merch is currently marked sold out.
- Cassette Tape still uses placeholder image until final photo is provided.
- Real band photos available: `foto band 1.jpg`, `foto band 2.jpg`