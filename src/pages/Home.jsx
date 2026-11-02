import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Gauge, Trophy, PackageCheck } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
 const [notice,setNotice]=useState('')
 return <>
 <section className="hero container">
  <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> MINI KART / DIE-CAST CLUB</div><h1>Small cars.<br/><em>Big attitude.</em></h1><p>From legendary muscle machines to wild fantasy racers, build your own miniature garage and chase the next great find.</p><div className="hero-actions"><Link className="button button-dark" to="/products">Explore the garage <ArrowRight size={17}/></Link><Link className="quiet-link" to="/about">Meet the club <ArrowUpRight size={16}/></Link></div><div className="hero-note"><span className="note-icon"><Gauge size={20}/></span><span><b>Made for collectors</b><small>Every car has a story. Every shelf is a track.</small></span></div></div>
  <div className="hero-art"><div className="hero-art-label">GARAGE SERIES <span>01 / 08</span></div><img src="/products/hot-wheels-banner.png" alt="Hot Wheels logo above a lineup of die-cast cars"/><div className="hero-caption"><span>01 — TWIN MILL TURBO</span><b>Ready. Set. Collect.</b></div><span className="hero-sticker">GO<br/>FAST!</span></div>
 </section>
 <section className="promise-strip"><div><Gauge/><span>Track-ready style</span></div><div><Trophy/><span>Iconic car culture</span></div><div><PackageCheck/><span>Packed with care</span></div></section>
 <section className="container featured-section"><div className="section-heading"><div><div className="eyebrow">GARAGE FAVOURITES</div><h2>Pick your next ride.</h2><p>Fresh wheels for your miniature collection.</p></div><Link className="quiet-link" to="/products">View all cars <ArrowRight size={16}/></Link></div>
 <div className="product-grid">{products.slice(0,4).map(product=><ProductCard key={product.id} product={product} onAdded={setNotice}/>)}</div>{notice&&<div className="toast" role="status">✓ {notice}<button onClick={()=>setNotice('')} aria-label="Dismiss notification">×</button></div>}</section>
 <section className="small-story"><div className="story-mark"><Gauge size={34}/></div><div><div className="eyebrow">THE MINI KART MANIFESTO</div><h2>Big racing energy.<br/>Tiny garage footprint.</h2></div><p>We’re here for the thrill of the hunt: iconic castings, bold paint jobs, and cars that make you want to clear one more shelf for the collection.</p><Link to="/about" className="round-arrow" aria-label="Read our story"><ArrowUpRight/></Link></section>
 </>
}
