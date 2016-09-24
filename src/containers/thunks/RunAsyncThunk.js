// @flow
import { connect } from 'react-redux'
import { promiseThunkAction1 } from '../../actions/thunks'
import Link from '../../components/Link'
import type { Props } from '../../components/Link'
import type { State, Dispatch, VisibilityFilter } from '../../types'
import type { Connector } from 'react-redux'

type OwnProps = {
  filter: VisibilityFilter
};

const mapStateToProps = (state: State, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(promiseThunkAction1('async', 'thunk'))
        .then((result: string): string => {
          console.log(result)
          return 'async really done'
        })
        .then((result: string): string => {
          console.log(result)
          console.log('-')
          return ''
        })
        .catch(error => {
          console.error(error)
          console.log('-')
          return error
        })
    }
  }
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(Link)
