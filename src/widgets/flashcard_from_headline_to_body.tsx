import {
    AppEvents, Rem,
    RemId,
    renderWidget, SelectionType,
    useAPIEventListener,
    usePlugin,
    useSyncedStorageState, useTracker, WidgetLocation
} from '@remnote/plugin-sdk';

function FlashcardFromHeadlineToBody() {
    const rem = useTracker(async (rp) => {
        return await rp.focus.getFocusedPortal()
    })

    if (rem != undefined && rem.backText && rem.backText.length > 0) {
        return <div><b>Definition:</b> <i>{rem?.backText}</i></div>;
    }
    return null;
}

renderWidget(FlashcardFromHeadlineToBody);