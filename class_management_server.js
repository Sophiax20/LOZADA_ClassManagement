const express =require(`express`);
const app =express();
const PORT = 3000;

app.use(express.json());

let users= [
    {id:1, lastName:`Lozada`,firstName:`Sophia Joyce`, section:`BSIT-4A`, status:`p`},
    {id:2, lastName:`Joyce`,firstName:`Maria Sophia`, section:`BSIT-4A`, status:`a`}
];

app.get(`/users`,(req,res)=>{
    const{lastName,firstName,sections,status} =req.body;

    const userIndex = users.findIndex(user.firstName === firstName && user.lastName === lastName);

    if (userIndex !== -1){
        users[userIndex].status = status ;
        console.log(`Updated attendance for ${lastName} ${firstName} to ${status}`);
        res.status(200).json({message:`Attendance for ${lastName} ${firstName} has been updated to ${status}.`});

     }
     else{
        const newUser = {
            id: users.length +1 ,
            lastName,
            firstName,
            section,
            status
        };
        users.push(newUser);
         console.log(`New user addded: ${lastName} ${firstName} with status:${status}`);
         res.status(201).json ({message :`attendance for ${lastName} ${firstName} has been uodated to ${status}`});
    };


});

app.get(`/users`,(req,res) => {
    res.status(200).json(users);

});

app.get(`/`,(req,res) => {
    res.send(`Server is up and running `);
});

app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);

})

module.exports = app;
