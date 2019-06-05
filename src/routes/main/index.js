//@flow
import React, { CSSProperties, useEffect } from 'react';
import { component, useService, useController } from 'rrsx';
import TodoService, { Item, model } from './services/todo.service';
import { useObserver, useObservable } from 'mobx-react-lite';
import TestController from './controllers/test.controller';
type Props = { children: React.Component, style: CSSProperties };

const Main = ({ style, children }: Props) => {
  const textInput = useObservable({ text: '' });
  const todo = useService<TodoService>(TodoService, { attach: true });

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
const NewMain = component<Props>(Main);

const TempComponent = () => {
  const testC = useService<TestController>(TestController);

  //{testC.isComponentVisible ? <NewMain /> : null}
  return (
    <div>
      <button
        onClick={() => {
          testC.showComponent();
        }}>
        asdf
      </button>
      {testC.isComponentVisible ? <NewMain /> : null}
    </div>
  );
};

export default component<Props>(TempComponent);
