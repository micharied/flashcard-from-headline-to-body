import {
    AppEvents, Rem,
    RemId,
    renderWidget,
    useAPIEventListener,
    usePlugin,
    useSyncedStorageState, useTracker
} from '@remnote/plugin-sdk';

function FlashcardFromHeadlineToBody() {
    const plugin = usePlugin()
    const rem = useTracker(async (reactivePlugin) => {
        return await reactivePlugin.focus.getFocusedPortal()
    });

    return <div><b>Definition:</b> <i>{rem?.backText}</i></div>;

}

renderWidget(FlashcardFromHeadlineToBody);