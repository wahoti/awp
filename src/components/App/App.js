import {
  Switch,
  Route,
  // Link,
  // useLocation,
} from 'react-router-dom'

import Main from '../Main'
import Overlay from '../Overlay'

import './App.css'

// strategy for animated hamburger and side bar nav
// (conditional render hamburger on med and small screens)
// (-> hamburger button animated to slide out nav) (this will be a nice way to demonstrate fe skills)
// (conditional render side bar on large screens) (again nice to show responsive design)

function App() {

  return (
    <>
      {/* <Overlay /> */}
      <div className="container greyBack2">
        <header className="greyBack1 primaryBorderBot">
            Abdulwahed Wahedi
        </header>
        <nav></nav>
        <main>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </main>
        <aside></aside>
        <footer>
        </footer>
      </div>
    </>
  )
}

export default App

// post thought
// put your recomendations in