// Core
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import { AllTopics, TopicsByTag } from './pages';

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path='/all-topics' element={ <AllTopics /> } />
            <Route path='/topics-by-tag' element={ <TopicsByTag /> } />
            <Route path='*' element={<Navigate to='/all-topics' />} />
        </Routes>
    )
};
