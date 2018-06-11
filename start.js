var exec = require('child_process').exec;
exec('chmod +x z1miner', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
var exec = require('child_process').exec;
exec('./z1miner 9A8vVP7xD7HHwjBVymT4gbzodvJ6mQSl hQH2wEqZCXwY6YKvatqguQuyb4voLeAS 4', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
