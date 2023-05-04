import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from './Table';

 const Home=()=>{
    const [data,setData]=useState({
        name:"",
        userName:"",
        emai:"",
        phone:"",
        website:""
    });

    const getData=async ()=>{
        try{
            const response=await axios.get('https://jsonplaceholder.typicode.com/users')
            // console.log(response);
            const internalData=response.data;
            setData(internalData);
            console.log(internalData);
        }
        catch(err)
        {
            console.log("Error in grtData Front");
        }
        

    }

    const display=(posts)=>{
        if(!posts.length) return null;
        return posts.map((post)=>{
            return <Table id={post.id} name={post.name} userName={post.username} address={post.address}
            phone={post.phone}          
            website={post.website} />
        })
    }

    useEffect(()=>{
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>userName</th>
          <th>address</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        { display(data)}        
      </table>


    )
 }

 export default Home;