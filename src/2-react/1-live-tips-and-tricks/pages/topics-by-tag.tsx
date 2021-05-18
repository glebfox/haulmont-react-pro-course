/* Components */
import { Nav, Hero, Layout, TipList } from '../components';

export const TopicsByTag = () => {
    return (
        <Layout>
            <Nav />
            <Hero tipViewMode='topic-by-tag' />
            <TipList tipViewMode='topic-by-tag' />
        </Layout>
    );
};

TopicsByTag.displayName = 'AllTopicsPage';
