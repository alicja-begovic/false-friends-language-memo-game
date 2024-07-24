import animal from "./assets/img/icon_animal.svg";
import animal2 from "./assets/img/icon_animal2.svg";
import human from "./assets/img/icon_human.svg";
import human2 from "./assets/img/icon_human2.svg";
import cena_pl from './assets/img/cena_pl.svg'
import cena_cz from './assets/img/cena_cz.svg'

import animal_czech from "./assets/sound/animal_czech.mp3";
import animal_english from "./assets/sound/animal_english.mp3";
import human_czech from "./assets/sound/human_czech.mp3";
import human_english from "./assets/sound/human_english.mp3";
import cena_polish from './assets/sound/cena_pl.mp3'
import cena_czech from './assets/sound/cena_cz.mp3'

const CARD_IMAGES_PL_CZ = [
  { id: "001", src: animal, matched: false, sound: animal_czech },
  { id: "001", src: animal2, matched: false, sound: animal_english },
  { id: "002", src: human, matched: false, sound: human_czech },
  { id: "002", src: human2, matched: false, sound: human_english },
  { id: "003", src: cena_pl, matched: false, sound: cena_polish },
  { id: "003", src: cena_cz, matched: false, sound: cena_czech},
];

export default CARD_IMAGES_PL_CZ