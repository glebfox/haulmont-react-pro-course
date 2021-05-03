import { FC } from 'react';

import tips from '../../mock-data/tips.json';
import { formatDate, getTagIcon } from '../../helpers';
import { TipModel } from '../../types';

export const TipList: FC = () => {
    const tipsJSX = tips?.map((tip: TipModel) => {
        const TagIcon = getTagIcon(tip.tag.name);

        return (
            <article key={tip.id}>
                <header>
                    <TagIcon /> <h1>{tip.title}</h1>
                </header>

                <main>
                    <time>
                        <TagIcon />

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

    return <section className='tip-list'>{tipsJSX}</section>;
};
