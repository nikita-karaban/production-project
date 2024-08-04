import {PropsWithChildren, ReactPortal} from 'react';
import {createPortal} from 'react-dom';

type PortalPropsType = {
    element?: Element;
};

export function Portal(props: PropsWithChildren<PortalPropsType>): ReactPortal {
    const nodeWrapper = document.querySelector('#root');
    const {element = nodeWrapper, children} = props;

    return createPortal(children, element);
}
