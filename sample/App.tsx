import * as React from 'react'
import TitleBar from "../src/TitleBar"

export default class App extends React.Component<any, undefined> {
  
  constructor(props, state){
    super(props, state);
  }

  generateProps(title: string, icon: string, theme?: string) {
    return (() => {
      let obj = {
        title,
        icon,
        theme: 'primary',
        isMax: false,
        onMinimize: () => null,
        onMaximize: () => {
          obj.isMax = true;
        },
        onUnmaximize: () => {
          obj.isMax = false;
        },
        onClose: () => null
      }

      if(theme){
        obj.theme = theme;
      }
      return obj;
    })()
  }

  render(){
    const onClose = () => null;
    return (
        <div>
          <TitleBar {...this.generateProps('Primary', 'sss')}/>
          <br/>
          <TitleBar {...this.generateProps('Purple', 'sss', 'purple')}/>
          <br/>
          <TitleBar {...this.generateProps('Pink', 'sss', 'pink')}/>
          <br/>
          <TitleBar {...this.generateProps('Indigo', 'sss', 'indigo')}/>
          <br/>
          <TitleBar {...this.generateProps('Orange', 'sss', 'orange')}/>
        </div>
    )
  }
}