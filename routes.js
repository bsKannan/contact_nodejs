var express = require('express');

var contactController = require('./contactController');



var router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    })
})


router.route('/contacts')
    .get(contactController.findAll)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);


module.exports = router;