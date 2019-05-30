import React from 'react';
import { useObservable } from 'mobx-react-lite';

function TodoHook() {
  const state = useObservable({
    list: [],
  });

  function add(data) {
    state.list.push(data);
  }

  function deleteL(index) {
    state.list.splice(index, 1);
  }

  return { state, add, deleteL };
}

export default TodoHook;
