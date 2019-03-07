import OrderApi from "./order";
import LoginApi from "./login";
import CustomerApi from './customer';
import companyApi from './company_list';
import cardApi from './card'
import deviceApi from './device';
import utilsApi from './utils';
import recordApi from './card_record';
import openlog from './openlog';
import upgradeMange from './upgrade_mange';
import deviceLogApi from './device_log';
import acountApi from './acount';


export default {
  ...OrderApi,
  ...LoginApi,
  ...CustomerApi,
  ...companyApi,
  ...cardApi,
  ...deviceApi,
  ...utilsApi,
  ...recordApi,
  ...openlog,
  ...upgradeMange,
  ...deviceLogApi,
  ...acountApi
}
