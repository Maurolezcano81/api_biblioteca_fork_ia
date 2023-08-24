const express = require("express");
const router = express.Router();

// Obtener lista completa de usuarios
router.get('/usuarios', (req, res) => {
  });
  
  // Obtener detalles de un usuario específico
  router.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
  });
  
  // Crear un nuevo usuario
  router.post('/usuarios', (req, res) => {
    const usuario = req.body; //
  });
  
  // Actualizar un usuario existente
  router.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuarioActualizado = req.body; //
  });
  
  // Eliminar un usuario
  router.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
  });