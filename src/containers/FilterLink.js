import React, { useContext} from 'react';
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { AppContext } from '../components/App';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const ConnectedLink = (ownProps) => {
  const {state, dispatch} = useContext(AppContext);
  const stateProps = mapStateToProps(state, ownProps);
  const actionProps = mapDispatchToProps(dispatch, ownProps);
  return <Link {...ownProps} {...stateProps} {...actionProps} />
};

export default ConnectedLink;
