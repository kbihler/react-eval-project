import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import Header from 'components/Header'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import IconLabelButtons from '../../components/Buttons/MuiButton'
import MySvg from '../../components/svg/Svg.js'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents,
  getRepos,
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired
  }

  componentDidMount () {
    const {getUser, getRepos, getEvents} = this.props

    getUser()
    getRepos()
    getEvents()
  }
  render () {
    return (
      <div styleName='app'>
        <Header />
        <MySvg
          fill='violet'
        />
        <IconLabelButtons />
      </div>
    )
  }
}
