import React from 'react';
import {useWatchlist} from '../../Contexts/WatchlistContext';

export const RemoveStock = (loading, setLoading, symbol) => {
  const {removeWatchlistStock} = useWatchlist();
  if (loading) {
    return;
  }
  setLoading(true);
  removeWatchlistStock(symbol);
  setLoading(false);
};
