import { StoreInfo, MenuItem } from './types';

export const STORE_INFO: StoreInfo = {
  address: "3025 S University Dr",
  city: "Fort Worth",
  state: "TX",
  zip: "76109",
  phone: "(817) 555-0123",
  hours: {
    "Mon - Fri": "6:30 AM - 7:00 PM",
    "Sat": "7:00 AM - 7:00 PM",
    "Sun": "7:00 AM - 7:00 PM"
  },
  coordinates: {
    lat: 32.7078,
    lng: -97.3598
  }
};

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: '1',
    name: 'Honey Almond Cold Brew',
    description: 'Our signature cold brew infused with local honey and almond essence.',
    price: '$5.25',
    image: 'https://picsum.photos/id/425/600/400',
    category: 'coffee'
  },
  {
    id: '2',
    name: 'Lavender Latte',
    description: 'Espresso with steamed milk and house-made lavender syrup.',
    price: '$5.75',
    image: 'https://picsum.photos/id/431/600/400',
    category: 'coffee'
  },
  {
    id: '3',
    name: 'Croissant Sandwich',
    description: 'Buttery croissant filled with egg, gouda, and turkey bacon.',
    price: '$8.50',
    image: 'https://picsum.photos/id/493/600/400',
    category: 'food'
  },
  {
    id: '4',
    name: 'Matcha Lemonade',
    description: 'Premium matcha green tea shaken with fresh lemonade.',
    price: '$4.95',
    image: 'https://picsum.photos/id/420/600/400',
    category: 'tea'
  }
];