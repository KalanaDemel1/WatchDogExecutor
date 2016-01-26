/**
 * Created by Kalana on 1/25/2016.
 */

var shell = require('shelljs/global');

var sh = require('shelljs');
//var version = sh.exec('node --version', {silent:true}).output;
//console.log('version ' + version);

function start(response){
    var ps = sh.exec('docker ps | grep "ceb:v10"', {silent:true}).output;

    //console.log(ps);

    var res = ps.split(" ");
    //console.log(res[36]);
    //response(res[0]);

    var pid = sh.exec('docker top '+res[0]+' | grep nodejs',{silent:true}).output;
    //console.log(pid);

    var realpid = pid.split(" ");

    console.log(realpid[16]);

    sh.exec('kill '+realpid[16],{silent:true}).output;
    console.log(res[0]);

    sh.exec('docker attach '+res[0],{silent:false}).output;
    console.log(realpid[16]);


    //sh.exec('cd /home/newceb01-04',{silent:false}).output;
    //console.log(realpid[16]);
    //sh.exec('nodejs app.js',{silent:false}).output;
    //console.log(realpid[16]);

    response("BLANK");

}




exports.start=start;
