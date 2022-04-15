
import clientPromise from "../../lib/mongodb";

// reference: how to create a post method with next.js https://www.techomoro.com/how-to-connect-mongodb-atlas-with-a-next-js-app/
export default async function handler(req, res) {
   
  const client = await clientPromise;
    const db = client.db('mobile-phone-store');
    switch (req.method) {
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newPost = await db.collection("items").insertOne(bodyObject);
        res.json(newPost);
        break;
      case "GET":
        const query = req.query.items_id;
       // let custname = JSON.parse(req.searchedname);
          let posts = await db.collection("items").findOne({Manufacturer: query});
          
          res.json(posts);
         
          break;
          case"PUT":
          const updatemanufacturername= req.query.items_id;
          
          let update = await db.collection("items").updateOne({"Manufacturer": updatemanufacturername}, {$set:{Manufacturer:req.body}})
         res.json(update);
         
         break;
         case "DELETE":
           
          let deletevar = await db.collection("items").deleteMany(req.body);
          console.log(`${deletevar.deletedCount} document(s) were deleted`);
          res.json(deletevar);
          break;
    }
  }

  
