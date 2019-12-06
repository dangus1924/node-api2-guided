const express = require('express');
const hubs = require("../hubs/hubs-model");

const router = express.Router({
    mergeParams: true,
})

router.get('/', (req, res) => {  
    hubs.findHubMessage(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Could not get hub messages'
        })
    })
})

router.get('/:messageId', (req, res) => {
    hubs.findHubMessageById(req.params.id, req.params.messageId)
    .then(data => {
        if (data) {
            res.json(data)
        } else {
            res.status(500).json({
                message: 'Could not get hub message',
         
        
    })
    .catch(err => {
        res.status(500).json({
            message: 'Could not get hub message',
        })
    })


router.post('/', (req, res) => {
    if (!req.body.sender || !req.body.text) {
        res.status(400).json({
            message: 'information required before proceeding'
        })
    }
    const payload = {
        sender: req.body.sender,
        text: req.body.text,
    }

    hubs.addHubMessage(req.params.id, payload)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Could not get hub messages'
        })
    })
})

module.exports = router