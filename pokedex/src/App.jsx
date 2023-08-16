import './AppStyle.js';
import { ContainerApp } from './AppStyle.js';
import Router from './routes/Router';
import GlobalState from './contexts/GlobalState';

function App() {
    return (
        <ContainerApp>
            <GlobalState>
                <Router />
            </GlobalState>
        </ContainerApp>
    );
}

export default App;
