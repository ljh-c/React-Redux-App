import React from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../actions/itemsActions';

const Items = props => {
  return (
    <>
      <button onClick={props.fetchItems}>Get Items</button>
      {!props.items && !props.isFetching && (
        <h2>Fill your bag with magic items!</h2>
      )}
      {props.isFetching && (
        <p>Please wait...</p>
      )}
      {props.items && !props.isFetching && (
        props.items.map(item => (<h3>{item.name}</h3>))
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    items: state.items,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchItems })(Items);