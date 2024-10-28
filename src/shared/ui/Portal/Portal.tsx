import { FC } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    element?: HTMLElement
    children?: React.ReactNode
}

export const Portal: FC<IPortalProps> = ({ element = document.body, children }) => (
    createPortal(children, element)
);
