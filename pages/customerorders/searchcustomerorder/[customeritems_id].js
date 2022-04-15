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

import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home({ properties, posts }) {

  //console.log(properties);

  const router = useRouter();
    const [searchcustomer, searchedCustomer]=useState("");
    const [additem, addeditem] =useState("");
    const [postsState, setPostsState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ deleteitem, deleteitemorder]=useState("")
    const[updateitem, currentupdateitem]=useState("");
    const[newupdateitem, updateditem]=useState("");
    const[id, addedid]=useState("");
    const[searchcust, searchcustomernameanddeleteitem]=useState(""); 
 
  useEffect(() => {
    setPostsState(posts);
  }, [posts]);

  //Delete customer function
  let deleteCustomer = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    let res = await fetch(`http://localhost:3000/api/orders?customeritems_id=${searchcust}`, {
     method: "DELETE",
     headers: {
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({"itemfromdatabase._id": deleteitem})
   });
   
   res = await res.json();
   deleteitemorder("");
   searchcustomernameanddeleteitem("");
    setLoading(false);
   console.log(JSON.stringify(res));
   window.location.reload(false);

  }
  //update customer function
  let updatecustomername = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    let res = await fetch(`http://localhost:3000/api/orders?customeritems_id=${updateitem}`, {
     method: "PUT",
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
     },
     body: newupdateitem
   });
   res = await res.json();
   currentupdateitem("");
   updateditem("");
    setLoading(false);
   console.log(JSON.stringify(res));
   window.location.reload(false);
  }
  //The Read in CRUD function
  let readfunction = async (e) => {
    setLoading(true);
    e.preventDefault();
    //https://www.youtube.com/watch?v=yqXj7Jnqg9o&t=4012s = helped pass in user input to database and showed me how to do dynamic routing.
    //let searchedname = {FirstName:"Jimmy"};
   
    router.push(`/customerorders/searchcustomerorder/${searchcustomer}`)
    searchedCustomer("");
    setLoading(false);
    console.log(properties)
  }

  //send to database
  let submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    let customer =await fetch(`http://localhost:3000/api/customerid?index_id=${id}`)
    let items = await fetch(`http://localhost:3000/api/itemid?items_id=${additem}`)
   let itemfromdatabase= await items.json();
    let customerfromdatabase = await customer.json();
    console.log(itemfromdatabase);
    let res = await fetch(`http://localhost:3000/api/orders`, {
      method: "POST",
      body: JSON.stringify({
        itemfromdatabase,
        customerfromdatabase
      }),
    })
    res = await res.json()
    console.log(res);
    addedid("");
    addeditem("");
    window.location.reload(false);
    //console.log(body.HomeAddress.firstLine);
  };
  return (
    
    <div>
      <Head>
        <title>Orders</title>
        <link rel = "icon" href="/favicon.ico" />
       
      </Head>
  
     
      <div>
      <h2>Navigate the site using the links below</h2>
      {' '}
  <Link href="/items">
    <a>Phone Items</a>
  </Link>
  {' '}
  <Link href="/">
    <a>Customer Information</a>
  </Link>
        <h1>Customer Orders</h1>
      <table>
      <tbody>
      <tr>
      <th>Customer Id</th>
      <th>Customer Details</th>
      <th>Item ID</th>
    <th>Item details</th>
   
    
  </tr>
      
         
  <tr key = {properties?._id}>
    <td>{properties?.customerfromdatabase?._id}</td>
    <td>{properties?.customerfromdatabase?.FirstName}{" "}{properties?.customerfromdatabase?.Surname}<br/> {properties?.customerfromdatabase?.ShippingAddress?.firstLine}<br/>{properties?.customerfromdatabase?.ShippingAddress?.secondline}<br/>{properties?.customerfromdatabase?.ShippingAddress?.Town}<br/>{properties?.customerfromdatabase?.ShippingAddress?.County}<br />{properties?.customerfromdatabase?.ShippingAddress?.Eircode}</td>
    <td>{properties?.itemfromdatabase?._id}</td>
    <td>Model: {properties?.itemfromdatabase?.Model}<br/>Manufacturer: {properties?.itemfromdatabase?.Manufacturer}<br/>Price: {properties?.itemfromdatabase?.Price}</td>
  </tr>

   </tbody>
</table>
          
          </div>
          <div>
            <h3>Add an Order</h3>
              <form>
          <label>Enter Customer ID</label>
          <input
          type="text"
          name="ID"
          onChange={(e) => addedid(e.target.value)}
          value={id}
          /><br />
          <label>Enter Item Manufacturer Name</label>
          <input
          type="text"
          name="ID"
          onChange={(e) => addeditem(e.target.value)}
          value={additem}
          /><br />
          
      
    
    <button onClick={submitForm}>Add Order</button>
    </form>
          </div>
          <h3>Search For Order By Customer ID</h3>
    <form>
    <label>Enter Customer ID</label>
          <input
          type="text"
          name="searchcustomer"
          onChange={(e) => searchedCustomer(e.target.value)}
          value={searchcustomer}
          /><br />
          
      
    
    <button onClick={readfunction}>Search</button>
    </form>

    <h3>Update Customer Name</h3>
    <form>
    <label>Enter Customer ID</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => currentupdateitem(e.target.value)}
          value={updateitem}
          /><br />

    <label>Enter Updated Customer Name</label>
          <input
          type="text"
          name="custname"
          onChange={(e) => updateditem(e.target.value)}
          value={newupdateitem}
          /><br />
           
          <button onClick={updatecustomername}>Update</button>
          </form>
        
        <h3>Delete An Order From The Database</h3>
        <form> <label>Enter Customer ID</label>
          <input
          type="text"
          name="deleteorder"
          onChange={(e) => searchcustomernameanddeleteitem(e.target.value)}
          value={searchcust}
          /><br />
        <label>Enter Item ID</label>
          <input
          type="text"
          name="deleteorder"
          onChange={(e) => deleteitemorder(e.target.value)}
          value={deleteitem}
          /><br />
         
          <button onClick={deleteCustomer}>Delete Order</button>
          </form>
    
         
    
    </div>
  );
  }

  //allows us o get the data from out server side and send to frontend
  export async function getServerSideProps(context) {
    try {
     
      //this var passes the users input into this function
      const orders = context.query.customeritems_id;
      
        
          let data = await fetch(`http://localhost:3000/api/orders?customeritems_id=${orders}`)
        
          const properties = await data.json();
  
      return {
        props: { properties:properties},
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