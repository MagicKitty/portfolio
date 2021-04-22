import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Background from './Background';
import './index.css';
import RadarSkills from './RadarSkills';

import textures from 'textures';

export default function Sections() {
  return (
    <React.Fragment>
      <section>
        <Background
          texture={textures
            .circles()
            .radius(4)
            .fill('transparent')
            .strokeWidth(1)
            .stroke('rgba(0,0,0,0.13)')
            .background('#ea907a')}
        >
          <Card
            logo={
              <img
                alt="nicolas blin logo"
                src="./logo_size_invert.jpg"
              />
            }
            content={
              <>
                Salut, je m'appelle Nicolas Blin, développeur Java, Angular et
                React.
                <br />
                <br />
                Je m'intéresse aux designs pattern appliqué à la programmation
                objet.
                <br />
                <br />
                J'aime la lecture d'ouvrages sur la programmtion.
                <br />
                <i>Head First Design Patterns, Clean Code, TDD by Example...</i>
                <br />
                <br />
                J'applique au quotidien les pratiques de TDD.
                <br />
                <br />
                La méthodologie Agile a toujours été au centre de mes projets.
                <br />
                <br />
                Vous pouvez m'envoyer un mail ou continuer d'explorer mon
                portfolio :)
              </>
            }
          />
        </Background>
      </section>
      <section>
        <Background
          texture={textures
            .paths()
            .d('woven')
            .lighter()
            .thicker()
            .size(20)
            .stroke('rgba(0,0,0,0.13)')
            .background('#98ddca')}
        >
          <Card radar={<RadarSkills />} title={'Radar de compétences'} />
        </Background>
      </section>
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Sections />
  </React.StrictMode>,
  document.getElementById('root')
);
