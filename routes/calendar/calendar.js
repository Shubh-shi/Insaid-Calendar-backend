const express=require('express');
const router=express.Router();
const db= require('../../database/db');
const mysql = require("mysql")

const bcrypt = require("bcrypt")
router.use(express.json())
const moment=require('moment');


//router for fetching the events details
router.post("/fetchevents", (req, res)=> {
    // storing the passed enrol id into variable
    const enrol_id = req.body.enrol_id;
    // console.log(user_id);
    db.getConnection ( async (err, connection)=> {
    if 
    (err) throw (err)

    //query for fetching the user enrolment details on the basis of the enrolemt id
    const sqlSearch = "SELECT * FROM `user_enrolments` WHERE id=?";
    const search_query = mysql.format(sqlSearch,[enrol_id])
    //  console.log(search_query);
    await connection.query (search_query, async (err, result) => {
    // connection.release()
    
    if (err) throw (err)
    if (result.length == 0) {
        res.sendStatus(404)
    } 
    else{
        // query for fetching the events information on the basis of the user program,batch and category
        const sqlSearch1 = "SELECT * FROM events WHERE batch_id=? AND category_id=? AND program_id=? AND status IN(1, 2)  ORDER BY id";
        const search_query1 = mysql.format(sqlSearch1,[result[0].batch_id,result[0].category,result[0].program_id])
        // console.log(search_query1);
        await connection.query (search_query1, async (err, result1) => {
        
        if (err) throw (err)
            if (result1.length == 0) {
            res.sendStatus(404)
            } 
        else {
            // defining events as a new array
            var events=new Array();

            //storing event query data into event array
            for(i=0;i<result1.length;i++)
            {
                if(result1[i].status==2)
                    events[i]={"id":result1[i].id,"title":result1[i].title,"start":moment(result1[i].startdate).format("YYYY-MM-DD")+' '+result1[i].starttime,"end":moment(result1[i].enddate).format("YYYY-MM-DD")+' '+result1[i].endtime,"description":result1[i].description,"status":result1[i].status,"url":result1[i].title,"className":"black-background"};
                else
                    events[i]={"id":result1[i].id,"title":result1[i].title,"start":moment(result1[i].startdate).format("YYYY-MM-DD")+' '+result1[i].starttime,"end":moment(result1[i].enddate).format("YYYY-MM-DD")+' '+result1[i].endtime,"description":result1[i].description,"status":result1[i].status,"url":result1[i].title};
            }
        }
        //sending the events details array as a response
        res.json(events);
        })
        
    }
        
    }) //end of connection.query()
    }) //end of db.connection()
    }) //end of app.post()

module.exports = router