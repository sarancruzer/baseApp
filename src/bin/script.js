var fs = require('fs');
function readWriteSync() {
let env = process.env.ENV;
if (!process.env.ENV) {
          env = 'dev';  //SETTING DEFAULT ENV AS DEV
}

console.log("env");
console.log(env);

var data = fs.readFileSync(`src/environments/environment.${env}.ts`, 'utf-8');
fs.writeFileSync('src/environments/environment.ts', data, 'utf-8');
console.log('readFileSync complete' + env.ENV);
}
readWriteSync();