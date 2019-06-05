//@flow
import { observable, action, computed } from 'mobx';
import { service, navigator, inject } from 'rrsx';

export type Item = {
  name: string,
};

export function model(obj, prop) {
  return (ev) => {
    obj[prop] = ev.target.value;
  };
}
@service({})
class TodoService {
  @observable list: Array<Item> = [{ name: 'Hola mundo' }];

  @observable text: string = '';
  init = () => {};
  @action add(item: Item) {
    this.list.push(item);
  }

  @action delete(index: number) {
    this.list.splice(index, 1);
  }
}

export default TodoService;
