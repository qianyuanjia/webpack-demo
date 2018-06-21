import dataObj from './src/js/a.js'
import './src/css/style.css'
import './src/css/test.less'
import './src/css/try.scss'
import Tab from './src/js/tab.js'
let data=dataObj.data()
dataObj.alarm()
let dom =document.getElementById('app')
dom.innerHTML=Tab.tpl
