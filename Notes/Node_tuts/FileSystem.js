const fs = require('fs');

// Syncronous WAY --  Blocking mathods;
// Reading a file.
// let data = fs.readFileSync('./readme.txt', 'utf8');
// console.log(data);
// Write a file
//fs.writeFileSync('writeMe.txt', data);

// Asyncronous. way of reading and writing
// fs.readFile('readme.txt', 'utf8', function (err, data) {
//   if (err) throw 'Cannot read file.';
//   console.log(data);
//   fs.writeFile('writeData.txt', data, function (err) {
//     if (err) throw 'Cannot write file.';
//   });
// });

// console.log('It will call first');

// DELETE A FILE
// function deleteCB(err) {
//   if (err) throw new Error('Cannot delete file.');
//   console.log('File deleted successfully');
// }

// fs.unlink('writeData.txt', deleteCB);
// fs.unlink('writeMe.txt', deleteCB);

//MAKE DIR
// fs.mkdir('test', function () {
//   fs.readFile('readme.txt', 'utf8', function (err, data) {
//     fs.writeFile('./test/data.txt', data, function () {
//       console.log('file created successfully!');
//     });
//   });
// });

//REMOVE DIR-If folder is not empty we cannot delete the folder directly..
// fs.unlink('./test/data.txt', function () {
//   fs.rmdir('./test', function () {
//     console.log('file deleted successfully');
//   });
// });

//Read dir: it will read current folder
// fs.readdir('./', function (err, data) {
//   if (err) throw err;
//   console.log('DATA::', data);
// });

/// READ AND WRITE file using STREAM

//let readStream = fs.createReadStream('readme.txt');
//console.log(readStream);

// readStream.on('data', (data) => {
//   console.log(data.toString());
// });

//STATS OF A FILE ---  To read the metadata of file
// fs.stat('test', function (err, info) {
//   if (err) throw err;
//   console.log('Stats:', info);
//   console.log('Is Directory:', info.isDirectory());
//   console.log('Is File:', info.isFile());
// });

// COPY A FILE
// fs.copyFile('readme.txt', 'rme.txt', function (err) {
//   if (err) throw err;
//   console.log('file copied');
// });
