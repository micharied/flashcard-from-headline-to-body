import {AppEvents, declareIndexPlugin, ReactRNPlugin, RemId, usePlugin, WidgetLocation} from '@remnote/plugin-sdk';
import '../style.css';
import '../App.css';

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerWidget(
      'flashcard_from_headline_to_body',
      WidgetLocation.DocumentBelowTitle,
      {
        dimensions: {
          height: 'auto',
          width: '100%',
        },
      },
  );
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
