const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient
async function connect(){
    try{
        await MongoClient.connect('mongodb://localhost:27017/f8_collection', (err, db)=>{
            if (err) throw err

            console.log(db.db())

        db.db().collection('courses').find().toArray((err, result) => {
            if (err) throw err

            console.log(result)
        })
                })
            }
            catch(err){
                console.log(err)
            }
}

module.exports = {connect};

