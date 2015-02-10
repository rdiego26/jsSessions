/**
 * @author Diego Ramos
 * Created on 10/02/15.
 * @desc
 */

var _  = require('underscore');

var constants = require('../utils/Constants');

var _result = {status:{}, date:new Date(), data:[]};


exports.login = function(req, res) {

    var _login = req.params.login || undefined;
    var _password = req.params.password || undefined;

    //Reset _result
    _result = {status:{}, date:new Date(), data:[]};

    console.log('type of _login: ' + typeof _login);
    console.log('type of _password: ' + typeof _password);

    //Check _login and _password 
    if(_login == 'pipitchu'&& _password == '12345') {
        _result.status = constants.http.ok;    
    } else {
        _result.status = constants.http.notFound;
    }

    //Connect DB and validate data

    //Return status    
    _result.data.push(_login);
    _result.data.push(_password);

    res.end( JSON.stringify(_result) );

}