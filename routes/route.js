const express = require('express');
const router = express.Router();



//route for the username 
router.get("/", (req  , res) => {
    res.render('index')
});

//route for the chat
router.get('/chat',(req , res)=> {
    res.render('chat')
})

//route for the category quiz page

router.get('/category',(req , res) =>{
    res.render('category')
})



router.get('/quiz',(req , res) =>{
    res.render('quiz')
})



module.exports = router