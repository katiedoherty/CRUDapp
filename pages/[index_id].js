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
import {useRouter} from 'next/router';
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Searchcustomername({ properties, posts }) {

  //console.log(properties);
    const router =useRouter();
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
  const [errormessage, seterrormessage]=useState("");
  const [deletename, deletecustomername]=useState("");
  const [deleteemail, deletecustomeremail]=useState("");
  const [deletephone, deletecustomerphone]=useState("");


  useEffect(() => {
    setPostsState(posts);
  }, [posts]);

  //delete a customer function 
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
    router.push(`/${searchname}`)
    console.log(properties);
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
   
  };
  return (
    
    <div>
      <Head>
        <title>Customer Information</title>
        <link rel = "icon" href="/favicon.ico" />
       
      </Head>
      <h2>Navigate the site using the links below</h2>
      {' '}
  <Link href="/items">
    <a>Phone Items</a>
  </Link>
  {' '}
  <Link href="/customeritems">
    <a>Customer Orders</a>
  </Link>
      <div>
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
      
         
  <tr key = {properties?._id}>
  <td>{properties?._id}</td>
    <td>{properties?.FirstName}</td>
    <td>{properties?.Surname}</td>
    <td>{properties?.Mobile}</td>
    <td>{properties?.EmailAddress}</td>
    <td>{properties?.HomeAddress?.firstLine}<br/>{properties?.HomeAddress?.secondline}<br/>{properties?.HomeAddress?.Town}<br/>{properties?.HomeAddress?.County}<br />{properties?.HomeAddress?.Eircode}</td>
    <td>{properties?.ShippingAddress?.firstLine}<br/>{properties?.ShippingAddress?.secondline}<br/>{properties?.ShippingAddress?.Town}<br/>{properties?.ShippingAddress?.County}<br />{properties?.ShippingAddress?.Eircode}</td>
    
    
  </tr>
 
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
   {errormessage}

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
   
    //this var passes the users input into this function
    const custname = context.query.index_id;
    console.log(custname);
      
        let data = await fetch(`http://localhost:3000/api/posts?index_id=${custname}`)
      
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