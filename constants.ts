import { Product, Service, Workshop } from './types';
import { Wrench, BookOpen, Scissors, Award } from 'lucide-react';

export const CONTACT_INFO = {
  address: "187 Ontdekkers Service Road, Horizon Park, Roodepoort, South Africa",
  phone: "011 768 1283",
  whatsapp: "072 083 4060",
  email: "ansie@loslappies.co.za",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4925828731766!2d27.8765433!3d-26.1154567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959f6c0d0c0d0d%3A0x0!2zMjbCsDA2JzU1LjYiUyAyN8KwNTInMzUuNiJF!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza" 
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Bernina 880 Plus',
    category: 'machine',
    description: 'The ultimate in sewing and embroidery. Huge space, fast speeds, and absolute precision.',
    image: 'https://www.loslappies.co.za/wp/wp-content/uploads/2021/01/b880_straight_low_res_with_reflection_1_800x.jpg',
    featured: true
  },
  {
    id: 'p2',
    name: 'Big Book of Serging',
    category: 'book',
    description: 'Everything you need to know about your overlocker/serger. A complete guide.',
    image: 'https://www.loslappies.co.za/wp/wp-content/uploads/2021/08/book-serging-1.jpg',
    featured: true
  },
  {
    id: 'p3',
    name: 'Big Book of BERNINA Feet',
    category: 'book',
    description: 'An encyclopedia of presser feet knowledge. A must-have for every owner.',
    image: 'https://www.loslappies.co.za/wp/wp-content/uploads/2021/08/book-feet-2.jpg',
    featured: true
  },
  {
    id: 'p4',
    name: 'Big Book of Embroidery',
    category: 'book',
    description: 'Master your embroidery module with this comprehensive guide.',
    image: 'https://www.loslappies.co.za/wp/wp-content/uploads/2021/08/bookemb-2-scaled.jpg',
    featured: false
  },
  {
    id: 'p5',
    name: 'Big Book of Quilting',
    category: 'book',
    description: 'From basic patchwork to advanced quilting techniques.',
    image: 'https://www.loslappies.co.za/wp/wp-content/uploads/2021/08/book-quilting-3.jpg',
    featured: false
  },
  {
    id: 'p6',
    name: 'Batik Fabric Collection',
    category: 'accessory',
    description: 'High quality batik fabrics for your next colorful project.',
    image: 'https://www.loslappies.co.za/wp/wp-content/uploads/2021/06/BatikNewArrivals-1200x732.jpg',
    featured: false
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'w1',
    title: 'Embroidery Basics',
    date: '2023-11-15',
    time: '09:00 - 12:00',
    description: 'Learn the fundamentals of your embroidery module. Hooping, stabilizers, and thread choice.',
    price: 'R450',
    image: 'https://www.loslappies.co.za/wp/wp-content/uploads/2021/08/bookemb-2-1200x1640.jpg'
  },
  {
    id: 'w2',
    title: 'Quilting for Beginners',
    date: '2023-11-20',
    time: '10:00 - 14:00',
    description: 'Start your first quilt block. Learn cutting, piecing, and basic machine quilting.',
    price: 'R600',
    image: 'https://www.loslappies.co.za/wp/wp-content/uploads/2021/08/book-quilting-3-1293x1536.jpg'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Machine Servicing',
    description: 'Comprehensive general service for all Bernina and bernette models to keep them running smoothly.',
    icon: 'Wrench'
  },
  {
    id: 's2',
    title: 'Repairs',
    description: 'Expert diagnostics and repairs using genuine parts. We fix timing, tension, and electronic issues.',
    icon: 'Scissors'
  },
  {
    id: 's3',
    title: 'Product Training',
    description: 'Did you buy a machine from us? We offer free mastery classes to help you get the most out of your purchase.',
    icon: 'BookOpen'
  }
];