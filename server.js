const express = require('express') //Внедряем пакет express
const path = require('path') 
const app = express() //"app" должен по идее называться "server".




const frontend = require('./routes/frontend.js') //Забираем модуль frontend
const onGetGuestbook = require('./routes/guestbook.js')
const animals = require('./routes/animals.js')

const PORT = 1337 // Port server
const staticFolder = path.join(__dirname, 'frontend')//static mapp



//=======================================================================================//



// MIddleware läggs alltid FÖRE endpoints 

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Собственная функция middleware
app.use((req, res, next) => {
    //Logger 
    console.log(`${req.method} ${req.url}`, req.params);
    next()

})

//=======================================================================================//
//Static mapp


app.use(express.static(staticFolder))





//=======================================================================================//
//Firestore project


app.get('/', (req, res) => {
    res.send('Firestore project')
})




//=======================================================================================//
//Endpoints / resurser / routes





//упраляет ресурсом "web root" - request и response

app.get('/', (req, res)=> { //регистрирует роут на сервере
//console.log('GET /'); 
res.send('Yes i am here')  //res.send - отправляет сообщение на страницу 
})

app.get('/secret', (req, res) => {
//console.log('GET /secret');
res.send('You have found secret route')
})

//=======================================================================================//
//Роуты

app.get('/guestbook', onGetGuestbook )


app.use('/frontend', frontend)


app.use('/animals', animals)




//=======================================================================================//
//Стартует сервер


app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
})

