var express = require('express');
var router = express.Router();
let x;
let y;


/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x = Math.floor(Math.random()*23);
        y = Math.floor(Math.random()*23);
        let r = Math.atan2(x, y);
        let r1 =  Math.atanh(x);
        let r2 =  Math.cbrt(y)
        res.send(`Math.atan2() applied to ${x, y} is ${r}<br>
                  Math.atanh() applied to ${x} is ${r1}<br>
                  Math.cbrt() applied to ${y} is ${r2}`);
    }
    else{
        x = req.query.x;
        x = Math.floor(Math.random()*23);
        y = Math.floor(Math.random()*23);
        let r = Math.atan2(x, y);
        let r1 =  Math.atanh(x);
        let r2 =  Math.cbrt(y)
        res.send(`Math.atan2() applied to ${x, y} is ${r}<br>
                  Math.atanh() applied to ${x} is ${r1}<br>
                  Math.cbrt() applied to ${y} is ${r2}`);
    }
})

module.exports = router;
