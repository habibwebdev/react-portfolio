import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Blog from './components/Blog'
import Project from './components/Project'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact></Route>
          <Route component={About} path="/about"></Route>
          <Route component={SinglePost} path="/post/:slug"></Route>
          <Route component={Blog} path="/blog"></Route>
          <Route component={Project} path="/projects"></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
