import { products } from '../data/products.js';  // Assuming this imports your in-memory product data
import { productSchema } from '../validation/product.schema.js';  // Assuming you have a Joi validation schema

// Get all products
export const getAll = (req, res) => {
  res.status(200).json(products);
};

// Get a single product by ID
export const getOne = (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

// Create a new product
export const create = (req, res, next) => {  // Add next() for error handling
  try {
    const { name, price } = req.body;

    // Basic validation for name and price
    if (!name || !price) {
      return res.status(400).json({ error: 'Product name and price are required' });
    }

    if (price <= 0) {
      return res.status(400).json({ error: 'Product price must be a positive number' });
    }

    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const newProduct = { id, name, price };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);  // Pass the error to the global error handler
  }
};

// Update an existing product
export const update = (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const { name, price } = req.body;
  product.name = name ?? product.name;
  product.price = price ?? product.price;

  res.status(200).json(product);
};

// Delete a product
export const remove = (req, res) => {
  const index = products.findIndex(p => p.id === +req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  products.splice(index, 1);
  res.status(204).end();
};
