/**
 * Created by Kalana on 1/25/2016.
 */

var shell = require('shelljs/global');

var sh = require('shelljs');
//var version = sh.exec('node --version', {silent:true}).output;
//console.log('version ' + version);

function start(response){
    console.log(sh.exec('ls', {silent:true}).output);
    //response(shell.pwd());

}

exports.start=start;
