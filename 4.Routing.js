//Route definition 
app.METHOD(PATH, HANDLER)

//METHOD - HTTP request methods like GET, POST, PUT, DELETE etc
//PATH - path of resource
//HANDLER - function when route is matched

//GET route
app.get('/', (req, res) => {
    res.send('Got a POST request')
})

//POST route
app.post('/', (req, res) => {
    res.send('Got a POST request')
})

