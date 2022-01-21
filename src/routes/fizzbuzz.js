const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const num_usr = req.query['number'];
    let fizzbuzz = "";

    //Ciclo fizzbuzz
    for(let i = 1; i <= num_usr; i++){
        if( ((i%3)==0) && ((i%5)==0) ){
            fizzbuzz += " fizzbuzz ";
        } else if( (i%3)==0 ){
            fizzbuzz += " fizz ";
        } else if( (i%5)==0 ){
            fizzbuzz += " buzz ";
        } else {
            fizzbuzz += " " +i.toString();
        }
    }

    let result = {
        "number": num_usr,
        "fizzbuzz": fizzbuzz
    }

    res.json(result);
}); 

module.exports = router;