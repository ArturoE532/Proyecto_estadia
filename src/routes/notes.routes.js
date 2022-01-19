const { Router } = require('express');
const router = Router();

const { 
    renderNoteForm,
    createNoteForm,
    renderNotes,
    renderEditNotes,
    updateNotes,
    deleteNotes 
} = require('../controllers/notes.controllers');

const {isAuthenticated} = require('../helpers/auth');

// Nueva nota
router.get('/notes/add', isAuthenticated, renderNoteForm);

router.post('/notes/newnote', isAuthenticated, createNoteForm);

//Obteber todas las notas
router.get('/notes', isAuthenticated, renderNotes);

// Editar notas
router.get('/notes/edit/:id', isAuthenticated, renderEditNotes);

router.put('/notes/edit/:id', isAuthenticated, updateNotes);

// eliminar notas
router.delete('/notes/delete/:id', isAuthenticated, deleteNotes);

module.exports = router;