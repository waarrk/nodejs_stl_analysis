const NodeStl = require("node-stl");

var stl = new NodeStl(__dirname + '/3DBenchy.stl', {density: 1.04});
console.log(stl.volume + 'cm^3');     // 21cm^3
console.log(stl.weight + 'gm');       //  1gm
console.log(stl.boundingBox,'(mm)');  // [60,45,50] (mm)
console.log(stl.area,'(m)');          // 91.26 (m)
console.log(stl.centerOfMass,'(mm)'); // [30,22.5,25] (mm)
console.log(stl.isWatertight ? 'STL is watertight' : 'STL is not watertight');