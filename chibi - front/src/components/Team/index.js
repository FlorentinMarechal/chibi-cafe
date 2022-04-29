/* eslint-disable jsx-a11y/alt-text */
import github from '../../assets/logos/github.png';
import linkedin from '../../assets/logos/linkedin.png';
import imgClaudie from '../../assets/team/imgClaudie.jpg';
import imgLeopold from '../../assets/team/imgLeopold.png';
import imgMathieu from '../../assets/team/imgMathieu.jpg';
import imgFlorentin from '../../assets/team/imgFlorentin.png';
import imgRichard from '../../assets/team/imgRichard.jpg';
import './team.scss';

const Team = () => (
    <div className='team'>
        <h2 className="team__title">Team Chibi Café</h2>
        <div className="team__container">
            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgClaudie}
                />
                <p className="team__container__card__name">Claudie</p>
                <p className="team__container__card__description">Lead Dev Front</p>
                <div className="team__container__card__links">
                    <a className="team__container__card__links__a" href="https://github.com/Claudie-code" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={github} alt="Logo Github" title="Github" /> 
                    </a>
                    <a className="team__container__card__links__a" href="https://www.linkedin.com/in/claudiegueguen/" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={linkedin} alt="Logo Linkedin" title="Linkedin" /> 
                    </a>
                </div>
            </div>

            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgLeopold}
                />
                <p className="team__container__card__name">Leopold</p>
                <p className="team__container__card__description">Lead Dev Back</p>
                <div className="team__container__card__links">
                    <a className="team__container__card__links__a" href="https://github.com/leopold-deco" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={github} alt="Logo Github" title="Github" /> 
                    </a>
                    <a className="team__container__card__links__a" href="https://www.linkedin.com/in/leopold-deconinck-49639b21a/" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={linkedin} alt="Logo Linkedin" title="Linkedin" /> 
                    </a>
                </div>
            </div>

            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgMathieu}
                />
                <p className="team__container__card__name">Mathieu</p>
                <p className="team__container__card__description">Scrum Master & Dev Front</p>
                <div className="team__container__card__links">
                    <a className="team__container__card__links__a" href="https://github.com/MathieuFigari" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={github} alt="Logo Github" title="Github" /> 
                    </a>
                    <a className="team__container__card__links__a" href="https://www.linkedin.com/in/mathieu-figari/" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={linkedin} alt="Logo Linkedin" title="Linkedin" /> 
                    </a>
                </div>
            </div>

            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgFlorentin}
                />
                <p className="team__container__card__name">Florentin</p>
                <p className="team__container__card__description">Git Master & Dev Back</p>
                <div className="team__container__card__links">
                    <a className="team__container__card__links__a" href="https://github.com/FlorentinMarechal" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={github} alt="Logo Github" title="Github" /> 
                    </a>
                    <a className="team__container__card__links__a" href="https://www.linkedin.com/in/florentin-marechal/" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={linkedin} alt="Logo Linkedin" title="Linkedin" /> 
                    </a>
                </div>
            </div>

            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgRichard}
                />
                <p className="team__container__card__name">Richard</p>
                <p className="team__container__card__description">Product Owner & Dev Front</p>
                <div className="team__container__card__links">
                    <a className="team__container__card__links__a" href="https://github.com/RichardBefayt" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={github} alt="Logo Github" title="Github" /> 
                    </a>
                    <a className="team__container__card__links__a" href="https://www.linkedin.com/in/richardbefayt/" target="_blank" rel="noopener noreferrer">
                        <img className="team__container__card__links__img" src={linkedin} alt="Logo Linkedin" title="Linkedin" /> 
                    </a>
                </div>
            </div>
        </div>
    </div>
);



export default Team;

