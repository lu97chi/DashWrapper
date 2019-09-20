// @flow
import React, { CSSProperties } from 'react';
import { component, useService } from 'rrsx';
import { useObservable } from 'mobx-react-lite';
import TodoService, { Item, model } from './services/todo.service';
import TestController from './controllers/test.controller';

type Props = { style: CSSProperties };

const Main = ({ style }: Props) => {
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
          type="button"
          onClick={() => {
            todo.list.push({ name: textInput.text });
          }}
        >
          Añadir
        </button>
      </div>
      <ul>
        {todo.list.map((item: Item, index) => (
          <button
            type="button"
            onClick={() => {
              todo.delete(index);
            }}
          >
            {item.name}
          </button>
        ))}
      </ul>
    </div>
  );
};
const NewMain = component<Props>(Main);

const TempComponent = () => {
  const testC = useService<TestController>(TestController);

  // {testC.isComponentVisible ? <NewMain /> : null}
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          testC.showComponent();
        }}
      >
        asdf
      </button>
      {testC.isComponentVisible ? <NewMain /> : null}
    </div>
  );
};

export default component<Props>(TempComponent);
