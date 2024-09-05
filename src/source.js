import cena_pl_i from "./assets/img/01-cena-pl-i.svg";
import cena_cz_i from "./assets/img/02-cena-cz-i.svg";
import czar_pl_i from "./assets/img/03-czar-pl-i.svg";
import car_cz_i from "./assets/img/04-car-cz-s.svg";
import droga_pl_i from "./assets/img/05-droga-pl-i.svg";
import droga_cz_i from "./assets/img/06-droga-cz-i.svg";
import zly_pl_i from "./assets/img/07-zly-pl-i.svg";
import zly_cz_i from "./assets/img/08-zly-cz-i.svg";
import czerstwy_pl_i from "./assets/img/09-czerstwy-pl-i.svg";
import cerstvy_cz_i from "./assets/img/10-cerstvy-cz-i.svg";
import dziadek_pl_i from "./assets/img/11-dziadek-pl-i.svg";
import dedek_cz_i from "./assets/img/12-dedek-cz-i.svg";
import lada_pl_i from "./assets/img/13-lada-pl-i.svg";
import lada_cz_i from "./assets/img/14-lada-cz-i.svg";
import palec_pl_i from "./assets/img/15-palec-pl-i.svg";
import palec_cz_i from "./assets/img/16-palec-cz-i.svg";
import walka_pl_i from "./assets/img/17-walka-pl-i.svg";
import valka_cz_i from "./assets/img/18-valka-cz-i.svg";
import sklep_pl_i from "./assets/img/19-sklep-pl-i.svg";
import sklep_cz_i from "./assets/img/20-sklep-cz-i.svg";
import czasopismo_pl_i from "./assets/img/21-czasopismo-pl-i.svg";
import casopis_cz_i from "./assets/img/22-casopis-cz-i.svg";
import list_pl_i from "./assets/img/23-list-pl-i.svg";
import list_cz_i from "./assets/img/24-list-cz-i.svg";
import zona_pl_i from "./assets/img/25-zona-pl-i.svg";
import zena_cz_i from "./assets/img/26-zena-cz-i.svg";

import cena_pl_s from "./assets/sound/01-cena-pl-s.mp3";
import cena_cz_s from "./assets/sound/02-cena-cz-s.mp3";
import czar_pl_s from "./assets/sound/03-czar-pl-s.mp3";
import car_cz_s from "./assets/sound/04.-car-cz-s.mp3";
import droga_pl_s from "./assets/sound/05-droga-pl-s.mp3";
import droga_cz_s from "./assets/sound/06-droga-cz-s.mp3";
import zly_pl_s from "./assets/sound/07-zly-pl-s.mp3";
import zly_cz_s from "./assets/sound/08-zly-cz-s.mp3";
import czerstwy_pl_s from "./assets/sound/09-czerstwy-pl-s.mp3";
import cerstvy_cz_s from "./assets/sound/10-cerstvy-cz-s.mp3";
import dziadek_pl_s from "./assets/sound/11-dziadek-pl-s.mp3";
import dedek_cz_s from "./assets/sound/12-dedek-cz-s.mp3";
import lada_pl_s from "./assets/sound/13-lada-pl-s.mp3";
import lada_cz_s from "./assets/sound/14-lada-cz-s.mp3";
import palec_pl_s from "./assets/sound/15-palec-pl-s.mp3";
import palec_cz_s from "./assets/sound/16-palec-cz-s.mp3";
import walka_pl_s from "./assets/sound/17-walka-pl-s.mp3";
import valka_cz_s from "./assets/sound/18-valka-cz-s.mp3";
import sklep_pl_s from "./assets/sound/19-sklep-pl-s.mp3";
import sklep_cz_s from "./assets/sound/20-sklep-cz-s.mp3";
import czasopismo_pl_s from "./assets/sound/21-czasopismo-pl-s.mp3";
import casopis_cz_s from "./assets/sound/22-casopis-cz-s.mp3";
import list_pl_s from "./assets/sound/23-list-pl-s.mp3";
import list_cz_s from "./assets/sound/24-list-cz-s.mp3";
import zona_pl_s from "./assets/sound/25-zona-pl-s.mp3";
import zena_cz_s from "./assets/sound/26-zena-cz-s.mp3";

const CARD_IMAGES_PL_CZ = [
  {
    id: "001",
    src: zly_pl_i,
    matched: false,
    sound: zly_pl_s,
    translation: "Polish: bad, evil",
  },
  {
    id: "001",
    src: zly_cz_i,
    matched: false,
    sound: zly_cz_s,
    translation: "Czech: bad, but can also mean wicked",
  },
  {
    id: "002",
    src: droga_pl_i,
    matched: false,
    sound: droga_pl_s,
    translation: "Polish: road, way",
  },
  {
    id: "002",
    src: droga_cz_i,
    matched: false,
    sound: droga_cz_s,
    translation: "Czech: drug",
  },
  {
    id: "003",
    src: cena_pl_i,
    matched: false,
    sound: cena_pl_s,
    translation: "Polish: price",
  },
  {
    id: "003",
    src: cena_cz_i,
    matched: false,
    sound: cena_cz_s,
    translation: "Czech: dinner",
  },
  {
    id: "004",
    src: czar_pl_i,
    matched: false,
    sound: czar_pl_s,
    translation: "Polish: charm",
  },
  {
    id: "004",
    src: car_cz_i,
    matched: false,
    sound: car_cz_s,
    translation: "Czech: line, stroke",
  },
  {
    id: "005",
    src: czerstwy_pl_i,
    matched: false,
    sound: czerstwy_pl_s,
    translation: "Polish: stale (as in bread)",
  },
  {
    id: "005",
    src: cerstvy_cz_i,
    matched: false,
    sound: cerstvy_cz_s,
    translation: "Czech: fresh",
  },
  {
    id: "006",
    src: dziadek_pl_i,
    matched: false,
    sound: dziadek_pl_s,
    translation: "Polish: grandfather",
  },
  {
    id: "006",
    src: dedek_cz_i,
    matched: false,
    sound: dedek_cz_s,
    translation: "Czech: old man (can be pejorative)",
  },
  {
    id: "007",
    src: lada_pl_i,
    matched: false,
    sound: lada_pl_s,
    translation: "Polish: counter, desk",
  },
  {
    id: "007",
    src: lada_cz_i,
    matched: false,
    sound: lada_cz_s,
    translation: "Czech: meadows",
  },
  {
    id: "008",
    src: palec_pl_i,
    matched: false,
    sound: palec_pl_s,
    translation: "Polish: finger",
  },
  {
    id: "008",
    src: palec_cz_i,
    matched: false,
    sound: palec_cz_s,
    translation: "Czech: thumb",
  },
  {
    id: "009",
    src: sklep_pl_i,
    matched: false,
    sound: sklep_pl_s,
    translation: "Polish: store/shop",
  },
  {
    id: "009",
    src: sklep_cz_i,
    matched: false,
    sound: sklep_cz_s,
    translation: "Czech: basement",
  },
  {
    id: "010",
    src: walka_pl_i,
    matched: false,
    sound: walka_pl_s,
    translation: "Polish: fight, struggle",
  },
  {
    id: "010",
    src: valka_cz_i,
    matched: false,
    sound: valka_cz_s,
    translation: "Czech: war",
  },
  {
    id: "011",
    src: list_pl_i,
    matched: false,
    sound: list_pl_s,
    translation: "Polish: letter",
  },
  {
    id: "011",
    src: list_cz_i,
    matched: false,
    sound: list_cz_s,
    translation: "Czech: leaf",
  },
  {
    id: "012",
    src: zona_pl_i,
    matched: false,
    sound: zona_pl_s,
    translation: "Polish: wife",
  },
  {
    id: "012",
    src: zena_cz_i,
    matched: false,
    sound: zena_cz_s,
    translation: "Czech: woman",
  },
  {
    id: "013",
    src: czasopismo_pl_i,
    matched: false,
    sound: czasopismo_pl_s,
    translation: "Polish: magazine",
  },
  {
    id: "013",
    src: casopis_cz_i,
    matched: false,
    sound: casopis_cz_s,
    translation: "Czech: newspaper",
  },
];

export default CARD_IMAGES_PL_CZ;
