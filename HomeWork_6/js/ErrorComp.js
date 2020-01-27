Vue.component ('error', {
    
    template: 
        `<p class="errorBlock" v-if="this.$parent.failed">Не удаётся выполнить запрос к серверу по ссылке: <span class="urlSpan">{{this.$parent.failed}}</span></p>`
})