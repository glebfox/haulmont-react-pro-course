/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import { App } from './App';
import { SelectedTagProvider } from './lib/selectedTagContext';

/* Instruments */
import './theme/main.scss';

render(
    <SelectedTagProvider>
        <Router>
            <App />
        </Router>
    </SelectedTagProvider>,
    document.getElementById('root')
);
