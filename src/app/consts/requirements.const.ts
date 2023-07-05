import { CheckList } from '../models/check-list.model';

export const REQUIREMENTS: CheckList = {
  title: `Si vous avez décidé de flasher un téléphone portable, il est préférable de
  tenir compte de certaines bases pour obtenir un bon résultat et éviter la
  mort subite de l'appareil. Voici ce que vous devez prendre en compte
  <span class="fw-bold"> avant de flasher un téléphone : </span>`,
  list: [
    `Le câble USB que vous utilisez doit, de préférence, être le câble
  d'origine du téléphone. N'utilisez pas de câbles anciens ou défectueux.`,
    `Vous aurez peut-être besoin de drivers P2K. Ils permettent à l'appareil
  d'être reconnu par le programme (et l'ordinateur), bien que certains
  téléphones n'en aient pas besoin.`,
    `Nous vous conseillons de faire une copie de sauvegarde de votre
  téléphone avant de le flasher. Si vous ne le faites pas, vous pourriez
  perdre tout ce que vous avez stocké dans la mémoire interne.`,
    `Chaque téléphone a un programme pour le flasher spécifique en
  fonction de sa technologie. De nombreuses marques partagent la
  même technologie, de sorte qu'elles partagent également les mêmes
  programmes pour flasher un portable.`,
    `Vous devez vous assurer que le firmware que vous installez est le bon
  pour votre téléphone, car l'utilisation d'un firmware incorrect pourrait
  endommager l'appareil.`,
  ],
};
export const WARNINGS: CheckList = {
  title: `Lorsque vous flashez un téléphone, l'important est de tenir compte des
  détails. Gardez à l'esprit les points suivants
  <span class="fw-bold">lorsque vous flashez un téléphone portable :</span>`,
  list: [
    `Ne touchez pas le câble et ne le déplacez pas pour quelque raison que
  ce soit avant la fin de la procédure.`,
    `Ne fermez pas le programme pendant le processus.`,
    `Chargez votre téléphone à 100 % ou au moins à 50 %. Il est préférable
  de le charger au maximum car certains processus sont plus longs que
  d'autres.`,
    `Si vous utilisez un ordinateur portable, chargez-le à 100 % ou
  maintenez-le connecté pendant tout le processus.`,
  ],
};
