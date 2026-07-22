// Merch data — update price, stock, gallery images, and descriptions when final assets are ready.
export const MERCH = [
  {
    id: 'kaos-cover-hitam',
    name: 'SSR SUPREMACY - Now I See You, Now I Don\'t (white)',
    price: 'Rp 180.000',
    img: '/rabbitwhite/kaosputih.jpeg',
    type: 'Apparel',
    soldOut: false,
    description: 'SSR SUPREMACY - Now I See You, Now I Don\'t (white)\n\nIntroducing our new maxi - single "Now I See You, Now I Don\'t". we celebrate with newest article from SSR SUPREMACY designed by Jayiesm.\n\n✓ Size: S - XXL Product\n✓ T-Shirt Color: Black and White\n✓ Fabric: Stitch Supply 16s Cotton\n✓ Graphic: Plastisol High-quality Sablon Print',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    gallery: [
      { label: 'Front View', img: '/rabbitwhite/detaildepan.webp' },
      { label: 'Back View', img: '/rabbitwhite/detailbelakang.webp' },
      { label: 'Detail View', img: '/rabbitwhite/detailview.webp' },
    ],
  },
    {
      id: 'key-chain',
      name: 'SSR SUPREMACY Keychain',
      price: 'Rp 45.000',
      img: '/keychain/keychain.jpeg',
      type: 'Accessory',
      soldOut: false,
      description: 'SSR SUPREMACY Keychain\n\n✓ Clear Acrylic Material, 3mm Thickness\n✓ Guaranteed quality & waterproof\n✓ Rust-proof keyring\n✓ Free Packaging\n\nThis item contains logo from SSR',
      gallery: [
         { label: 'Front View', img: '/keychain/keychain.jpeg' },
         { label: 'Back View', img: '/keychain/detailkeychain.jpeg' },
         { label: 'Detail View', img: '/keychain/detailkeychain2.jpeg' },
      ],
    },
  {
    id: 'cassette-tape',
    name: 'SSR SUPREMACY - Now I See You, Now I Don\'t (black)',
    price: 'Rp 180.000',
    img: '/black rabbit ssr/kaoshitam.jpeg',
    type: 'Apparel',
    soldOut: false,
    description: 'SSR SUPREMACY - Now I See You, Now I Don\'t (black)\n\nIntroducing our new maxi - single "Now I See You, Now I Don\'t". we celebrate with newest article from SSR SUPREMACY designed by Jayiesm.\n\n✓ Size: S - XXL Product\n✓ T-Shirt Color: Black and White\n✓ Fabric: Stitch Supply 16s Cotton\n✓ Graphic: Plastisol High-quality Sablon Print',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    gallery: [
      { label: 'Front View', img: '/black rabbit ssr/frontview.jpeg' },
      { label: 'Back View', img: '/black rabbit ssr/backview.jpeg' },
      { label: 'Detail View', img: '/black rabbit ssr/detailview.jpeg' },
    ],
  },
  {
    id: 'kaos-artwork-putih',
    name: 'SSR SUPREMACY X A Prapto - Eat That Shit (White)',
    price: 'Rp 180.000',
    img: '/whitefuzzymonster/detail1.jpeg',
    type: 'Apparel',
    soldOut: false,
    description: 'SSR SUPREMACY X A Prapto - Eat That Shit (White)\n\nAn exclusive, limited-edition t-shirt in collaboration with a prapto "Eat That Shit"\n\n✓ T-Shirt Color: Black & White\n✓ Fabric: Stitch Supply 16s\n✓ Cotton Graphic: High Quality Print Plastisol',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    gallery: [
      { label: 'Front View', img: '/whitefuzzymonster/detail1.jpeg' },
      { label: 'Back View', img: '/whitefuzzymonster/detail2.jpeg' },
      { label: 'Detail View', img: '/whitefuzzymonster/detail3.jpeg' },
    ],
  },
  {
    id: 'kaos-artwork-hitam',
    name: 'SSR SUPREMACY X A Prapto - Eat That Shit (Black)',
    price: 'Rp 180.000',
    img: '/blackfuzzymonster/blackfuzzymonster.jpeg',
    type: 'Apparel',
    soldOut: false,
    description: 'SSR SUPREMACY X A Prapto - Eat That Shit (Black)\n\nAn exclusive, limited-edition t-shirt in collaboration with a prapto "Eat That Shit"\n\n✓ T-Shirt Color: Black & White\n✓ Fabric: Stitch Supply 16s\n✓ Cotton Graphic: High Quality Print Plastisol',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    gallery: [
      { label: 'Front View', img: '/blackfuzzymonster/blackfuzzymonster.jpeg' },
      { label: 'Back View', img: '/blackfuzzymonster/detail1.jpeg' },
      { label: 'Detail View', img: '/blackfuzzymonster/detail2.jpeg' },
    ],
  },
]

export function getMerchById(id) {
  return MERCH.find((item) => item.id === id)
}