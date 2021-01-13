import {
  Switch,
  Route,
} from 'react-router-dom'

import Main from '../Main'
import Overlay from '../Overlay'

import './App.css'

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
