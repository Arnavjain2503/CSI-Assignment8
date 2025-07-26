// src/routes/product.routes.js
import multer from 'multer';
import path from 'path';
import { Router } from 'express';
import * as controller from '../controllers/product.controller.js';

// Setup storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const router = Router();

// Add this route for handling file uploads
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }
  res.status(200).send({
    message: 'File uploaded successfully',
    file: req.file
  });
});

// Other routes
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
