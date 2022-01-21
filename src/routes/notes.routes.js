const { Router } = require('express');
const router = Router();

const { 
    renderNoteForm,
    createNoteForm,
    renderNotes,
    renderEditNotes,
    updateNotes,
    deleteNotes,
    renderRango,
    renderInfo,
    renderEditInfo,
    updateInfo

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

///////////////////////////////////////////////////////////////////////

// muestra la direccion dependiendo del rango
router.get('/rol', isAuthenticated, renderRango);

router.get('/info/:id', isAuthenticated, renderInfo);

router.get('/info/edit/:id', isAuthenticated, renderEditInfo);
router.put('/info/edit/:id', isAuthenticated, updateInfo);


module.exports = router;