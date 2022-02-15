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
    updateInfo,
    renderimp,
    curri,
    renderMaestros,
    renderPerInfo,
    renderPerNotes,
    renderSelectM,
    renderSelectD,
    renderSelectP,
    rendertoogleStatus,
    renderDatosAca,
    renderAllDatosAcademi,
    renderExperiLavo,
    renderAllExperiencia,
    renderupload, 
    upload, 
    renderimage,
    createAcademiForm,
    createExpLabForm

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

router.get('/upload', isAuthenticated, renderupload);

router.post('/upload', isAuthenticated, upload);

router.get('/image/:id', isAuthenticated, renderimage);

router.get('/imp', isAuthenticated, renderimp);

router.get('/cur', isAuthenticated, curri);

router.get('/personal', isAuthenticated, renderMaestros);

router.get('/personal/info/:id', isAuthenticated, renderPerInfo);

router.get('/personal/notes/:id', isAuthenticated, renderPerNotes);

router.get('/personal/toogleStatus/:id', isAuthenticated, rendertoogleStatus);

router.get('/lista/maestros', isAuthenticated, renderSelectM);

router.get('/lista/directores', isAuthenticated, renderSelectD);

router.get('/lista', isAuthenticated, renderSelectP);

router.get('/dato/Academic', isAuthenticated, renderDatosAca);

router.get('/dato/AllDatos', isAuthenticated, renderAllDatosAcademi);

router.post('/notes/newacademico', isAuthenticated, createAcademiForm);

router.get('/dato/Experience', isAuthenticated, renderExperiLavo);

router.get('/dato/AllExperie', isAuthenticated, renderAllExperiencia);

router.post('/notes/newExpLab', isAuthenticated, createExpLabForm); 

module.exports = router; 