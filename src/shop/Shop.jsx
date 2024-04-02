import React from 'react'
import "./Shop.css"
import CategoryCards from '../components/categorycard/categorycard'
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <>
  <div ><h1>Category</h1></div>

<div className="container">
  <div className="row">
    <div className="col-lg-4">
      <Link to="/furniture" style={{ textDecoration: 'none' }}>
        <div><CategoryCards category="Furniture" img="https://tse2.mm.bing.net/th?id=OIP.ameBa3MzAAU1BRuVaMpXBQHaGO&pid=Api&P=0&h=180"/></div>
      </Link>
      <Link to="/electronic" style={{ textDecoration: 'none' }}>
      <div><CategoryCards category="Electronics" img="https://tse4.mm.bing.net/th?id=OIP.1aR9yfRdX-j2kYk7e0TZ8QHaHo&pid=Api&P=0&h=180"/></div>
      </Link>
      <Link to="/sports" style={{ textDecoration: 'none' }}>
        <div><CategoryCards category="Sports" img="https://tse4.mm.bing.net/th?id=OIP.RpmkaF9KrW1jIZuCoDtO2gHaFY&pid=Api&P=0&h=180"/></div>
      </Link>
    </div>
    <div className="col-lg-4">
      <Link to="/appliances" style={{ textDecoration: 'none' }}>
        <div><CategoryCards category="Appliances" img="https://tse4.mm.bing.net/th?id=OIP.Oc-gyy72db1EvQWegya8GgHaHa&pid=Api&P=0&h=180"/></div>
      </Link>
      <Link to="/clothing" style={{ textDecoration: 'none' }}>
        <div><CategoryCards category="Clothing" img="https://tse4.explicit.bing.net/th?id=OIP.J8Izd_SSqpiFNJB0TXD-rgHaJl&pid=Api&P=0&h=180"/></div>
      </Link>
      <Link to="/beauty" style={{ textDecoration: 'none' }}>
        <div><CategoryCards category="Beauty" img="https://tse2.mm.bing.net/th?id=OIP.VNbP-AuAxelV_MVdPkrZogHaEy&pid=Api&P=0&h=180"/></div>
      </Link>
    </div>
    <div className="col-lg-4">
      <Link to="/homedecor" style={{ textDecoration: 'none' }}>
        <div><CategoryCards category="Home Decor" img="https://tse4.mm.bing.net/th?id=OIP.9lQ25pUT85VrSECSpbDjNQHaHv&pid=Api&P=0&h=180"/></div>
      </Link>
      <Link to="/outdoorgear" style={{ textDecoration: 'none' }}>
        <div><CategoryCards category="Outdoor Gear" img="https://tse4.mm.bing.net/th?id=OIP.P8IszHx2TwW12ndvWpCPWQAAAA&pid=Api&P=0&h=180"/></div>
      </Link>
      <Link to="/petsupplies" style={{ textDecoration: 'none' }}>
        <div><CategoryCards category="Pet Supplies" img="https://tse4.mm.bing.net/th?id=OIP.oMssPKNBQSRvVJZkZnWw7QHaEU&pid=Api&P=0&h=180"/></div>
      </Link>
    </div>
  </div>
</div>
</>
  )
}

export default Shop
