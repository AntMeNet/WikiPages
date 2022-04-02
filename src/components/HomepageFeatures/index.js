import React from 'react';
import clsx from 'clsx';
import style from './feature.style.module.css';
const FeatureList = [
  {
    title: 'Installation',
    imgPath: '/img/150px-Skilllevel1.png',
    url: '/docs/Tutorials/installation/Voraussetzung',
  },
  {
    title: 'Ameisen programmieren',
    imgPath: '/img/150px-Skilllevel2.png',
    url: '/docs/Tutorials/installation',
  },
  {
    title: 'API',
    imgPath: '/img/150px-Skilllevel3.png',
    url: '/docs/api/index',
  },
];

function Feature({imgPath, title, url}) {
  return (
    <div className='col' >
      <a className={clsx('card shadow--md', style.card)} href={url}>
        <div className={clsx("text--center", style.imageContainer)}>
          <img className={clsx(style.featureImg)} src={imgPath} />
        </div>
        <h3 className={clsx('card__footer text--center', style.card__title)}>{title}</h3>
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
