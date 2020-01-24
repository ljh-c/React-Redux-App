import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchItems } from '../actions/itemsActions';

import { LevelItem, Button } from 'bloomer';
import ItemCard from './ItemCard';

const Items = () => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      {!data.items && !data.isFetching && (
        <>
        <div className="level">
          <LevelItem><Button isColor='primary' onClick={() => dispatch(fetchItems())}>Get Items</Button></LevelItem>
        </div>
        <div className="level">
          <LevelItem><h2 className="subtitle is-2">Fill your bag with magic items!</h2></LevelItem>
        </div>
        </>
      )}
      {data.isFetching && (
        <div className="level">
          <LevelItem><Button isColor='warning' isLoading></Button></LevelItem>
        </div>
      )}
      {data.items && !data.isFetching && (
        <div className="columns is-multiline">
          {data.items.map(item => <ItemCard key={item.slug} item={item} />)}
        </div>
      )}
    </>
  );
};

export default Items;