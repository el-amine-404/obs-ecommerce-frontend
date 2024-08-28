export interface Product {
  id: number;
  sku: string;
  title: string;
  description: string;
  image: string;
  price: number;
  manufacturer: string;
  seller: string;
  quantityStock: number;
  category: string;
  status: Status;
}

export enum Status {
  AVAILABLE = "AVAILABLE",
  ONDEMAND = "ONDEMAND",
  UNAVAILABLE = "UNAVAILABLE"
}
