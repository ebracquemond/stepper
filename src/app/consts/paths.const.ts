import { Path } from '../models/path.model';

export const PATHS: Path[] = [
  {
    id: 1,
    title: 'Comment flasher un portable Samsung',
    description: [
      `Comment flasher un téléphone Samsung ?`,
      `Pour flasher un téléphone Samsung, qu'il soit neuf ou ancien, vous avez besoin d'un logiciel pour flasher un téléphone android appelé <span class="fw-bold">Odin</span> (le programme officiel dont dispose Samsung pour ses appareils).`,
      `Mais, comment utiliser Odin ?`,
      `Le processus lui-même n'est pas compliqué et se résume à ces étapes :`,
    ],
    steps: [
      {
        id: 1,
        description: [
          `Téléchargez, installez et démarrez <a href="https://samsungodin.com/">Odin</a>.`,
        ],
      },
      {
        id: 2,
        description: [
          `<span class="fw-bold">Téléchargez les drivers du téléphone (Samsung drivers).</span>`,
          `Ils sont utilisés par Odin pour reconnaître votre appareil.`,
          `La façon la plus simple de les installer est de télécharger le programme officiel de Samsung appelé <a href="https://www.samsung.com/fr/support/kies/">Kies</a> (il est très facile à utiliser).`,
        ],
      },
      {
        id: 3,
        description: [
          `<span class="fw-bold">Téléchargez le système d'exploitation de votre téléphone.</span>`,
          `Vous pouvez le télécharger à partir du site web SamMobile.`,
          `Lors du choix du firmware, celui-ci doit correspondre entièrement à votre modèle de téléphone portable (y compris votre pays).`,
          `Pour connaître le modèle exact de votre téléphone, consultez l'arrière de votre appareil.`,
        ],
      },
      {
        id: 4,
        description: [
          `<span class="fw-bold">Entrez dans le mode de téléchargement sur votre téléphone.</span>`,
          `Appuyez en même temps sur le bouton de diminution du volume, le bouton Accueil et le bouton de démarrage/blocage.`,
          ` Un message apparaîtra à l'écran (il deviendra noir si le téléphone est ancien et bleu si le téléphone est neuf), lorsque vous le verrez, appuyez sur le bouton d'augmentation du volume.`,
          `Enfin, "Downloading" devrait apparaître à l'écran.`,
        ],
      },
      {
        id: 5,
        description: [
          `<span class="fw-bold">Sur Odin, appuyez sur le bouton "AP" ou "PDA" (selon la version).</span>`,
          `Cherchez le dossier du firmware.`,
          `Une fois sur place, choisissez le fichier "AP" (il contiendra d'autres mots dans le nom, mais c'est la référence qui nous intéresse).`,
        ],
      },
      {
        id: 6,
        description: [
          `A ce moment, les fichiers commenceront à être copiés sur Odin, attendez que cette opération soit terminée.`,
          `Vous saurez que c'est fini lorsque quelques lettres apparaîtront dans la case située à côté du bouton "AP".`,
          `Certains téléphones n'ont que ce fichier, d'autres en ont plus.`,
        ],
      },
      {
        id: 7,
        description: [
          `<span class="fw-bold">Ajoutez d'autres fichiers s'il y en a.</span>`,
          `Si vous trouvez d'autres fichiers dans le même dossier du firmware (avec les initiales : LMS, BL, CP, et CSC), mettez-les dans les boutons respectifs.`,
          `C'est-à-dire qu'il faut appuyer sur les boutons correspondants et ouvrir les fichiers à partir de ceux-ci.`,
          `Si vous voyez CSC Home et CSC, choisissez le dernier.`,
        ],
      },
      {
        id: 8,
        description: [
          `<span class="fw-bold">Sélectionnez "Auto Reboot" et "F. Reset Time".</span>`,
          `Cela dépendra de la version que vous avez, s'ils apparaissent sélectionnez-les, sinon, passez à l'étape suivante.`,
        ],
      },
      {
        id: 9,
        description: [
          `<span class="fw-bold">Connectez l'appareil à l'ordinateur avec le câble USB.</span>`,
        ],
      },
      {
        id: 10,
        description: [
          `<span class="fw-bold">Appuyez sur le bouton "Start" pour commencer à flasher le téléphone.</span>`,
          `Vous le trouverez en bas du panneau sur Odin. Attendez que la barre verte en haut du panneau finisse de se charger.`,
          `Vous verrez également que le bouton blanc appelé "SYSTEM", passera au vert et dira "PASS !"`,
        ],
      },
      {
        id: 11,
        description: [
          `<span class="fw-bold">Attendez 10 à 20 minutes avant de démarrer votre téléphone.</span>`,
          `N'y touchez pas avant la fin du processus.`,
        ],
      },
      {
        id: 12,
        description: [
          `<span class="fw-bold">Débranchez le téléphone de votre ordinateur lorsque vous avez
          terminé.</span>`,
          `Faites-le lorsque vous voyez "Bienvenue !" à l'écran.
          Rétablissez la configuration d'usine de votre téléphone.`,
        ],
      },
      {
        id: 13,
        description: [
          `Si, lorsque vous connectez un Samsung à Odin, une nouvelle fenêtre apparaît
          indiquant "installation du périphérique", laissez-la terminer, car le programme
          est en train de reconnaître les drivers du téléphone. Lorsque cela est fait,
          vous pouvez appuyer sur "Start" et flasher le téléphone.`,
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Comment flasher un portable Huawei',
    description: [
      `Certains Huawei appartiennent à la technologie Mediatek ou MTK, ils sont
      donc formatés avec Flash Tool.`,
      `Bien qu'il existe de nombreux autres
      programmes, cet outil est très efficace.`,
      `Pour les autres technologies que Huawei utilise (HiSilicon, Qualcomm et
        Spreadtrum), vous devez obtenir un programme spécifique dans chaque cas.`,
      `Si votre smartphone est équipé d'un processeur MTK, vous pouvez facilement
        flasher un téléphone portable Huawei en suivant cette procédure étape par
        étape :`,
    ],
    steps: [
      {
        id: 1,
        description: [
          `<span class="fw-bold">Éteignez le téléphone portable et retirez la batterie.</span>`,
        ],
      },
      {
        id: 2,
        description: [
          `<span class="fw-bold">Téléchargez, installez et démarrez <a href="https://spflashtool.com/">Flash Tool</a>.</span>`,
        ],
      },
      {
        id: 3,
        description: [
          `<span class="fw-bold">Téléchargez le système d'exploitation de votre téléphone.</span>`,
          `Pour ce
          faire, veuillez tenir compte de la marque, du modèle et du pays.`,
          `Certaines de ces informations se trouvent au dos du téléphone.`,
          `Pour
          trouver et télécharger le firmware pour n'importe quel téléphone, vous
          pouvez visiter le site <a href="https://desktop.firmware.mobi/">Firmware.Mobi</a>`,
        ],
      },
      {
        id: 4,
        description: [
          `<span class="fw-bold">Sélectionnez l'onglet "Download" dans le menu "Flash Tool".</span>`,
          `Un
          panneau avec plusieurs boutons apparaîtra.`,
        ],
      },
      {
        id: 5,
        description: [
          `<span class="fw-bold">Localisez et sélectionnez "Scatter Loading".</span>`,
          `Une fois là, trouvez le
          fichier "scatter" (ce sera un fichier contenant également d'autres mots)
          dans le dossier où vous avez enregistré le système d'exploitation et
          double-cliquez dessus.`,
          `Une fois sélectionnés, les fichiers du
programme seront téléchargés.`,
        ],
      },
      {
        id: 6,
        description: [
          `<span class="fw-bold">Sélectionnez "Download Only".</span>`,
          `Vous trouverez cet onglet en
          dessous du précédent, juste à gauche.`,
        ],
      },
      {
        id: 7,
        description: [
          `<span class="fw-bold">Retournez au menu et sélectionnez "Format"</span>, un autre panneau de
          contrôle apparaîtra.`,
          `Vous devez y sélectionner les options : <span class="fw-bold">"Auto
          Format Flash"</span> et <span class="fw-bold">"Format whole flash except Bootloader".</span>`,
        ],
      },

      {
        id: 8,
        description: [
          `<span class="fw-bold">Connectez votre téléphone portable à l'ordinateur avec le câble
          USB.</span>`,
        ],
      },
      {
        id: 9,
        description: [
          `<span class="fw-bold">Appuyez sur "Start".</span>`,
          `Vous verrez qu'une barre apparaît, indiquant
          que le programme a été reconnu et que le formatage a commencé.`,
          `Ensuite, une autre barre verte apparaîtra et, lorsqu'elle est pleine, une
          fenêtre indiquant "Format OK" (avec une icône circulaire verte avec
          une coche) apparaîtra, indiquant que le téléphone est formaté.`,
        ],
      },
      {
        id: 10,
        description: [
          `<span class="fw-bold">Débranchez et rebranchez le téléphone portable à l'ordinateur.</span>`,
        ],
      },
      {
        id: 11,
        description: [
          `<span class="fw-bold">Retournez à l'onglet "Download" dans le menu.</span>`,
          `Une fois sur place,
          appuyez sur le bouton <span class="fw-bold">"Download"</span> (c'est l'icône verte de la date qui
          apparaît en premier sur ce panneau).`,
          `Vous verrez d'abord une barre
          rouge se charger, puis une barre violette et enfin une barre jaune.`,
          `Lorsque la barre jaune atteint 100 %, une fenêtre indiquant "Format
          OK" apparaît. Vous venez de flasher votre téléphone !`,
        ],
      },
      {
        id: 12,
        description: [`<span class="fw-bold">Retirez le câble USB.</span>`],
      },
      {
        id: 13,
        description: [
          `<span class="fw-bold">Placez la batterie dans le téléphone portable.</span>`,
        ],
      },
      {
        id: 14,
        description: [
          `<span class="fw-bold">Allumez-le.</span>`,
          `Soyez patient.e pendant qu'il se charge.`,
          `Le logo, la
          présentation et les paramètres apparaîtront.`,
        ],
      },
      {
        id: 15,
        description: [`Configurez votre téléphone selon vos préférences.`],
      },
    ],
  },
  {
    id: 3,
    title: 'Comment flasher un téléphone Motorola',
    description: [
      `Les téléphones Motorola et Lenovo partagent la même technologie.`,
      `Ils
      utilisent donc le programme <span class="fw-bold">Lenovo Moto Smart Assistant ou Rescue and
      Smart Assistant.</span>`,
      `Ce programme est très facile à utiliser, il fait pratiquement
      tout lui-même ; il suffit de lui fournir les bonnes informations et d'avoir une
      bonne connexion Internet (stable et rapide), car il fera l'installation en ligne.`,
      `Si
      vous voulez savoir <span class="fw-bold">comment flasher un téléphone Motorola</span>, suivez ces
      étapes :`,
    ],
    steps: [
      {
        id: 1,
        description: [
          `<span class="fw-bold">Téléchargez, installez et démarrez <a href="https://support.lenovo.com/fr/fr/downloads/ds101291">Lenovo Moto Smart Assistant</a>.</span>`,
        ],
      },
      {
        id: 2,
        description: [
          `<span class="fw-bold">Cherchez dans le menu la configuration et changez la langue.</span>`,
          `Sélectionnez l'icône des trois bandes en bloc.`,
          `Lorsque la fenêtre
          d'options s'ouvre, choisissez votre langue.`,
        ],
      },
      {
        id: 3,
        description: [
          `<span class="fw-bold">Repérez le bouton "Snapshot" dans le menu.</span>`,
          `Ensuite, descendez
          au bas de l'écran, où vous trouverez deux boutons : "Mettre à jour" et
          "Sauvegarder".`,
          `L'une est la mise à jour du système d'exploitation et
          l'autre est le flashage ou le formatage.`,
        ],
      },
      {
        id: 4,
        description: [
          `<span class="fw-bold">Cliquez sur "Sauvegarder".</span>`,
          `Automatiquement, de nouvelles options
          apparaîtront.`,
          `Regardez, pour l'instant, les 3 boutons du haut.`,
        ],
      },
      {
        id: 5,
        description: [
          `<span class="fw-bold">Cliquez sur le bouton "Moto Phone".</span>`,
          `Les modèles Motorola qui
          existent dans les cases ci-dessous seront présentés.`,
        ],
      },
      {
        id: 6,
        description: [
          `<span class="fw-bold">Choisissez votre modèle de téléphone.</span>`,
        ],
      },
      {
        id: 7,
        description: [
          `<span class="fw-bold">Lisez les instructions.</span>`,
          `Une fois que vous aurez rempli les deux
          cases, une fenêtre apparaîtra vous donnant des instructions sur la
          manière d'activer le mode "fastboot".`,
        ],
      },
      {
        id: 8,
        description: [
          `<span class="fw-bold">Connectez votre téléphone à votre ordinateur.</span>`,
        ],
      },
      {
        id: 9,
        description: [
          `<span class="fw-bold">Activez le "mode Fastboot".</span>`,
          `Pour ce faire, éteignez votre téléphone,
          appuyez sur le bouton de diminution du volume et connectez le câble
          USB.`,
        ],
      },
      {
        id: 10,
        description: [
          `<span class="fw-bold">L'appareil démarre en mode "Fastboot".</span>`,
          `Vous saurez que cela a
          commencé car seules des lettres apparaîtront.`,
          `Sur certains modèles
          Motorola, vous devrez appuyer sur le bouton de diminution du volume
          jusqu'à ce que l'option "Start" apparaisse.`,
        ],
      },
      {
        id: 11,
        description: [
          `<span class="fw-bold">Attendez que le software soit téléchargé.</span>`,
          `Vous pouvez vérifier le
          déroulement du téléchargement dans les paramètres du programme.`,
          `Pour ce faire, cliquez sur l'icône avec les trois lignes horizontales en
          haut à droite et choisissez <span class="fw-bold">"Centre de téléchargement</span>".`,
        ],
      },
      {
        id: 12,
        description: [
          `Une fois le firmware téléchargé, choisissez <span class="fw-bold">"Save"</span> ou <span class="fw-bold">"Rescue
          Now".</span>`,
        ],
      },
      {
        id: 13,
        description: [
          `Cliquez sur "Continuer" pour tous les avertissements qui
          apparaissent pour <span class="fw-bold">commencer à flasher le téléphone.</span>`,
        ],
      },
      {
        id: 14,
        description: [
          `Une fois cette opération terminée, vous verrez le mot <span class="fw-bold">"Complété"</span>
          sur l'écran et votre portable redémarrera et le logo apparaîtra.`,
        ],
      },
      {
        id: 15,
        description: [
          `<span class="fw-bold">Retirez le câble USB et attendez que l'appareil vous demande
          de le configurer.</span>`,
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'IPhone',
    description: [
      `Si, au contraire, vous ne disposez d'aucun de ces téléphones portables, nous
      vous recommandons la lecture de notre article  <a href="https://technologie.toutcomment.com/article/comment-formater-un-iphone-2597.html">"Comment formater un
      iPhone"</a>.`,
    ],
  },
];
