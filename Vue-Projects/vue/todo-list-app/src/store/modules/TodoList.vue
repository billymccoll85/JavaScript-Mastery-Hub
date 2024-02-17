<template>
    <div>
        <h1>Todo</h1>
        <ul>
            <li v-for="todo in allTodos" :key="todo.id">{{ todo.title }}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'TodoList',
    computed: {
        ...mapGetters({
            allTodos: 'todos/allTodos'
        })
    },
    mounted() {
        this.$store.dispatch('todo/fetchTodo')
    }
}
</script>