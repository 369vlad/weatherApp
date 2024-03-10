import {Day} from "./day";
import {Astro} from "./astro";
import {Hour} from "./hour";

export interface Forecastday {

  date: string;
  day: Day;
  astro: Astro;
  hour: Hour[];

}
