import {PropsWithChildren, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Portal} from 'shared/ui/Portal';

import * as styles from './Modal.scss';

type ModalPropsType = {
    readonly className?: string;
    readonly isOpen?: boolean;
    readonly onClose?: () => void;
};

const ANIMATION_DELAY = 300;

export function Modal(props: PropsWithChildren<ModalPropsType>): JSX.Element | null {
    const {className, children, isOpen, onClose} = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const containerElementref = useRef(null);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    function handleContentClick(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
    }

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        const element = document.querySelector('.app');

        if (element) {
            containerElementref.current = element;
        }
    }, []);

    const mods = {
        [styles.Modal__opened]: isOpen,
        [styles.Modal__closing]: isClosing,
    };

    if (!containerElementref.current) {
        return null;
    }

    return (
        <Portal element={containerElementref.current}>
            <div className={classNames(styles.Modal, mods, className)}>
                <div className={styles.Modal_overlay} onClick={closeHandler}>
                    <div className={styles.Modal_content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
