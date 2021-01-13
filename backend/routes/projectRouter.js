const router = require("express").Router();
const uploadAuth = require("../middleware/uploadAuth");
const Project = require("../models/projectModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fs = require('fs');
var path = require('path');
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

router.post("/", uploadAuth, async (req,res) => {
    try{
        

        const obj = new Project ({
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            ocassion: req.body.ocassion,
            imageData: req.body.imageURL
        });

        


        // Project.create(obj, (err, item) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     // else {
        //     //     // item.save();
        //     //     // res.redirect('/');
        //     // }
        // });

        
        // const savedProject = await newProject.save();
        
        // res.json(savedProject);


        const savedProject = await obj.save();
        
        res.json(savedProject);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.get("/", async (req,res) => {
    const projects = await Project.find();
    res.json(projects);


});

router.get('/:id', async(req,res) =>{

    try{
    const project = await Project.findById(
        req.params.id
    )

    if(!project){
        return res
        .status(400)
        .json({
            msg: 'This Project Does Not Exist.'
        });
    }

    res.json(project); 
} catch(err){
    res.status(500).json({error: err.nessage})
}

});


router.get('/category/:id', async(req,res) =>{

    try{
   
    let idString = req.params.id;
    let upChat = idString.substring(0,1).toUpperCase();
    let otherString = upChat + idString.substring(1,idString.length);

    
    if(idString == 'Holidays')
    {
        
        const project = await Project.find({
            $or:[
            {ocassion : 'Easter'},{ocassion : 'Christmas'},{ocassion : 'Thanksgiving'}
            ,{ocassion : 'Halloween'},{ocassion : '4th of July'}
            ]
        })

        if(!project){
            return res
            .status(400)
            .json({
                msg: 'This Project Does Not Exist.'
            });
        }
    
        res.json(project); 
    
    }
    else if(idString === 'Special')
    {
        const project = await Project.find({
            $or:[
            {ocassion : 'Baptism'},{ocassion : 'First Communion'},{ocassion : 'Wedding'}
            ,{ocassion : 'Any'},{ocassion: 'Baby Shower'},{ocassion: 'Graduation'}
            ]
        })

        if(!project){
            return res
            .status(400)
            .json({
                msg: 'This Project Does Not Exist.'
            });
        }
    
        res.json(project); 
    }
    else
    {
        const project = await Project.find({
            $or:[
            {ocassion : req.params.id},{ocassion : otherString}
            ]
        })

        if(!project){
            return res
            .status(400)
            .json({
                msg: 'This Project Does Not Exist.'
            });
        }
    
        res.json(project); 
    }


    
} catch(err){
    res.status(500).json({error: err.nessage})
}

});


router.get('/search/:id', async(req,res) =>{

    try{
   
    let idString = req.params.id;
    let upChat = idString.substring(0,1).toUpperCase();
    let otherString = upChat + idString.substring(1,idString.length);

    const project = await Project.find({
        $or:[
        {description : req.params.id},{type : otherString}
        ]
    })


    if(!project){
        return res
        .status(400)
        .json({
            msg: 'This Project Does Not Exist.'
        });
    }

    res.json(project); 
} catch(err){
    res.status(500).json({error: err.nessage})
}

});


router.delete('/:id', uploadAuth, async (req,res) =>{
    try{
        const project = await Project.findByIdAndDelete(
            req.params.id
        )
    
        if(!project){
            return res
            .status(400)
            .json({
                msg: 'This Project Does Not Exist.'
            });
        }
    
        res.json(project); 
    } catch(err){
        res.status(500).json({error: err.nessage})
    }
    
})

module.exports = router; 