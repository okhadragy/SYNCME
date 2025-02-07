const express = require('express')
const path = require('path'); 
const app = express()
const port = 3000
const dashboardroute = require('./routes/dashboard.js')
const loginroute = require('./routes/login.js')
const signuproute = require('./routes/signup.js')
const messageroute = require('./routes/message.js')
const createmessageroute = require('./routes/messagecreate.js')
const messagesroute = require('./routes/messages.js')
const grouproute = require('./routes/group.js')
const groupcreateroute = require('./routes/groupcreate.js')
const groupsroute = require('./routes/groups.js')
const studentroute = require('./routes/student.js')
const studentcreateroute = require('./routes/studentcreate.js')
const studentsroute = require('./routes/students.js')


app.use('/static', express.static(path.join(__dirname, 'static'))) 
app.use(express.json()); 
app.use("/",dashboardroute)
app.use("/",loginroute)
app.use("/",signuproute)
app.use("/",messageroute)
app.use("/",createmessageroute)
app.use("/",messagesroute)
app.use("/",grouproute)
app.use("/",groupcreateroute)
app.use("/",groupsroute)
app.use("/",studentroute)
app.use("/",studentcreateroute)
app.use("/",studentsroute)
app.get('*', (req, res)=>{
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})