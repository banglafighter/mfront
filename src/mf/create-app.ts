import {lwReactCreateRoot} from "mfront-core";
import {mmReactUseEffect, mmReactUseRef, UINode, mmReactCreateElement} from "mfront";


interface RootCommitObserverProps {
    app: UINode
    onRootCommitted?: () => void
}

function RootCommitObserver({app, onRootCommitted}: RootCommitObserverProps) {
    const notified = mmReactUseRef(false);

    mmReactUseEffect(() => {
        if (notified.current) {
            return;
        }

        notified.current = true;
        onRootCommitted?.();
    }, [onRootCommitted]);

    return app;
}

export function createApp(App: UINode, container: HTMLElement | null, onRootCommitted?: () => void) {
    if (!container) {
        return;
    }

    const root = lwReactCreateRoot(container);

    if (!onRootCommitted) {
        root.render(App);
        return;
    }

    root.render(
        mmReactCreateElement(RootCommitObserver, {
            app: App,
            onRootCommitted
        })
    );
}
