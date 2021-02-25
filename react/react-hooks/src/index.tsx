import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {HelloComponent} from './hello';

ReactDOM.render(
    <HelloComponent username={"支总"}/>,
    document.getElementById('root')
)