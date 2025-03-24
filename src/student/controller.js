const { get } = require("express/lib/response");
const pool = require('../../db');
const queries = require('./queries');


const getStudents = (req,res) => {
    pool.query(queries.getStudents,(error,results) => 
    {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);

    })
};

const getStudentById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id],(error,results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
};

const addStudent = (req,res) => {
    const{name,email,age,dob} = req.body;

    //check if email exist
    pool.query(queries.checkEmailExists,[email], (error,results)=>
        {
        if(results.rows.length > 0){
            res.send("Email exists already")
        }

        //add student to database
        pool.query(queries.addStudent,[name,email,age,dob],(error,results) => {
            if(error){
                throw error;
            }
            res.status(201).send("Student added sucessfully!");
        });  
    });
}; 

const updateStudent = (req,res) => {
    const id = parseInt(req.params.id);
    const  {name} = req.body;

    pool.query(queries.getStudentById,[id],(error,results) => {
        if(error){
            throw error;
        }
        if(results.rows.length === 0){
            res.send("student does not exist in the database");
        }
        pool.query(queries.updateStudent,[name,id],(error,results) => {
            if(error){
                throw error;
            }
            res.status(200).send("Student updated sucessfully");
        })
    })
}
module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
};