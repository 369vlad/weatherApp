import {Current} from "./current";
import {Forecast} from "./forecast";
import {Alerts} from "./alerts";
import {Location} from "./location";


export interface Data {

  location?: Location;
  current?: Current;
  forecast?: Forecast;
  alerts?: Alerts;

}
