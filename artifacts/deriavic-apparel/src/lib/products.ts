// Shop product catalog.
//
// Images are the same real, already-verified photography used across the
// rest of the site (public/fashion/) — not AI-generated, not hot-linked.
// Prices are realistic placeholders for a Nigerian bespoke/ready-to-wear
// label; edit freely once you have final pricing.

const fashionUrl = (file: string) => `${import.meta.env.BASE_URL}fashion/${file}`;

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // NGN
  image: string;
  description: string;
}

export const products: Product[] = [
  { id: 'ankara-wrap-dress', name: 'Ankara Wrap Dress', category: 'Ankara', price: 45000, image: fashionUrl('ankara-03.jpg'), description: 'Bold wax-print wrap dress, tailored for a flattering everyday silhouette.' },
  { id: 'aso-oke-agbada-set', name: 'Aso-Oke Agbada Set', category: 'Aso-Oke', price: 185000, image: fashionUrl('asooke-02.jpg'), description: 'Handwoven Aso-Oke agbada with matching cap — full ceremonial set.' },
  { id: 'bespoke-tailored-blazer', name: 'Bespoke Tailored Blazer', category: 'Bespoke', price: 95000, image: fashionUrl('bespoke-03.jpg'), description: 'Made-to-measure structured blazer, cut and fitted to your exact frame.' },
  { id: 'asoebi-coordinated-gown', name: 'Asoebi Coordinated Gown', category: 'Asoebi', price: 65000, image: fashionUrl('asoebi-04.jpg'), description: 'Event-ready gown designed for coordinated group styling at owambes.' },
  { id: 'rtw-shirt-dress', name: 'Ready-to-Wear Shirt Dress', category: 'Ready-to-Wear', price: 38000, image: fashionUrl('rtw-04.jpg'), description: 'Everyday structured shirt dress, off-the-rack luxury with a tailored fit.' },
  { id: 'bridal-ball-gown', name: 'Bridal Ball Gown', category: 'Bridal', price: 450000, image: fashionUrl('bridal-06.jpg'), description: 'Full-silhouette bridal ball gown with intricate hand detailing.' },
  { id: 'ankara-two-piece', name: 'Ankara Two-Piece Set', category: 'Ankara', price: 52000, image: fashionUrl('ankara-06.jpg'), description: 'Matching top and wrapper set in vibrant African wax print.' },
  { id: 'kids-aso-oke-set', name: 'Kids Aso-Oke Set', category: 'Kids', price: 28000, image: fashionUrl('kids-06.jpg'), description: 'Miniature traditional set for little royals — ceremony-ready.' },
  { id: 'bespoke-kaftan', name: 'Bespoke Kaftan', category: 'Bespoke', price: 78000, image: fashionUrl('bespoke-05.jpg'), description: 'Flowing made-to-measure kaftan in premium fabric of your choice.' },
  { id: 'aso-oke-gele-wrapper', name: 'Aso-Oke Gele & Wrapper', category: 'Aso-Oke', price: 120000, image: fashionUrl('asooke-05.jpg'), description: 'Handwoven gele and wrapper set, styled for ceremonial occasions.' },
  { id: 'asoebi-senator-set', name: 'Asoebi Senator Set', category: 'Asoebi', price: 58000, image: fashionUrl('asoebi-07.jpg'), description: 'Classic senator-style set, tailored for coordinated celebrations.' },
  { id: 'rtw-tailored-trousers', name: 'Ready-to-Wear Tailored Trousers', category: 'Ready-to-Wear', price: 32000, image: fashionUrl('rtw-05.jpg'), description: 'Structured trousers built for everyday wear, straight from the studio.' },
  { id: 'ankara-jumpsuit', name: 'Ankara Jumpsuit', category: 'Ankara', price: 48000, image: fashionUrl('ankara-08.jpg'), description: 'Bold one-piece jumpsuit in statement wax-print fabric.' },
  { id: 'bridal-reception-gown', name: 'Bridal Reception Gown', category: 'Bridal', price: 380000, image: fashionUrl('bridal-09.webp'), description: 'Sleek reception gown designed for the second look of the day.' },
  { id: 'kids-ankara-playsuit', name: 'Kids Ankara Playsuit', category: 'Kids', price: 22000, image: fashionUrl('kids-03.jpg'), description: 'Playful, comfortable ankara playsuit for the little ones.' },
  { id: 'bespoke-evening-gown', name: 'Bespoke Evening Gown', category: 'Bespoke', price: 165000, image: fashionUrl('bespoke-07.jpg'), description: 'Custom-fitted evening gown, made to measure for a standout entrance.' },
  { id: 'asoebi-kaftan', name: 'Asoebi Kaftan', category: 'Asoebi', price: 62000, image: fashionUrl('asoebi-08.jpg'), description: 'Relaxed-fit kaftan designed for group celebration styling.' },
  { id: 'rtw-wrap-top', name: 'Ready-to-Wear Wrap Top', category: 'Ready-to-Wear', price: 25000, image: fashionUrl('rtw-06.jpg'), description: 'Versatile wrap top, an everyday staple with a tailored finish.' },
  { id: 'aso-oke-traditional-cap', name: 'Aso-Oke Traditional Cap', category: 'Aso-Oke', price: 18000, image: fashionUrl('asooke-07.jpg'), description: 'Handwoven traditional cap to complete any Aso-Oke ensemble.' },
  { id: 'ankara-maxi-skirt', name: 'Ankara Maxi Skirt', category: 'Ankara', price: 35000, image: fashionUrl('ankara-11.jpg'), description: 'Flowing floor-length skirt in bold wax-print fabric.' },
];

export const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString('en-NG')}`;
