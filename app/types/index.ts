export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon?: string;
  color?: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface ContactData {
  email: string;
  phone: string;
  address: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
