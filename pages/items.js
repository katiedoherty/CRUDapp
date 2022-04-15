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

import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home({ properties, posts }) {

  //console.log(properties);

  const router = useRouter();
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setModel]=useState("");
  const [price, setPrice]=useState("");
  const [postsState, setPostsState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchmanufacture, manufacturername]=useState("");
  const [currentmanufacturername, currentmanufacturer]=useState("");
  const [updatedmanufacturer, newmanufacturername]=useState("");
  const [deletemanufacturername, deletemanufacturer]=useState("");
  const [deletemmodel, deletemodel]=useState("");
  const [deletemprice, deleteprice]=useState("");
 
 
  useEffect(() => {
    setPostsState(posts);
  }, [posts]);

  //Delete customer function
  let deleteCustomer = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    let res = await fetch("http://localhost:3000/api/items", {
     method: "DELETE",
     headers: {
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({
       Manufacturer: deletemanufacturername},
       {Model:deletemmodel},
       {Price: deletemprice
     })
   });
   
   res = await res.json();
   deletemanufacturer("");
   deletemodel("");
   deleteprice("");
    setLoading(false);
   console.log(JSON.stringify(res));
   window.location.reload(false);

  }
  //update customer function
  let updatecustomername = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    let res = await fetch(`http://localhost:3000/api/items?items_id=${currentmanufacturername}`, {
     method: "PUT",
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
     },
     body: updatedmanufacturer
   });
   res = await res.json();
   currentmanufacturer("");
   newmanufacturername("");
    setLoading(false);
   console.log(JSON.stringify(res));
   router.push(`/itempage/${updatedmanufacturer}`)
  }
  //The Read in CRUD function
  let readfunction = async (e) => {
    setLoading(true);
    e.preventDefault();
    //https://www.youtube.com/watch?v=yqXj7Jnqg9o&t=4012s = helped pass in user input to database and showed me how to do dynamic routing.
    //let searchedname = {FirstName:"Jimmy"};
   
    router.push(`/itempage/${searchmanufacture}`)
    manufacturername("");
    setLoading(false);
  }

  
  let submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await fetch(`http://localhost:3000/api/items`, {
      method: "POST",
      body: JSON.stringify({
       Manufacturer: manufacturer,
       Model: model,
       Price: price
      }),
    })
    res = await res.json()
    console.log(res);
    setmanufacturer("");
    setModel("");
    setPrice("");
   
    window.location.reload(false);
    //console.log(body.HomeAddress.firstLine);
  };
  return (
    
    <div>
      <Head>
        <title>Phone Items</title>
        <link rel = "icon" href="/favicon.ico" />
       
      </Head>
     
      <div>
      <h2>Navigate the site using the links below</h2>
      <Link href="/">
          <a>Customer Information</a>
        </Link>
        {' '}
        <Link href="/customeritems">
        <a>Customer Orders</a>
        </Link>
        <h1>Phone Items</h1>
      <table>
      <tbody>
      <tr>
      <th>Item ID</th>
    <th>Manufacturer</th>
    <th>Model</th>
    <th>Price</th>
   
    
  </tr>
      {properties && properties.map(property =>(
         
  <tr key = {property._id}>
    <td>{property._id}</td>
    <td>{property.Manufacturer}</td>
    <td>{property.Model}</td>
    <td>{property.Price}</td>
    
  </tr>
  ))}
   </tbody>
</table>
          
          </div>
          <h3>Create New Item</h3>
         
          <form >
          <label>Manufacturer</label>
          <input
          type="text"
          name="fname"
          onChange={(e) => setmanufacturer(e.target.value)}
          value={manufacturer}
          /><br></br>
          <label>Model</label>
          <input
          type="text"
          name="lname"
          onChange={(e) => setModel(e.target.value)}
          value={model}
          /><br />
          <label>Price</label>
          <input
          type="text"
          name="mobile"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          /><br />
         
    <button onClick={submitForm}>Submit</button>
    </form>
<h3>Search For Item</h3>
    <form>
    <label>Enter Manufacturer Name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => manufacturername(e.target.value)}
          value={searchmanufacture}
          /><br />
          
      
    
    <button onClick={readfunction}>Search</button>
    </form>

    <h3>Update Manufacturer Name</h3>
    <form>
    <label>Enter Manufacturer Current Name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => currentmanufacturer(e.target.value)}
          value={currentmanufacturername}
          /><br />

    <label>Enter Manufacturer Updated Name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => newmanufacturername(e.target.value)}
          value={updatedmanufacturer}
          /><br />
           
          <button onClick={updatecustomername}>Update</button>
          </form>
        
        <h3>Delete A Item From The Database</h3>
        <form>
        <label>Enter Manufacturers Name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => deletemanufacturer(e.target.value)}
          value={deletemanufacturername}
          /><br />
          <label>Enter Model name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => deletemodel(e.target.value)}
          value={deletemmodel}
          /><br />
          <label>Enter Price</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => deleteprice(e.target.value)}
          value={deletemprice}
          /><br />
           
          <button onClick={deleteCustomer}>Delete Item</button>
          </form>
    
    </div>
  );
  }

  //allows us o get the data from out server side and send to frontend
export async function getServerSideProps(context) {
  try {

    let customername = context.query.index_id;
    console.log(customername);
    const client = await clientPromise;

    const items = await client
      .db("mobile-phone-store")
      .collection("items")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

      const properties = JSON.parse(JSON.stringify(items));

      

    return {
      props: { properties: properties},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
//https://www.geeksforgeeks.org/how-to-update-nested-state-properties-in-reactjs/
//helped with calling dynamic data 