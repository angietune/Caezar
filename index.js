const mycli = require('commander')
const caezar = require('caezar')
const output = require('output')
const input = require('input');
const { action } = require('commander');

let writeableStream = output.createWriteStream("output.txt");
let readableStream = input.createWriteStream("input.txt");
let transformStream = 
readableStream.on('str', caezar);


mycli
    .option('-a, --encode, --decode [action]', '-s, --shift, [num]', '-i, --input [input.txt]', '-o, --output [output.txt]')

mycli.parse(process.argv)