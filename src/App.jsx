import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GithubLogo from './components/GithubLogo'
import SearchBar from './components/SearchBar'
import ResultsTable from './components/ResultsTable'

function App() {
  const [searchFilter, setSearchFilter] = useState('Users');

  return (
    <>
      <GithubLogo />
      <section style={{marginTop: '2.5rem'}}>
        <SearchBar searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
        <ResultsTable searchFilter={searchFilter}/>
      </section>
    </>
  )
}

export default App
