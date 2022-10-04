import {
    AppEvents, Rem,
    RemId,
    renderWidget,
    useAPIEventListener,
    usePlugin,
    useSyncedStorageState, useTracker, WidgetLocation
} from '@remnote/plugin-sdk';

function FlashcardFromHeadlineToBody() {
    const rem = useTracker(async (rp) => {
        const widgetContext = await rp.widget.getWidgetContext<WidgetLocation.DocumentBelowTitle>();
        return await rp.rem.findOne(widgetContext?.documentId)
    })

    if (rem?.backText && rem.backText.length === 0) {
        return null;
    }
    return <div><b>Definition:</b> <i>{rem?.backText}</i></div>;
}

renderWidget(FlashcardFromHeadlineToBody);