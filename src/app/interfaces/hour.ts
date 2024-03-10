import {AirQuality} from "./air-quality";
import {Condition} from "./condition";

export interface Hour {

  time: string;
  temp_c: number;
  is_day: number;
  condition: Condition;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  windchill_c: number;
  heatindex_c: number;
  dewpoint_c: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  gust_kph: number;
  uv: number;
  air_quality: AirQuality;

}
