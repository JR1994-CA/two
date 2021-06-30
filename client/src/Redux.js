import {connect} from "react-redux";


function mapStateToProps(state,)
{
    const { todos } = state
    return { todoList: todos.allIds }}

export default connect(mapStateToProps)(TodoList)