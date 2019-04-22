import React from 'react';
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import {useConnect} from "../index";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const ConnectedLink = (ownProps) => {
  const {active, onClick} = useConnect({mapStateToProps, mapDispatchToProps, ownProps});
  return <Link {...ownProps} active={active} onClick={onClick} />
};

export default ConnectedLink;
