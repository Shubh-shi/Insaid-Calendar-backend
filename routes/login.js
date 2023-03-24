const express=require('express');
const router=express.Router();
const db= require('./../database/db.js');
const mysql = require("mysql");
var CryptoJS = require("crypto-js");
router.use(express.json());

//LOGIN (AUTHENTICATE USER)
router.post("/", (req, res)=> {
  const email = req.body.email
  // console.log(user_id);
  db.getConnection ( async (err, connection)=> {
   if 
   (err) throw (err)
   const sqlSearch = "SELECT ue.id,ue.program_id,ue.category FROM `users` As us JOIN user_enrolments AS ue ON us.id=ue.user_id WHERE us.email=?"
   const search_query = mysql.format(sqlSearch,[email])
  //  console.log(search_query);
   await connection.query (search_query, async (err, result) => {
    // connection.release()
    
    if (err) throw (err)
    if (result.length == 0) {

     console.log("--------> User does not exist")
     res.sendStatus(404)
    } 
    else{
       if(result.length==1)
      {
        res.json({ enrol_id:result[0].id,count:result.length,category: result[0].category,program_id:result[0].program_id});
      }else{
      res.json({count:result.length});
      }
    }
   }) //end of connection.query()
  }) //end of db.connection()
  })
router.post("/fetchinfo", (req, res)=> {
  const email = req.body.email
  // console.log(user_id);
  db.getConnection ( async (err, connection)=> {
   if 
   (err) throw (err)
   const sqlSearch = "SELECT ue.id,ue.user_id,ue.program_id,ue.category FROM `users` As us JOIN user_enrolments AS ue ON us.id=ue.user_id WHERE us.email=?"
   const search_query = mysql.format(sqlSearch,[email])
  //  console.log(search_query);
   await connection.query (search_query, async (err, result) => {
    // connection.release()
    
    if (err) throw (err)
    if (result.length == 0) {

     console.log("--------> User does not exist")
     res.sendStatus(404)
    } 
    else{
      var enrol=new Array();
      // res.json(result);
      for(i=0;i<result.length;i++)
      {
        enrol[i]={"enrol_id":result[i].id,"program_id":result[i].program_id,"category":result[i].category,"user_id":result[i].user_id,count:result.length};
      }
      res.json(enrol);
    }
   }) //end of connection.query()
  }) //end of db.connection()
  }) //end of app.post() //end of app.post()

module.exports = router