const express = require("express")
const router = express.Router();


let bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.raw({inflate:true, limit: '100kb', type: 'application/json'}));
router.use(bodyParser.json({ type: 'application/*+json' }))
const prisma = require("./../db/connectionToDB.js")


router.route("/:id")
    .get(async (req,res)=>{
        const user = await prisma.utenti.findUnique({
            where: {
              id: parseInt(req.params.id),
            },
          })
        res.send(user)
    })
    .put(async (req,res)=>{
        await prisma.utenti.update({
            where:{
                id: parseInt(req.params.id),
            },
            data:{
                "user": req.body.user,
                "professione": req.body.professione
            }
          })
          res.send("updated")
    })
    .delete(async (req,res)=>{
        await prisma.utenti.delete({
            where:{
                id:parseInt(req.params.id)
            }
        })
        res.send("deleted")
    })
    
router.get("/",async (req,res)=>{
    res.send(await prisma.utenti.findMany())
})
    
router.post("/",async (req,res)=>{
    await prisma.utenti.create({
        data:{
            "user": req.body.user,
            "professione": req.body.professione
        }
    })
    res.send("created")
})


module.exports = router;