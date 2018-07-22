; (function (global, Vue) {
    'use strict';
    // todo-header 컴포넌트 전역 등록 
    Vue.component('todo-header', {
        props: ['propsdata'],
        template: '<h1> {{ propsdata }} </h1>'
    })
    // todo-footer 컴포넌트 전역 등록 
    Vue.component('todo-footer',{
        template : '<footer> Footer Area </footer>'
    })
    
    var todoList = {
        template : '<p> List Area </p>'
    } 
    
    // app인스턴트의 콘솔버튼 템플릿을 생성했고 + v-on:click 이벤트 
    var consoleBtn = {
        template : '<button v-on:click="showLog"> 콘솔 버튼이다요 </button>',
        methods : {
            showLog : function(){
                this.$emit('show-log')
            }
        }
    }

    // app인스턴트의 콘솔버튼 템플릿을 생성했고 + v-on:click 이벤트 
    var alertBtn = {
        template: '<button v-on:click="showAlert"> 팝업 버튼이다요 </button>',
        methods: {
            showAlert: function () {
                this.$emit('show-alert')
            }
        }
    }


    var app = new Vue({
        el: '#app',
        data: {
            message: 'first Vue.js - Todo App'
        },
        components: {
            'todo-list' : todoList,
            'console-btn': consoleBtn,
            'alert-btn': alertBtn
        },
        methods : {
            printText : function(){
                console.log('콘솔로그 큐~!')
            },
            alertText: function () {
                alert('경고팝업 큐~!')
            }

        }
    })
})(window, window.Vue);
