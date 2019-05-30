//@flow
import { observable, action, computed } from 'mobx';
import { service, navigator, inject } from 'rrsx';

export default
@service({})
class serviceName {
  // @inject(Service)
  // serviceName:Service;

  @observable
  name = '';

  constructor() {}

  @action
  functionName(params) {}

  @computed
  get computedProp() {
    return;
  }
}
