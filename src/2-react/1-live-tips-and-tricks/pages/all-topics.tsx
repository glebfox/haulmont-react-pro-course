/* Components */
import { Nav, Hero, TipList, Layout } from '../components';

export const AllTopics = () => {
    return (
        <Layout>
            <Nav />
            <Hero tipViewMode='all-topics' />
            <TipList tipViewMode='all-topics' />
        </Layout>
    );
};

AllTopics.displayName = 'AllTopicsPage';
