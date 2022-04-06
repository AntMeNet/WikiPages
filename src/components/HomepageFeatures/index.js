import React from 'react';
import clsx from 'clsx';
import style from './feature.style.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link'
const FeatureList = [
  {
    title: translate({
      id: 'homepage.install',
      message: 'Installation',
      description: 'The label for the install card on the home page'
    }),
    imgPath: 'img/150px-Skilllevel1.png',
    url: 'docs/tutorials/installation',
  },
  {
    title: translate({
      id: 'homepage.programming',
      message: 'Ameisen programmieren',
      description: 'The label for the progamming card on the home page'
    }),
    imgPath: 'img/150px-Skilllevel2.png',
    url: 'docs/tutorials/gamestart',
  },
  {
    title: translate({
      id: 'homepage.commands',
      message: 'Befehle',
      description: 'The label for the commands card on the home page'
    }),
    imgPath: 'img/150px-Skilllevel3.png',
    url: 'docs/commands/',
  },
];

function Feature({imgPath, title, url}) {
  return (
    <div className='col' >
      <Link className={clsx('card shadow--md', style.card)} to={url}>
        <div className={clsx("text--center", style.imageContainer)}>
          <img className={clsx(style.featureImg)} src={imgPath} />
        </div>
        <h3 className={clsx('card__footer text--center', style.card__title)}>{title}</h3>
      </Link>
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
