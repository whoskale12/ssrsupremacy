// Global site config — edit these when real data is ready.
export const BAND = {
  name: 'SSR SUPREMACY',
  origin: 'West Java, Indonesia',
  genre: 'Emotional Pop-Punk / Hardcore',
  label: 'Simplefun Records',
  album: {
    title: 'Now I See You, Now I Don’t',
    year: '2026',
    tracks: [
      { n: 1, title: 'No Better Self', len: '04:38' },
      { n: 2, title: 'Dreamcreeper', len: '03:00' },
    ],
  },
}

export const LINKS = {
  bandcamp: 'https://simplefunrecords.bandcamp.com/album/now-i-see-you-now-i-dont',
  instagram: 'https://www.instagram.com/ssrsupremacy_',
  youtube: '#', // placeholder
  email: 'mailto:booking@ssrsupremacy.com', // placeholder
}

// Bandcamp album id parsed from the embed share code (update with the real id if it changes).
export const BANDCAMP_ALBUM_ID = '4225026008'

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Profile' },
  { to: '/music', label: 'Music' },
  { to: '/store', label: 'Store' },
]
