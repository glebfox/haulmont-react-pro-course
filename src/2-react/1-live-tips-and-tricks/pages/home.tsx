/* Components */
import { Nav, Hero, TipList } from '../components';

export const HomePage = () => {
    return (
        <section className='layout'>
            <Nav />
            <Hero />
            <TipList />
        </section>
    );
};

HomePage.displayName = 'MyHomePage';
