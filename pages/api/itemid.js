
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

// reference: how to create a post method with next.js https://www.techomoro.com/how-to-connect-mongodb-atlas-with-a-next-js-app/
export default async function handler(req, res) {
   
  const client = await clientPromise;
    const db = client.db('mobile-phone-store');
    switch (req.method) {
     
      case "GET":
        const query = req.query.items_id;
       // let custname = JSON.parse(req.searchedname);
          let posts = await db.collection("items").findOne({_id: ObjectId(query)});
          
          res.json(posts);
         
          break;
         
    }
  }

  
