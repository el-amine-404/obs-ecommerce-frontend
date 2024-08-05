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
  category: Category;
  status: Status;
}

// ENUMS

export enum Category {
  LAPTOP = "LAPTOP",
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
  PRINTER = "PRINTER",
  SCANNER = "SCANNER",
  CAMERA = "CAMERA",
  SOFTWARE = "SOFTWARE",
  HARDWARE = "HARDWARE",
  ACCESSORIES = "ACCESSORIES"
}

export enum Status {
  AVAILABLE = "AVAILABLE",
  ONDEMAND = "ONDEMAND",
  UNAVAILABLE = "UNAVAILABLE"
}
