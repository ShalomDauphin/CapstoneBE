const express = require('express');
const router = express.Router();

router.get('/api/v1/bootcamps');
router.get('/api/v1/bootcamps/:id');
router.post('/api/v1/bootcamps');
router.put('/api/v1/bootcamps');
router.delete('/api/v1/bootcamps');
