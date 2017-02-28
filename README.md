# desktop-app-titlebar
Titlebar for desktop app

## Get started
```bash
npm install desktop-app-titlebar --save
```

```javascript
import TitleBar from 'desktop-app-titlebar';

//Title and icon, event handler for minimize, maximize and close should all be provided
<App>
  <TitleBar 
    title={title}
    icon={icon}
    isMax={isMax}
    onMinimize={func}
    onMaximize={func}
    onUnmaximize={func}
    onClose={func}/>
</App>

```

### What is **isMax**
Titlebar doesn't know whether current window is maximized or not and it's all depends the property **isMax**(boolean) that you provided.

## Custom properties
There are various properties which could be customized.

* Background color
* Font size / weight / family / color
* App icon

## Themes


