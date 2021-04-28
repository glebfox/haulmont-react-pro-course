/* Components */
import { Nav, Hero } from '../components';

export const HomePage = () => {
    return (
        <section className='layout'>
            <Nav />
            <Hero />
        </section>
    );
};

HomePage.displayName = 'MyHomePage';