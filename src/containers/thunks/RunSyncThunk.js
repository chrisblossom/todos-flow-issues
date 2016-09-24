// @flow
import { connect } from 'react-redux'
import { thunkAction1 } from '../../actions/thunks'
import Link from '../../components/Link'
import type { Props } from '../../components/Link'
import type { State, Dispatch } from '../../types'
import type { Connector } from 'react-redux'

type OwnProps = {};

const mapStateToProps = (state: State, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => {
  return {
    onClick: () => {
      const result: string = dispatch(thunkAction1('sync', 'thunk'))
      console.log(result)
      console.log('-')
    }
  }
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(Link)
