export const products = [
  { id: 1, name: 'Twin Mill Turbo', price: 499, category: 'Racing Legends', tag: 'Bestseller', description: 'Twin-engine classic with bold flame graphics.', image: '/products/nissan-skyline-gtr-bnr32.png', material: 'Die-cast metal' },
  { id: 2, name: 'Bone Shaker', price: 399, category: 'Skull Crushers', tag: 'Fan favourite', description: 'A fierce hot rod with a skeletal attitude.', image: '/products/plymouth-barracuda-coupe.png', material: 'Die-cast metal' },
  { id: 3, name: '’67 Camaro', price: 599, category: 'Muscle Mania', tag: 'Collector pick', description: 'American muscle, low stance, unmistakable style.', image: '/products/plymouth-barracuda-convertible.png', material: 'Die-cast metal' },
  { id: 4, name: 'Deora II', price: 449, category: 'Surf’s Up', tag: 'New drop', description: 'A futuristic beach cruiser with a bright finish.', image: '/products/nissan-gtr-r35-neon.png', material: 'Die-cast metal' },
  { id: 5, name: 'Rodger Dodger', price: 549, category: 'Muscle Mania', tag: '', description: 'Big-block power wrapped in retro attitude.', image: '/products/plymouth-barracuda-convertible.png', material: 'Die-cast metal' },
  { id: 6, name: 'Shark Bite', price: 349, category: 'Creature Cars', tag: '', description: 'A wild shark-inspired ride ready to attack the track.', image: '/products/nissan-gtr-r35-neon.png', material: 'Die-cast metal' },
  { id: 7, name: 'Bone Speeder', price: 499, category: 'Track Stars', tag: '', description: 'Aerodynamic shape built for a fast finish.', image: '/products/nissan-skyline-gtr-bnr32.png', material: 'Die-cast metal' },
  { id: 8, name: 'Fast Fish', price: 399, category: 'Creature Cars', tag: '', description: 'A slippery, speedy fantasy car with serious bite.', image: '/products/plymouth-barracuda-coupe.png', material: 'Die-cast metal' }
]
export const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)
