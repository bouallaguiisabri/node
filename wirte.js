



const fs =require('fs')
fs.writeFile("text.txt", "HELLO WORLD", "utf-8", (err, data) => {
    if(err) throw err
    else console.log(data)
})