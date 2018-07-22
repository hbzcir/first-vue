// todo-footer 컴포넌트 전역 등록 
Vue.component('todo-footer',{
    template : '<footer> Footer Area </footer>'
})
var todoList = {
    template : '<p> List Area </p>'
} 
var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },
    components: {
        'todo-list' : todoList
    }
})