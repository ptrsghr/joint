#!/usr/bin/env node

// Peter Sugihara
// March 2012

var path = require('path')
var fs = require('fs')

var sourcePath, port, staticPath

// Argument Validation
// ___________________

// Print a diagnostic message followed by the usage line, then die.
var usageDie = function(message) {
  if (message)
    console.log(message)
  console.log('usage: pass program.pass [<port#> <static directory>]')
  process.exit()
}

// Verify that the command was called with the correct number of arguments.
if (process.argv.length !== 3 && process.argv.length !== 5) {
  usageDie('invalid number of arguments')
}

sourcePath = path.resolve(process.argv[2])
// Verify that the source path exists and points to a Pass program.
if (!path.existsSync(sourcePath))
  usageDie('file not found: ' + sourcePath)
if (!path.extname(sourcePath) === 'pass')
  usageDie('Pass programs must have .pass extension')

if (process.argv.length === 5) {
  // Verify that the port is a number in the correct range.
  port = parseFloat(process.argv[3])
  if (!port || port < 0 || port > 65535) {
    usageDie('invalid port number')
  }

  // Verify that the static path exists and points to a directory.
  staticPath = path.resolve(process.argv[4])
  if (!path.existsSync(staticPath))
    usageDie('file not found: ' + staticPath)
  if (!fs.statSync(staticPath).isDirectory())
    usageDie('static arg must be directory')
}

// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500)
//       return res.end('Error loading index.html')
//     }
//     res.writeHead(200)
//     res.end(data)
//   });
// }

// var app = require('http').createServer(handler).listen(port)