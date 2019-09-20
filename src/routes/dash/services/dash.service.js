// @flow
import { observable, action } from 'mobx';
import { service } from 'rrsx';

@service({})
class DashService {
  @observable sidebar: Boolean = true;

  @observable header: Boolean = true;

  @action setSidebar = (flag: Boolean) => {
    this.sidebar = flag;
  };

  @action setHeader = (flag: Boolean) => {
    this.header = flag;
  }
}
export default DashService;
