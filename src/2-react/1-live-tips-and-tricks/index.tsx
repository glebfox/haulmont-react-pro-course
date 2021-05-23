/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/* Components */
import { App } from './App';
import { SelectedTagProvider } from './lib/selectedTagContext';

/* Instruments */
import './theme/main.scss';
import { queryClient } from './lib/react-query';

render(
    <QueryClientProvider client={queryClient}>
        <SelectedTagProvider>
            <Router>
                <App />
            </Router>
        </SelectedTagProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    document.getElementById('root')
);
