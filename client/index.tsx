import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

const container = document.querySelector('#app')

if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(<App />)
}
