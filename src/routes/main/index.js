//@flow
import React, { CSSProperties, useState, useEffect } from 'react';
import { component, useService } from 'rrsx';
import TodoService, { Item, model } from './services/todo.service';
import { useObserver, useObservable } from 'mobx-react-lite';

type Props = { children: React.Component, style: CSSProperties };

const Main = ({ style, children }: Props) => {
  const textInput = useObservable({ text: '' });
  const todo = useService<TodoService>(TodoService);

  return (
    <div style={style}>
      <div>
        <input
          onInput={model(textInput, 'text')}
          value={textInput.text}
          type="text"
          placeholder="escribir item"
        />

        <button
          onClick={() => {
            todo.list.push({ name: textInput.text });
          }}>
          Añadir
        </button>
      </div>
      <ul>
        {todo.list.map((item: Item, index) => (
          <li
            onClick={() => {
              todo.delete(index);
            }}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default component<Props>(Main);
