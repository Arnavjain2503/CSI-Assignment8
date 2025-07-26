// src/auth/auth.routes.js
import { Router } from 'express';
import { login } from './auth.controller.js';

const router = Router();

// POST /login route for user authentication
router.post('/login', login);

export default router;
