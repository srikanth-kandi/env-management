import CompanyA from './components/companyA'
import CompanyB from './components/companyB'
import './App.css'

function App() {
  return (
    <div>
      {import.meta.env.VITE_ORGANIZATION === 'companyA' && <CompanyA />}
      {import.meta.env.VITE_ORGANIZATION === 'companyB' && <CompanyB />}
    </div>
  )
}

export default App
