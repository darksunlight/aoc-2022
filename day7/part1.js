require("../utils");
const input = readInput();
let curDir = "";
const sizes = new Map();
input.lines().map(line => {
    if (line.startsWith("$ cd ")) {
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
    if (line.startsWith('$')) return;
    const [size] = line.split(' ');
    if (size === "dir") return;
    sizes.set(curDir, (sizes.get(curDir) ?? 0) + parseInt(size));
    for (let i = 1; i < curDir.split('/').length; i++) {
        let upDir = curDir.split('/').slice(0, i).join('/');
        upDir = upDir == '' ? '/' : upDir;
        sizes.set(upDir, (sizes.get(upDir) ?? 0) + parseInt(size));
    }
    return;
});
print([...sizes].map(([,v]) => v).filter(v => v <= 100000).sum());
