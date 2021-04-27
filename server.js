const express = require('express') //Внедряем пакет express
const app = express() //"app" должен по идее называться "server".

const PORT = 1337


// Ниже РОУТЫ
//упраляет ресурсом "web root" - request и response
app.get('/', (req, res)=> { //регистрирует роут на сервере
console.log('GET /'); 
res.send('Yes i am here')  //res.send - отправляет сообщение на страницу 
})

app.get('/secret', (req, res) => {
console.log('GET /secret');
res.send('You have found secret route')
})

app.get('/Frontend', (req, res) => {
    console.log('GET /Frontend');
    res.sendFile(__dirname + '/frontend/index.html') //__dirname 
    })


//Стартует сервер
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
})

console.log('This file is done')