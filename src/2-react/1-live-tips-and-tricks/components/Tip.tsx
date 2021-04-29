import { icons } from '../theme/icons/tag';

export const Tip = () => {
    return (
        <article>
            <header>
                <icons.React />
                <h1>ЗАГОЛОВОК</h1>
            </header>
            <main>
                <time>
                    <icons.React />
                    <div>
                        <span>🚀 27.03.2021, 20:38</span>
                        <span>👨🏼‍🚀 Автор: Лектрум</span>
                    </div>
                </time>
                <h2>ЗАГОЛОВОК</h2>
                <p>ПРЕВЬЮ</p>
            </main>
            <footer>
                <a href='#'>📖 &nbsp;Читать полностью →</a>
            </footer>
        </article>
    );
};
