const express=require('express');
const app=express();

app.use(express.json());

const c=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]

app.get('/', (req, res)=>{
    res.send('Hello World!!!');
});

app.get('/api/couses',(req,res)=>{
    res.send(c);
});

app.get('/api/couses/:id',(req,res)=>{
    const ca = c.find(s=>s.id=== parseInt(req.params.id));
    if(!ca){
        res.status(404).send('Not find');
    }else{
        res.send(ca);
    }
});

app.get('/api/post/:year/:month',(req,res)=>{
    res.send(req.params);
});

app.get('/api/post/:year/:month/:day',(req,res)=>{
    res.send(req.query);
});

app.post('/api/po',(req,res)=>{
    const co={
        id:c.length+1,
        name:req.body.name
    };
    c.push(co);
    res.send(co);
});
//PORT
const port=process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listning ${port}`));