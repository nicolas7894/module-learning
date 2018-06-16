var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = function(req, res, next) {
    /*
     * Check if authorization header is set
     */
    if( req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization') ) {

        if(req.headers['authorization']!=config.app.JWT_SECRET){

            return res.status(401).json({
                error: {
                    msg: 'Failed to authenticate token!'
                }
            });

        }

    } else {
        /*
         * If there is no autorization header, return 401 status code with JSON
         * error message
         */
        return res.status(401).json({
            error: {
                msg: 'No token!'
            }
        });
    }
    next();
    return;
}