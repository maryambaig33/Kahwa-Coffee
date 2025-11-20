export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'coffee' | 'tea' | 'pastry' | 'food';
}

export interface StoreInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}