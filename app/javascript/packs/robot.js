import Vue from 'vue'
import App from '../robot.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('search'))
  const app = new Vue({ el, render: h => h(App) })

  console.log(app)
})

