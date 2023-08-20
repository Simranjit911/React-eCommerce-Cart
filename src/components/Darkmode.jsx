import Darkmode from 'darkmode-js';
import "../index.css"

const Darkmodee = () => {
    const options = {
        bottom:"54px",
        top: 'unset', // default: '32px'
        right: 'unset', // default: '32px'
        left: '32px', // default: 'unset'
        time: '0.9s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#eee', // default: '#fff'
        saveInCookies: false, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true, // default: 
        zIndex:1000,
        
      }
      const darkmode = new Darkmode(options);
      darkmode.showWidget();
  return (
    <div></div>
  )
}

export default Darkmodee