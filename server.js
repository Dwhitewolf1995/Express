const express = require('express') //Внедряем пакет express
const app = express() //"app" должен по идее называться "server".

const frontend = require('./routes/frontend.js') //Забираем модуль frontend
const onGetGuestbook = require('./routes/guestbook.js')
const animals = require('./routes/animals.js')

const PORT = 1337



// MIddleware läggs alltid FÖRE endpoints 

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded




//Endpoints / resurser / routes




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

//Роуты

app.get('/guestbook', onGetGuestbook )


app.use('/frontend', frontend)


app.use('/animals', animals)





//Стартует сервер
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
})

