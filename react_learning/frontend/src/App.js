import ToDoList from "./components/ToDoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';

function App() {
  return (
    <>
      <h3> ToDo List </h3>
      <Textfield name="add-todo" placeholder="Add todo">
        elemAfterInput={
          <Button isDisabled={true} appearance="primary">
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px"}}
      </Textfield>
      <ToDoList />
    </> 
  );
}

export default App;
