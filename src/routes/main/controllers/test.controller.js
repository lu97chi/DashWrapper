//@flow
import { observable, action, computed } from 'mobx';
import { service, navigator, inject } from 'rrsx';

@service({})
class serviceName {
  @observable isComponentVisible = true;
  @action showComponent() {
    this.isComponentVisible = !this.isComponentVisible;
  }
}
export default serviceName;
