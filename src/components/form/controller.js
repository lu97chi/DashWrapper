import { observable, action, configure, runInAction } from 'mobx';

configure({ enforceActions: true });

export default class name {
  @observable
  name = '';

  @action
  async functionName(params) {
    runInAction(() => {});
  }
}
