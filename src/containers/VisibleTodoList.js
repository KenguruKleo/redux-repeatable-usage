import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos_1, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};

function dispatchWithReducerId(funcMapDispatchToProps, reducerId) {
    return (dispatch) => {
        return funcMapDispatchToProps((action) => {
            dispatch({
                ...action,
                reducerId
            });
        });
    }
};

function connectWithReducerId( mapStateToProps, mapDispatchToProps, reducerId){
    return connect(
        mapStateToProps,
        dispatchWithReducerId( mapDispatchToProps,  reducerId)
    )
};

const VisibleTodoList = connectWithReducerId(mapStateToProps, mapDispatchToProps, 'todos_1')(TodoList);

export default VisibleTodoList;