
/*
DATABASE DESIGN:
I created one database with two collections in mongodb. One was with with customer information in it and item information in it and the
other contained item information. I then created another collection which was intended to hold the customers orders 
when the users id was entered into the searchbar on the orders page along with the id of the item then the customers information along with the item 
information will be pulled from both collections and added to one document to the orders collection. This way a 
new order is created everytime a customer makes a new purchase and you can easily search 
all the customers orders by looking up their id.
I used vsCode to build this application
I am using NextJS on the frontend.
*/ 

import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

// reference: how to create a post method with next.js https://www.techomoro.com/how-to-connect-mongodb-atlas-with-a-next-js-app/
export default async function handler(req, res) {
   
  const client = await clientPromise;
    const db = client.db('mobile-phone-store');
    switch (req.method) {
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newPost = await db.collection("customeritems").insertOne(bodyObject)
        res.json(newPost);
        break;
      case "GET":
        const query = req.query.customeritems_id;
       //let custname = JSON.parse(req.searchedname);
          let posts = await db.collection("customeritems").findOne({"customerfromdatabase._id":query});
          
          res.json(posts);
         
          break;
          case"PUT":
          const updatecustname= req.query.customeritems_id;
          
          let update = await db.collection("customeritems").updateMany({"customerfromdatabase._id":updatecustname}, {$set:{'customerfromdatabase.FirstName':req.body}})
          await db.collection("customers").updateOne({_id: ObjectId(updatecustname)}, {$set:{FirstName:req.body}})
          res.json(update);
         
         break;
         case "DELETE":
           
          let deletevar = await db.collection("customeritems").deleteOne(req.body);
          console.log(`${deletevar.deletedCount} document(s) were deleted`);
          res.json(deletevar);
          break;
    }
  }

  
