let currentId = 1;

const TodoIdGenerator = {
    getNewId() {
        return currentId++;
    }
}

export default TodoIdGenerator;