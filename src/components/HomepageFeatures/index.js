import React from 'react';
import clsx from 'clsx';
import style from './feature.style.module.css';
const FeatureList = [
  {
    title: 'Installation und Anwendung',
    imgPath: '/img/150px-Skilllevel1.png',
    url: '/docs/intro',
    description: (
      <>
        Bevor es losgehen kann, muss AntMe! auf dem System installiert werden. 
        as beinhaltet nicht nur das eigentliche Spiel, sondern auch einige Abhängigkeiten. 
        So braucht es z.B. eine Entwicklungsumgebung mit der Code produziert werden kann. 
        Danach lohnt es sich sicher die Funktionalitäten des Spiels kennen zu lernen, bevor es richtig los geht.
      </>
    ),
  },
  {
    title: 'Installation und Anwendung',
    imgPath: '/img/150px-Skilllevel2.png',
    url: '/docs/intro',
    description: (
      <>
        Bevor es losgehen kann, muss AntMe! auf dem System installiert werden. 
        as beinhaltet nicht nur das eigentliche Spiel, sondern auch einige Abhängigkeiten. 
        So braucht es z.B. eine Entwicklungsumgebung mit der Code produziert werden kann. 
        Danach lohnt es sich sicher die Funktionalitäten des Spiels kennen zu lernen, bevor es richtig los geht.
      </>
    ),
  },
  {
    title: 'Installation und Anwendung',
    imgPath: '/img/150px-Skilllevel3.png',
    url: '/docs/intro',
    description: (
      <>
        Bevor es losgehen kann, muss AntMe! auf dem System installiert werden. 
        as beinhaltet nicht nur das eigentliche Spiel, sondern auch einige Abhängigkeiten. 
        So braucht es z.B. eine Entwicklungsumgebung mit der Code produziert werden kann. 
        Danach lohnt es sich sicher die Funktionalitäten des Spiels kennen zu lernen, bevor es richtig los geht.
      </>
    ),
  },
];

function Feature({imgPath, title, description, url}) {
  return (
    <div className='col' >
      <a className={clsx('card shadow--md', style.card)} href={url}>
        <div className={clsx("card__header text--center", style.card__header)}>
          <img className={clsx(style.featureImg)} src={imgPath} />
        </div>
        <h3 className='text--center'>{title}</h3>
        <p className="text--left padding-horiz--md card__body">{description}</p>
        </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(style.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
