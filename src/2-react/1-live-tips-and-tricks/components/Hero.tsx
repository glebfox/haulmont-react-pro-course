/* Icons */
import { icons } from '../theme/icons/tag';

export const Hero = () => {
    return (
        <section className='hero'>
            <div className='title'>
                <h1>Типсы и Триксы</h1>
                <h2>Все темы</h2>
            </div>

            <div className='tags'>
                {Object.entries(icons).map(([name, icon], index) => {
                    const Icon = icon;
                    return (
                        <span key={index}>
                            <Icon /> {name}
                        </span>
                    );
                })}
            </div>
        </section>
    );
};
