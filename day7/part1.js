require("../utils");
/** @type {string} */
const input = readInput();
let state = "";
let curDir = "";
const sizes = new Map();
input.lines().map(line => {
    if (line.startsWith("$ cd ")) {
        state = "";
        const dir = line.slice(5);
        if (dir === "..") {
            const dirTree = curDir.split('/');
            curDir = dirTree.slice(0, dirTree.length - 1).join('/');
            if (curDir == "") curDir = "/";
            return;
        } 
        curDir += (!["","/"].includes(curDir) ? "/" : "") + dir;
        return;
    }
    if (line === "$ ls") {
        return state = "ls";
    }
    if (state == "ls") {
        const [size, name] = line.split(' ');
        if (size === "dir") return;
        sizes.set(curDir, (sizes.get(curDir) ?? 0) + parseInt(size));
        for (let i = 1; i < curDir.split('/').length; i++) {
            let upDir = curDir.split('/').slice(0, i).join('/');
            upDir = upDir == '' ? '/' : upDir;
            sizes.set(upDir, (sizes.get(upDir) ?? 0) + parseInt(size));
        }
        return;
    }
});
let total = 0;
sizes.forEach(v => total += v > 100000 ? 0 : v)
console.log(total);
