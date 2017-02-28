import * as React from 'react'
import injectSheet from 'react-jss'
import * as color from 'color'
import * as Mustache from 'mustache';
import * as assets from './assets'

interface Props { 
  title: string,
  icon: string,
  onMinimize: React.MouseEventHandler<any>,
  onMaximize: React.MouseEventHandler<any>,
  onUnmaximize: React.MouseEventHandler<any>,
  onClose: React.MouseEventHandler<any>,
  isMax: boolean,
  classes?: {
    titlebar: string,
    actions: string,
    icon_close: string
  }
}

const styles = {
  titlebar: {
    width: '500px',
    height: '32px',
    lineHeight: '32px',
    backgroundColor: '#2196F3',
    textAlign: 'left',

    '& .app_icon_box': {
      width: '40px',
      height: '32px',
      lineHeight: '32px',
      paddingLeft: '10px',
      verticalAlign: 'middle',
      display: 'inline-block',

      '& img': {
        width: '30px',
        height: '30px'
      }
    },
    
    '& .title': {
      color: '#E3F2FD',
      paddingLeft: '5px',
      fontSize: '15px',
      fontFamily: 'Segoe UI',
      fontWeight: 'normal'
    },
  },
  actions: {
    display: 'inline-block',
    float: 'right',
    margin: 0,
    padding: 0,
    '& span': {
      width: '30px',
      height: '30px',
      display: 'inline-block',
      margin: 0,
      padding: '0 5px',
      cursor: 'pointer',
      backgroundSize: '15px 15px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
      },
      '&.icon_minimize': {
        backgroundImage: Mustache.render('url({{{icon}}})', { icon: assets.MINIMIZE_ICON })
      },
      '&.icon_maximize': {
        backgroundImage: Mustache.render('url({{{icon}}})', { icon: assets.MAXIMIZE_ICON })
      },
      '&.icon_unmaximize': {
        backgroundImage: Mustache.render('url({{{icon}}})', { icon: assets.RESTORE_ICON })
      },
      '&.icon_close': {
        backgroundImage: Mustache.render('url({{{icon}}})', { icon: assets.CLOSE_ICON })
      },
      '&.icon_close:hover': {
        backgroundColor: '#FF1744'
      }
    }
  }
}

@injectSheet(styles)
export default class TitleBar extends React.Component<Props, undefined> {

  constructor(props, state){
    super(props, state);
  }

  componentWillReceiveProps(nextProps){
    alert(JSON.stringify(nextProps));
  }

  render(){
    let { title, icon, onMinimize, onMaximize, onUnmaximize, onClose, isMax, classes } = this.props;
    return (
      <div className={classes&&classes.titlebar}>
        <div className="app_icon_box">
          <img className="app_icon" src={icon}/>
        </div>
        <span className="title">{title}</span>
        <div className={classes&&classes.actions}>
          <span className='icon_minimize' onClick={onMinimize}></span>
          { isMax 
            ? <span className='icon_unmaximize' onClick={onUnmaximize}></span> 
            : <span className='icon_maximize' onClick={onMaximize}></span>}
          <span className='icon_close' onClick={onClose}></span>
        </div>
      </div>
    )
  }
}