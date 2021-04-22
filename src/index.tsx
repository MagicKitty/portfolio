import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Background from './Background';
import './index.css';
import RadarSkills from './RadarSkills';

import textures from 'textures';

const FILL = 'transparent';
const STROKE_WIDTH = 1;
const STROKE = 'rgba(0,0,0,0.13)';
const BACKGROUND_SECTION_1 = '#f58634';
const BACKGROUND_SECTION_2 = '#ffcc29';
const BACKGROUND_SECTION_3 = '#81b214';
const BACKGROUND_SECTION_4 = '#206a5d';

export default function Sections() {
  return (
    <>
      <section>
        <Background
          texture={textures
            .circles()
            .radius(4)
            .fill(FILL)
            .strokeWidth(STROKE_WIDTH)
            .stroke(STROKE)
            .background(BACKGROUND_SECTION_1)}
        >
          <Card
            type={'intro'}
            logo={<img alt="nicolas blin logo" src="./logo_size_invert.jpg" />}
            content={
              <>
                Salut, je m'appelle Nicolas Blin, développeur Java, Angular et
                React.
                <br />
                <i>-</i>
                <br />
                Je m'intéresse aux designs pattern appliqué à la programmation
                objet.
                <br />
                <i>-</i>
                <br />
                J'aime la lecture d'ouvrages sur la programmtion.
                <br />
                <i>Head First Design Patterns, Clean Code, TDD by Example...</i>
                <br />
                <i>-</i>
                <br />
                J'applique au quotidien les pratiques de TDD.
                <br />
                <i>-</i>
                <br />
                La méthodologie Agile a toujours été au centre de mes projets.
                <br />
                <i>-</i>
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
            .stroke(STROKE)
            .background(BACKGROUND_SECTION_2)}
        >
          <Card
            type={'radar'}
            radar={<RadarSkills />}
            title={'Radar de compétences'}
          />
        </Background>
      </section>
      <section>
        <Background
          texture={textures
            .paths()
            .d('squares')
            .fill(FILL)
            .strokeWidth(STROKE_WIDTH)
            .stroke(STROKE)
            .background(BACKGROUND_SECTION_3)}
        >
          <Card
            type={'normal'}
            title={'Mon travail'}
            content={
              <>
                Réécriture en Angular 8 des interfaces de gestions chez PSA
                Group.
                <br />
                <i>-</i>
                <br />
                Rédaction d'une formation sur le développement d'applications
                web avec les nouvelles technologies.
                <br />
                <i>Docker/Podman, Angular, Spring Boot, Jenkins, Ansible...</i>
                <br />
                <i>-</i>
                <br />
                Étude sur générateur d'applications web en MongoDB, Angular &
                Java.
              </>
            }
          />
        </Background>
      </section>
      <section>
        <Background
          texture={textures
            .paths()
            .d('nylon')
            .size(30)
            .shapeRendering('crispEdges')
            .strokeWidth(STROKE_WIDTH)
            .stroke(STROKE)
            .background(BACKGROUND_SECTION_4)}
        >
          <Card
            type={'normal'}
            title={'Avant ça'}
            content={
              <>
                Travaux sur Deadlock, plateforme d'évaluation de code destinée
                aux écoles, en React & Java
                <br />
                <i>-</i>
                <br />
                Master en Ingénierie Logiciel à la FST de Nancy
              </>
            }
          />
        </Background>
      </section>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Sections />
  </React.StrictMode>,
  document.getElementById('root')
);
