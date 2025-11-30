import fs from 'fs';
console.log("Node is running");
fs.writeFileSync('node-test.txt', 'Hello from Node');
