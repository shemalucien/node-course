// const fs = require('fs')

// // fs.writeFileSync('notes.txt','My name is Shema Lucien')

// fs.appendFileSync('notes.txt', ' I am a javascript Developer')

// const add=require('./utils')
// const name='Shema'
// const sum=add(10,2)
// console.log(sum)

const getNotes = require('./notes')
const msg = getNotes()
console.log(msg)