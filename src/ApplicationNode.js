import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Switch, Route} from 'react-router-dom'
import history from 'services/history'
import App from './views/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconLabelButtons from './components/Buttons/MuiButton'
import { ResponsiveBubble } from '@nivo/circle-packing'

export default class ApplicationNode extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  state = {}

  render () {
    const {store} = this.props

    const styles = {
      height: '60%',
      width: '60%',
      border: '2px solid purple'
    }

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
          <IconLabelButtons />
          <div className={styles}>
            <ResponsiveBubble
              data={require('./components/D3/bubbleData.json')}
              margin={{
                'top': 20,
                'right': 20,
                'bottom': 20,
                'left': 20
              }}
              identity='name'
              value='loc'
              colors='nivo'
              colorBy='depth'
              padding={6}
              labelTextColor='inherit:darker(0.8)'
              borderWidth={2}
              defs={[
                {
                  'id': 'lines',
                  'type': 'patternLines',
                  'background': 'none',
                  'color': 'inherit',
                  'rotation': -45,
                  'lineWidth': 5,
                  'spacing': 8
                }
              ]}
              fill={[
                {
                  'match': {
                    'depth': 1
                  },
                  'id': 'lines'
                }
              ]}
            />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
