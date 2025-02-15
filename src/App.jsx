import './App.css'
import StickyInfo from './StickyInfo'

function App() {
  return (
    <>
      <div className="app">
        <div className="sticky_column column">
          <StickyInfo />
        </div>
        <div className="content_column column">
          <h2>Middle Info</h2>
        </div>
      </div>
    </>
  )
}

export default App
