const router = require("express").Router();
const uploadAuth = require("../middleware/uploadAuth");
const Order = require("../models/OrderModel");


router.post("/", async (req,res) => {
    try{

        let {name, phoneNumber, email, ocassion, description,type, date}= req.body;

        if(!name || !phoneNumber || !email || !ocassion || !description || !type || !date)
        {
            return res.status(400).json({msg: "Not all fields entered"});
        }
        
        const obj = new Order ({
            name,
            phoneNumber,
            email,
            ocassion,
            description,
            type,
            date,
        });

        

        const savedOrder = await obj.save();
        
        res.json(savedOrder);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.get("/", uploadAuth, async (req,res) => {
    try{
    const orders = await Order.find();
    res.json(orders);
} catch(err){
    res.status(500).json({error: err.nessage})
}


});

router.delete('/:id', uploadAuth, async (req,res) =>{
    try{
        const order = await Order.findByIdAndDelete(
            req.params.id
        )

    
        if(!order){
            return res
            .status(400)
            .json({
                msg: 'This Project Does Not Exist.'
            });
        }
    
        res.json(order); 
    } catch(err){
        res.status(500).json({error: err.nessage})
    }
    
})


module.exports = router; 