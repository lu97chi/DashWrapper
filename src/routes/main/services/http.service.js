// @flow
import { observable, action, computed } from 'mobx';
import { service, navigator, inject } from 'rrsx';

export default
@service({})
class HttpService {
  @observable data = null;

  @observable isLoading = false;

  constructor() {
    new Promise().then((data) => {
      this.data = data;
      this.isLoading = true;
    });
  }
}
