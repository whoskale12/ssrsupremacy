// DUMMY merch — replace gallery images, price, stock, and descriptions when real data is ready.
export const MERCH = [
  {
    id: 'tee-nisynd',
    name: 'Now I See You Tee',
    price: 'Rp 180.000',
    img: '/placeholders/merch-1.svg',
    type: 'Apparel',
    soldOut: false,
    description: 'Dummy description untuk kaos SSR Supremacy. Nanti bisa diganti detail bahan, cutting, dan sablon.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    gallery: [
      { label: 'Front View', img: '/placeholders/merch-1.svg' },
      { label: 'Back View', img: '/placeholders/merch-1.svg' },
      { label: 'Detail View', img: '/placeholders/merch-1.svg' },
    ],
  },
  {
    id: 'hoodie-grief',
    name: 'Grief Hoodie',
    price: 'Rp 350.000',
    img: '/placeholders/merch-2.svg',
    type: 'Apparel',
    soldOut: false,
    description: 'Dummy description untuk hoodie. Isi detail bahan fleece, size chart, dan detail print nanti.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    gallery: [
      { label: 'Front View', img: '/placeholders/merch-2.svg' },
      { label: 'Back View', img: '/placeholders/merch-2.svg' },
      { label: 'Detail View', img: '/placeholders/merch-2.svg' },
    ],
  },
  {
    id: 'cassette',
    name: 'NISYND Cassette',
    price: 'Rp 90.000',
    img: '/placeholders/merch-3.svg',
    type: 'Music',
    soldOut: false,
    description: 'Dummy description untuk rilisan kaset. Nanti bisa ditambah tracklist dan packaging detail.',
    sizes: ['One Size'],
    gallery: [
      { label: 'Front View', img: '/placeholders/merch-3.svg' },
      { label: 'Back View', img: '/placeholders/merch-3.svg' },
      { label: 'Detail View', img: '/placeholders/merch-3.svg' },
    ],
  },
  {
    id: 'sticker',
    name: 'Sticker Pack (5)',
    price: 'Rp 45.000',
    img: '/placeholders/merch-4.svg',
    type: 'Accessory',
    soldOut: false,
    description: 'Dummy description untuk sticker pack. Nanti bisa diganti ukuran dan isi desain.',
    sizes: ['One Size'],
    gallery: [
      { label: 'Front View', img: '/placeholders/merch-4.svg' },
      { label: 'Back View', img: '/placeholders/merch-4.svg' },
      { label: 'Detail View', img: '/placeholders/merch-4.svg' },
    ],
  },
  {
    id: 'longsleeve',
    name: 'Logo Longsleeve',
    price: 'Rp 220.000',
    img: '/placeholders/merch-5.svg',
    type: 'Apparel',
    soldOut: true,
    description: 'Dummy description untuk longsleeve. Item ini masih sold out.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    gallery: [
      { label: 'Front View', img: '/placeholders/merch-5.svg' },
      { label: 'Back View', img: '/placeholders/merch-5.svg' },
      { label: 'Detail View', img: '/placeholders/merch-5.svg' },
    ],
  },
  {
    id: 'vinyl',
    name: 'Limited 7" Vinyl',
    price: 'Rp 400.000',
    img: '/placeholders/merch-6.svg',
    type: 'Music',
    soldOut: false,
    description: 'Dummy description untuk vinyl limited. Nanti bisa ditambah detail pressing dan tracklist.',
    sizes: ['One Size'],
    gallery: [
      { label: 'Front View', img: '/placeholders/merch-6.svg' },
      { label: 'Back View', img: '/placeholders/merch-6.svg' },
      { label: 'Detail View', img: '/placeholders/merch-6.svg' },
    ],
  },
]

export function getMerchById(id) {
  return MERCH.find((item) => item.id === id)
}