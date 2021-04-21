import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);

interface Props {
  logo?: JSX.Element;
  title?: JSX.Element;
  radar?: JSX.Element;
  content?: JSX.Element;
}

export default function Card(props: Props) {
  return (
    <div className={props.radar ? 'card-radar' : 'card-medium'}>
      {props.logo ? <div className="logo">{props.logo}</div> : ''}
      {props.title ? <div>{props.title}</div> : ''}
      {props.radar ? <div className="radar">{props.radar}</div> : ''}
      {props.content ? (
        <div className="content">
          <p>{props.content}</p>
          <div className="links">
            <hr className="dashed-border" />
            <a href="mailto:blin.nicolas.pro@gmail.com">
              <FontAwesomeIcon icon={['far', 'envelope']} size={'2x'} />
            </a>
            <a href="https://github.com/MagicKitty">
              <FontAwesomeIcon icon={['fab', 'github']} size={'2x'} />
            </a>
            <a href="https://www.linkedin.com/in/blin-nicolas-pro/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size={'2x'} />
            </a>
            <hr className="dashed-border" />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
