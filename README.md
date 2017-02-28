# desktop-app-titlebar
Titlebar for desktop app

## Get started
```bash
npm install desktop-app-titlebar --save
```

```javascript
import TitleBar from 'desktop-app-titlebar';

...
//Title and icon, event handler for minimize, maximize and close should all be provided
<App>
  <TitleBar title={title} icon={icon} onMinimize={func} onMaximize={func} onClose={func}/>
</App>
...

```

## Custom properties
There are various properties which could be customized.

* Background color
* Font size / weight / family / color

## Themes


