// Merch data — update price, stock, gallery images, and descriptions when final assets are ready.
export const MERCH = [
  {
    id: 'now-i-see-you-tshirt',
    name: "Now I see you, Now i don't T-Shirt",
    price: 'Rp 180.000',
    img: '/kaosputih.webp',
    type: 'Apparel',
    soldOut: true,
    description: "Official SSR SUPREMACY T-Shirt untuk rilisan “Now I see you, Now i don't”. Detail bahan, size chart, dan sablon bisa diupdate nanti.",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    gallery: [
       { label: 'Front View', img: '/kaosputih.webp' },
       { label: 'Back View', img: '/kaosputih.webp' },
       { label: 'Detail View', img: '/kaosputih.webp' },
    ],
  },
   {
     id: 'key-chain',
     name: 'Key Chain',
     price: 'Rp 45.000',
      img: '/keychain.webp',
     type: 'Accessory',
     soldOut: false,
     description: 'Official SSR SUPREMACY key chain. Detail material dan ukuran bisa diupdate nanti.',
     sizes: ['One Size'],
     gallery: [
        { label: 'Front View', img: '/keychain.webp' },
        { label: 'Back View', img: '/keychain.webp' },
        { label: 'Detail View', img: '/keychain.webp' },
     ],
   },
  {
    id: 'cassette-tape',
    name: 'Cassette Tape',
    price: 'Rp 90.000',
    img: '/placeholders/merch-3.svg',
    type: 'Music',
    soldOut: true,
    description: 'Official SSR SUPREMACY cassette tape. Foto produk akan ditambahkan nanti.',
    sizes: ['One Size'],
    gallery: [
      { label: 'Front View', img: '/placeholders/merch-3.svg' },
      { label: 'Back View', img: '/placeholders/merch-3.svg' },
      { label: 'Detail View', img: '/placeholders/merch-3.svg' },
    ],
  },
]

export function getMerchById(id) {
  return MERCH.find((item) => item.id === id)
}