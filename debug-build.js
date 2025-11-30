import { exec } from 'child_process';
import fs from 'fs';

console.log("Starting build...");
exec('npm run build', (error, stdout, stderr) => {
    console.log("Build finished");
    fs.writeFileSync('build-out.log', stdout || "No stdout");
    fs.writeFileSync('build-err.log', stderr || "No stderr");
    if (error) {
        fs.writeFileSync('build-error.log', error.message);
        console.log("Build failed");
    } else {
        console.log("Build success");
    }
});
