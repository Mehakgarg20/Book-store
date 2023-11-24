import { Button } from '@mui/material';
import React from 'react'
import "./Book.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Book = (props) => {
  const history=useNavigate();
    const { _id, name, author, description, price, image } = props.book;
    const deletehandler= async()=>{
      await axios.delete(`http://localhost:5000/books/${_id}`)
      .then(res=>res.data)
      .then(()=>history("/"))
      .then(()=>history("/books"));
    }
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <article style={{textAlign:"center"}}>By {author}</article>
      <h3 style={{textAlign:"center"}}>{name}</h3>
      <p style={{textAlign:"center"}}>{description}</p>
      <h3 style={{textAlign:"center"}}>Rs {price}</h3>
      <div className='button-book'>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deletehandler} sx={{ mt: "auto" }} id='delete'>
        Delete
      </Button>
      </div>
    </div>
  )
}

export default Book