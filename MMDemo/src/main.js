import './assets/main.css'

import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './App.vue'

const app = createApp({
    data() {
        return {
            count: 0
        }
    }
})

app.mount('#app')
