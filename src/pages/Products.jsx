import React, { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All cars')
  const [notice, setNotice] = useState('')
  const categories = ['All cars', ...new Set(products.map((product) => product.category))]
  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'All cars' || product.category === category
    const matchesSearch = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  }), [category, search])
  return <section className="container page-section">
    <div className="page-intro"><div className="eyebrow">THE MINI KART GARAGE</div><h1>Find your next ride.</h1><p>From iconic muscle cars to fantasy racers, find a little legend for your shelf.</p></div>
    <div className="shop-toolbar"><label className="search-box"><Search size={18}/><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search cars, styles, collections" aria-label="Search products"/></label><div className="filter-label"><SlidersHorizontal size={16}/> Filter by</div><div className="category-tabs" aria-label="Product categories">{categories.map((item) => <button key={item} className={category === item ? 'category-tab active' : 'category-tab'} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
    <div className="results-line">Showing <b>{visibleProducts.length}</b> of {products.length} cars <span>·</span> picked for everyday spaces</div>
    {visibleProducts.length ? <div className="product-grid shop-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdded={setNotice}/>)}</div> : <div className="empty-results"><span>☼</span><h2>No cars found just yet.</h2><p>Try a different search or try another category.</p><button className="button button-outline" onClick={() => { setSearch(''); setCategory('All cars') }}>Clear filters</button></div>}
    {notice && <div className="toast" role="status">✓ {notice}<button onClick={() => setNotice('')} aria-label="Dismiss notification">×</button></div>}
  </section>
}
