import { observer } from 'mobx-react';

interface Ifns {
    [key: string]: any;
}

export default function components(fns: Ifns) {
    Object.keys(fns).forEach(key => {
        fns[key] = observer(fns[key]);
    });
    return fns;
}
