export interface Product {
  id: string;
  name: string;
  category: 'machine' | 'accessory' | 'book';
  description: string;
  price?: string;
  image: string;
  featured?: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  price: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}