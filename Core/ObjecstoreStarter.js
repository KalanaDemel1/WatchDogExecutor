/**
 * Created by Kalana on 1/25/2016.
 */

var shell = require('shelljs/global');

var sh = require('shelljs');
//var version = sh.exec('node --version', {silent:true}).output;
//console.log('version ' + version);

function start(response){
    var ps = sh.exec('docker ps | grep "objectstore"', {silent:true}).output;

    //console.log(ps);

    var res = ps.split(" ");
    //console.log(res[36]);
    response('Image ID:'+res[0]);

    var pid = sh.exec('docker top '+res[0]+' | grep ObjectStore',{silent:true}).output;
    //console.log(pid);

    var realpid = pid.split(" ");

    console.log('KILLING... '+realpid[16]);

    sh.exec('sudo kill '+realpid[16],{silent:true}).output;
    console.log('Succesfully killed:'+realpid[16]);
    console.log('\nRestarting ObjectStore...');
   var s=sh.exec('docker exec -d -i '+res[0]+' /home/objectstore/ObjectStore',{silent:false}).output;
    console.log(s);
    console.log('ObjectStore Successfully started.'+realpid[16]);
    //console.log();


    //sh.exec('cd /home/newceb01-04',{silent:false}).output;
    //console.log(realpid[16]);
    //sh.exec('nodejs app.js',{silent:false}).output;
    //console.log(realpid[16]);

    response("BLANK");

}




exports.start=start;
