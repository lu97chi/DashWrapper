// @flow
import { observable, action } from 'mobx';
import { service } from 'rrsx';

@service({})
class serviceName {
  @observable isComponentVisible = true;

  @action showComponent() {
    this.isComponentVisible = !this.isComponentVisible;
  }
}
export default serviceName;
