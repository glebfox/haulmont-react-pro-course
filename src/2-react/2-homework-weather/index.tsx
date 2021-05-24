/* Core */
import { render } from 'react-dom';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/index.scss';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './lib/react-query';

render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    document.getElementById('root'),
);
