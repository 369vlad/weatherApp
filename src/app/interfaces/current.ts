import {Condition} from "./condition";
import {AirQuality} from "./air-quality";

export interface Current {

  last_updated?: string;
  temp_c?: number;
  is_day?: number;
  condition?: Condition;
  wind_kph?: number;
  wind_degree?: number;
  wind_dir?: string;
  pressure_mb?: number;
  precip_mm?: number;
  humidity?: number;
  cloud?: number;
  feelslike_c?: number;
  uv?: number;
  air_quality?: AirQuality;

}
