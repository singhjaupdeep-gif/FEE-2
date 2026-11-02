import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Gauge, Heart, Trophy } from 'lucide-react'
export default function About() {
 return <section className="container page-section about-page">
 <div className="about-hero"><div><div className="eyebrow">WELCOME TO MINI KART</div><h1>For the love of<br/><em>little legends.</em></h1><p>Mini Kart is a playful die-cast car store inspired by the color, speed, and nostalgia of Hot Wheels culture. We believe a tiny car can bring a big dose of joy.</p><Link className="button button-dark" to="/products">Explore the collection <ArrowRight size={17}/></Link></div><img src="/products/plymouth-barracuda-convertible.png" alt="Blue 70 Plymouth Barracuda Hot Wheels on its card"/></div>
 <div className="about-values"><article><span><Gauge/></span><h2>Always chase the thrill.</h2><p>Every casting has its own personality—from sleek track racers to outrageous fantasy rides.</p></article><article><span><Trophy/></span><h2>Collect your way.</h2><p>Start with one favorite, build a shelf, or hunt down the cars that bring back memories.</p></article><article><span><Heart/></span><h2>Made for car fans.</h2><p>A little nostalgia, a lot of color, and a community that never outgrows toy cars.</p></article></div>
 <div className="about-note"><span>★</span><p>Mini Kart is a student-built demo store inspired by Hot Wheels. It demonstrates product browsing, React routing, and cart state with Redux Toolkit. Product prices and checkout are for demonstration only.</p></div>
 </section>
}
