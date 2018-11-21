import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Switch, Route} from 'react-router-dom'
import history from 'services/history'
import App from './views/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const myObject = {hello: 'world'}
console.log(myObject)

const clonedMyObject = {...myObject}
console.log(clonedMyObject)

myObject.hello = 'mars'
console.log(myObject)
console.log(clonedMyObject)


export default class ApplicationNode extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  state = {}

  render () {
    const {store} = this.props
    return (
      <MuiThemeProvider>
        <div className='application-node'>
          <Provider store={store}>
            <Router history={history}>
              <Switch>
                <Route exact path='/' component={App} />
              </Switch>
            </Router>
          </Provider>
        </div>
      </MuiThemeProvider>
    )
  }
}
