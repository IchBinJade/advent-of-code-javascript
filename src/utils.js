import fs from "fs"

export function getArrayFromFile(file) {
    const path = `./inputs/${file}`;
    return fs.readFileSync(path, 'utf8').split('\n');
}