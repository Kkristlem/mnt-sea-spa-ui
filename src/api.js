const BASE = 'http://localhost:8000'

export const getProducts = () => fetch(BASE + '/api/catalog/products').then(r => r.json())
export const getAlerts = () => fetch(BASE + '/api/planning/alerts').then(r => r.json())
