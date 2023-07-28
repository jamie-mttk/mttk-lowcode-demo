import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//1.Import element plus /element plus icons/mttk-lowcode/vuewrapper
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import {installer,useComponentRepository} from 'mttk-lowcode'
import WRAPPER from 'vuewrapper'

//2.Component init,you can also install 3rd part components
const componentRepository =useComponentRepository()
componentRepository.useBuitin()



const app = createApp(App)

app.use(createPinia())
app.use(router)

//3.install
app.use(ElementPlus)
app.use(installer)
app.use(WRAPPER)


app.mount('#app')
//4.export app and router whcih will be used later
export {app,router};
