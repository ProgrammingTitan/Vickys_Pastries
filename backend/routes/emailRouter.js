const router = require("express").Router();
const uploadAuth = require("../middleware/uploadAuth");
const Email = require("../models/EmailModel");


router.post("/", async (req,res) => {
    try{

        let email = req.body.email;

        if(!email)
        {
            return res.status(400).json({msg: "Not all fields entered"});
        }
        
        const obj = new Email ({
            email : req.body.email,
        });

        const savedEmail = await obj.save();
        
        res.json(savedEmail);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.get("/", uploadAuth, async (req,res) => {
    try{
    const emails = await Email.find();
    res.json(emails);
} catch(err){
    res.status(500).json({error: err.nessage})
}


});

router.delete('/:id', uploadAuth, async (req,res) =>{
    try{
        const email = await Email.findByIdAndDelete(
            req.params.id
        )
        console.log(req.params.id)
    
        if(!email){
            return res
            .status(400)
            .json({
                msg: 'This Project Does Not Exist.'
            });
        }
    
        res.json(email); 
    } catch(err){
        res.status(500).json({error: err.nessage})
    }
    
})

module.exports = router; 