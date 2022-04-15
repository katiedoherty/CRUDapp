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
  const [name, setName] = useState("");
  const [surname, setSurname]=useState("");
  const [mobile, setMobile]=useState("");
  const [email, setEmail]=useState("");
  const [firstline, setfirstline]=useState("");
  const [secondline, setsecondline]=useState("");
  const [town, setTown]=useState("");
  const [county, setCounty]=useState("");
  const[EIRCODE, setEircode]=useState("");
  const [sfirstline, setshippingfirstline]=useState("");
  const [ssecondline, setshippingsecondline]=useState("");
  const [stown, setshippingTown]=useState("");
  const [scounty, setshippingCounty]=useState("");
  const[sEIRCODE, setshippingEircode]=useState("");
  const [postsState, setPostsState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchname, setsearchname]=useState("");
  const [currentname, setcurrentname]=useState("");
  const [updatedname, setupdatedname]=useState("");
  const [deletename, deletecustomername]=useState("");
  const [deleteemail, deletecustomeremail]=useState("");
  const [deletephone, deletecustomerphone]=useState("");
 
 
  useEffect(() => {
    setPostsState(posts);
  }, [posts]);

  //Delete customer function
  let deleteCustomer = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    let res = await fetch("http://localhost:3000/api/posts", {
     method: "DELETE",
     headers: {
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({
       FirstName: deletename},
       {EmailAddress:deleteemail},
       {Mobile: deletephone
     })
   });
   
   res = await res.json();
   deletecustomername("");
   deletecustomeremail("");
   deletecustomerphone("");
    setLoading(false);
   console.log(JSON.stringify(res));
   window.location.reload(false);

  }
  //update customer function
  let updatecustomername = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    let res = await fetch(`http://localhost:3000/api/posts?index_id=${currentname}`, {
     method: "PUT",
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
     },
     body: updatedname
   });
   res = await res.json();
   setcurrentname("");
   setupdatedname("");
    setLoading(false);
   console.log(JSON.stringify(res));
   router.push(`/${updatedname}`)
  }
  //The Read in CRUD function
  let readfunction = async (e) => {
    setLoading(true);
    e.preventDefault();
    //https://www.youtube.com/watch?v=yqXj7Jnqg9o&t=4012s = helped pass in user input to database and showed me how to do dynamic routing.
    //let searchedname = {FirstName:"Jimmy"};
   
    router.push(`/${searchname}`)
    setsearchname("");
    setLoading(false);
  }

  
  let submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await fetch(`http://localhost:3000/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        FirstName: name,
        Surname: surname,
        Mobile:mobile,
        EmailAddress:email,
        HomeAddress:{
          firstLine:firstline,
          secondline:secondline,
          Town:town,
          County:county,
          Eircode:EIRCODE
        },
        ShippingAddress:{
          firstLine:sfirstline,
          secondline:ssecondline,
          Town:stown,
          County:scounty,
          Eircode:sEIRCODE
        }
      }),
    })
    res = await res.json()
    console.log(res);
    setName("");
    setSurname("");
    setEmail("");
    setMobile("");
    setLoading(false);
    setfirstline("")
    setsecondline("")
    setTown("")
    setCounty("");
    setEircode("");
    setshippingfirstline("")
    setshippingsecondline("")
    setshippingTown("")
    setshippingCounty("");
    setshippingEircode("");
    window.location.reload(false);
    //console.log(body.HomeAddress.firstLine);
  };
  return (
    
    <div>
      <Head>
        <title>Customer Information</title>
        <link rel = "icon" href="/favicon.ico" />
       
      </Head>
  
     
      <div>
        <h2>Navigate the site using the links below</h2>
      {' '}
  <Link href="/items">
    <a>Phone Items</a>
  </Link>
  {' '}
  <Link href="/customeritems">
    <a>Customer Orders</a>
  </Link>
        <h1>Customer Information</h1>
      <table>
      <tbody>
      <tr>
    <th>Customer ID</th>
    <th>First Name</th>
    <th>Surname</th>
    <th>Mobile</th>
    <th>Email Address</th>
    <th>Home Address</th>
    <th>Shipping Address</th>
    
  </tr>
      {properties && properties.map(property =>(
         
  <tr key = {property._id}>
    <td>{property._id}</td>
    <td>{property.FirstName}</td>
    <td>{property.Surname}</td>
    <td>{property.Mobile}</td>
    <td>{property.EmailAddress}</td>
    <td>{property.HomeAddress?.firstLine}<br/>{property.HomeAddress?.secondline}<br/>{property.HomeAddress?.Town}<br/>{property.HomeAddress?.County}<br />{property.HomeAddress?.Eircode}</td>
    <td>{property.ShippingAddress?.firstLine}<br/>{property.ShippingAddress?.secondline}<br/>{property.ShippingAddress?.Town}<br/>{property.ShippingAddress?.County}<br />{property.ShippingAddress?.Eircode}</td>
    
    
  </tr>
  ))}
   </tbody>
</table>
          
          </div>
          <h3>Create New Customer</h3>
         
          <form >
          <label>First Name</label>
          <input
          type="text"
          name="fname"
          onChange={(e) => setName(e.target.value)}
          value={name}
          /><br></br>
          <label>Surname</label>
          <input
          type="text"
          name="lname"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          /><br />
          <label>Mobile</label>
          <input
          type="text"
          name="mobile"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          /><br />
          <label>Email Address</label>
          <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          /><br />


          <p><b>Home Address</b></p>
           <label>First Line of Address</label>
          <input
          type="text"
          name="address1"
          onChange={(e) => setfirstline(e.target.value)}
          value={firstline}
          /><br />
          <label>Second Line of Address</label>
          <input
          type="text"
          name="address2"
          onChange={(e) => setsecondline(e.target.value)}
          value={secondline}
          /><br />
          <label>Town</label>
          <input
          type="text"
          name="town"
          onChange={(e) => setTown(e.target.value)}
          value={town}
          /><br />
          <label>County</label>
          <input
          type="text"
          name="county"
          onChange={(e) => setCounty(e.target.value)}
          value={county}
          /><br />
          <label>EIRCODE</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => setEircode(e.target.value)}
          value={EIRCODE}
          /><br />



          <p><b>Shipping Address</b></p>
           <label>First Line of Address</label>
          <input
          type="text"
          name="address1"
          onChange={(e) => setshippingfirstline(e.target.value)}
          value={sfirstline}
          /><br />
          <label>Second Line of Address</label>
          <input
          type="text"
          name="address2"
          onChange={(e) => setshippingsecondline(e.target.value)}
          value={ssecondline}
          /><br />
          <label>Town</label>
          <input
          type="text"
          name="town"
          onChange={(e) => setshippingTown(e.target.value)}
          value={stown}
          /><br />
          <label>County</label>
          <input
          type="text"
          name="county"
          onChange={(e) => setshippingCounty(e.target.value)}
          value={scounty}
          /><br />
          <label>EIRCODE</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => setshippingEircode(e.target.value)}
          value={sEIRCODE}
          /><br />
          
      
    
    <button onClick={submitForm}>Create New User</button>
    </form>
<h3>Search For Customer</h3>
    <form>
    <label>Enter Customers Name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => setsearchname(e.target.value)}
          value={searchname}
          /><br />
          
      
    
    <button onClick={readfunction}>Search</button>
    </form>

    <h3>Update Customer Name</h3>
    <form>
    <label>Enter Customers Current Name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => setcurrentname(e.target.value)}
          value={currentname}
          /><br />

    <label>Enter Customers Updated Name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => setupdatedname(e.target.value)}
          value={updatedname}
          /><br />
           
          <button onClick={updatecustomername}>Update</button>
          </form>
        
        <h3>Delete A Customer From The Database</h3>
        <form>
        <label>Enter Customers Name</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => deletecustomername(e.target.value)}
          value={deletename}
          /><br />
          <label>Enter Customers Email</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => deletecustomeremail(e.target.value)}
          value={deleteemail}
          /><br />
          <label>Enter Customers Phone</label>
          <input
          type="text"
          name="eircode"
          onChange={(e) => deletecustomerphone(e.target.value)}
          value={deletephone}
          /><br />
           
          <button onClick={deleteCustomer}>Delete Customer</button>
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

    const customers = await client
      .db("mobile-phone-store")
      .collection("customers")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

      const properties = JSON.parse(JSON.stringify(customers));

      

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