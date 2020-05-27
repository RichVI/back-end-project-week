const router = require('express').Router();
const express = require('express');
const API = require('./notesdb-model'); //API Model

//GET all notesdb
router.get('/', (req, res) =>{
    API.find()
    .then(API =>{
        res.status(200).json(API)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To Get API'})
    })
})

//GET notesdb by id
router.get('/:id', (req, res) =>{
    API.findById(req.params.id).then(api =>{
        if(api){
            res.status(200).json(api)
        }
        else{
            res.status(401).json({message: `Could not find notes with the provided ID: ${req.params.id}`})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed To Get Notes'})
    })
})
//POST new API
router.post('/', (req, res) =>{
    let newNote = req.body;
    API.insert(newNote).then(newNote=>{
        res.status(201).json(newNote)
    })
    .catch(err=>{
        res.status(500).json({message: 'Failed To Add New API to the database, please make sure both title and content is filled'})
    })
})

//UPDATE post
router.put('/:id', (req, res) =>{
    const changes = req.body;
 
    API.findById(req.params.id).then(api =>{
        if(api){
            API.update(changes, req.params.id)
            .then(updated =>{
                res.status(201).json({success: 'Notes updated', id: api.id, ...changes})
            })
        }else{
            res.status(401).json({message: `Could not find notes With the provided ID: ${req.params.id}`})
        }
    }).catch(err => {
        res.status(500).json({ message: 'Failed to update notes' });
      });
})

// router.put('/:id', (req,res) =>{
//     const {id} = req.params;
//     const changes = req.body;
 
//     API.findById(id).then(post =>{
//         if(post){
//             API.update(changes, id)
//             .then(updated =>{
//                 res.status(201).json({success: 'updated', id: api.id, ...changes})
//             })
//         }else{
//             res.status(401).json({message: `Could Not Find Post With ID: ${id}`})
//         }
//     }).catch(err => {
//         res.status(500).json({ message: 'Failed To Update Post' });
//       });
// })















//DELETE API
router.delete('/:id', (req, res) =>{
    API.findById(req.params.id).then(api =>{
        if(api){
            API.remove(req.params.id).then(removed =>{
                res.status(200).json({success: 'Note deleted', id: api.id});
            }).catch(err=>{
                res.status(500).json({message: `Failed To delete note: ${req.params.id}`})
            })
        }
        else{
            res.status(401).json({message: `Could not find note w/ ID: ${req.params.id}`})
        }
    }).catch(err => {
        res.status(500).json({message: 'Failed To Delete Note'})
    })
})
module.exports = router;