const notasCtrl = {};

const Note = require('../models/Note');

const User = require('../models/User')


notasCtrl.renderNoteForm = (req, res) => {
    res.render('notes/newnote');
};

notasCtrl.createNoteForm = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Nota creada correctamente');
    res.redirect('/notes')
};

notasCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    res.render('notes/allnotes', { notes });
};

notasCtrl.renderEditNotes = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (note.user != req.user.id) {
        req.flash('error_msg', 'No estas autorizado');
        return res.redirect('/notes');
    }
    res.render('notes/editnote', { note });
};

notasCtrl.updateNotes = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Nota actualizada correctamente');
    res.redirect('/notes')
};

notasCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Nota eliminada correctamente');
    res.redirect('/notes')
};


//////////////////////////////////////////////////////////////////


notasCtrl.renderRango = async (req, res) => {

    if (req.user.rango === "Maestro") {
        const notes = await Note.find({ user: req.user.id }).sort({ createdAt: 'desc' });
        res.render('maestro/index_maestro', { notes });
    }

    if (req.user.rango === "Director") {
        const notes = await Note.find({ user: req.user.id }).sort({ createdAt: 'desc' });
        res.render('director/index_director', { notes });
    }

    if (req.user.rango === "Admin") {
        const notes = await Note.find({ user: req.user.id }).sort({ createdAt: 'desc' });
        res.render('administrador/index_administrador', { notes });
    }
};

notasCtrl.renderInfo = async (req, res) => {
    if (req.user.rango === "Maestro") {
        const user = await User.findById(req.user.id);
        res.render('maestro/info_maestro', { user });
    }

    if (req.user.rango === "Director") {
       const user = await User.findById(req.user.id);
       res.render('director/info_director', { user });
    }

    if (req.user.rango === "Admin") {
        const user = await User.findById(req.user.id);
        res.render('administrador/info_administrador',{ user });
    }

};

notasCtrl.renderEditInfo = async (req, res) => {
         const user = await User.findById(req.user.id);
         res.render('notes/editinfo', { user });
};

notasCtrl.updateInfo = async (req, res) => {
    const { direccion, telefono } = req.body;
    await User.findByIdAndUpdate(req.user.id, { direccion, telefono });
    req.flash('success_msg', 'Nota actualizada correctamente');
    res.redirect('/info/'+req.user.id); 
};


notasCtrl.renderimp = async (req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    res.render('notes/impnotes', { notes });
};

const PDFDocument = require('pdfkit');
const fs = require('fs');

notasCtrl.curri = (req, res) => {

    const { title, description } = req.body;

    var pdfDoc = new PDFDocument;
    pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));

    pdfDoc.text('nombre del proyecto:' + title);
    pdfDoc.text('se trata de:' + description);
    pdfDoc.end();

    req.flash('success_msg', 'Curriculum generado exitosamente');
    res.redirect('/rol');
  
};

notasCtrl.renderMaestros = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('maestro/index_maestro');
    }

    if (req.user.rango === "Director") {
        const user = await User.find({rango:"Maestro"});
        res.render('notes/lista_personal', { user });
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/info_administrador');
    }

};

notasCtrl.renderPerInfo = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('maestro/index_maestro');
    }

    if (req.user.rango === "Director") {
        const user = await User.findById(req.params.id);
        res.render('notes/info_personal', { user });
    }

    if (req.user.rango === "Admin") {
      const user = await User.findById(req.params.id);
      res.render('notes/info_personal', { user });
    }

};

notasCtrl.renderPerNotes = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('maestro/index_maestro');
    }

    if (req.user.rango === "Director") {
        const user = await User.findById(req.params.id);
        const notes = await Note.find({ user: req.params.id }).sort({ createdAt: 'desc' });
        res.render('notes/notes_personal', { user,notes });
    }

    if (req.user.rango === "Admin") {
        const user = await User.findById(req.params.id);
        const notes = await Note.find({ user: req.params.id }).sort({ createdAt: 'desc' });
        res.render('notes/notes_personal', { user,notes });
    }
};

notasCtrl.renderSelectM = async (req, res) => {
    
    if (req.user.rango === "Maestro") {
        res.render('maestro/index_maestro');
    }

    if (req.user.rango === "Director") {
        res.render('director/index_director');
    }

    if (req.user.rango === "Admin") {
        const user = await User.find({rango:"Maestro"});
        res.render('notes/lista_personal', { user });
      
    }

};

notasCtrl.renderSelectD = async (req, res) => {
    
    if (req.user.rango === "Maestro") {
        res.render('maestro/index_maestro');
    }

    if (req.user.rango === "Director") {
        res.render('director/index_director');
    }

    if (req.user.rango === "Admin") {
        const user = await User.find({rango:"Director"});
        res.render('notes/lista_personal', { user });
      
    }

};

notasCtrl.renderSelectP = async (req, res) => {
    
    if (req.user.rango === "Maestro") {
        res.render('maestro/index_maestro');
    }

    if (req.user.rango === "Director") {
        res.render('director/index_director');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/selec_personal');
      
    }

};

module.exports = notasCtrl;