/* Core */
import { useContext } from 'react';

/* Data */
import source from '../../mock-data/tips.json';

/* Instruments */
import { formatDate, getTagIcon } from '../../helpers';
import { Context } from '../../lib/selectedTagContext';

export const TipList: React.FC<PropTypes> = ({ tipViewMode }) => {
    let tips = source;
    const [selectedTagId] = useContext(Context);

    if (tipViewMode === 'topic-by-tag') {
        tips = source?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => {
        const TagIcon = getTagIcon(tip.tag.name);

        return (
            <article key={tip.id}>
                <header>
                    <TagIcon/> <h1>{tip.title}</h1>
                </header>

                <main>
                    <time>
                        <TagIcon/>

                        <div>
                            <span>🚀 {formatDate(tip.created)}</span>
                            <span>👨🏼‍🚀 Автор: {tip.author}</span>
                        </div>
                    </time>

                    <h2>{tip.title}</h2>
                    <p>{tip.preview}</p>
                </main>

                <footer>
                    <p>📖 &nbsp;Читать полностью &rarr;</p>
                </footer>
            </article>
        );
    });

    return (
        <section className='tip-list'>
            {tipsJSX}
        </section>
    );
};

interface PropTypes {
    tipViewMode: string
}
