const colors = ["#b33a3a","#E69E1A","#32cd32"]
const level = ["High", "Medium", "Low"]

export default (priority) => {
    return {
        level:(level[priority-1]),
        color:colors[priority-1]
    }
}