// src/App.jsx

import TodoContainer from "./components/todo/TodoContainer";
import RootLayout from "./layout/RootLayout";
const App = () => {
  return (
    <RootLayout>
      <TodoContainer />
    </RootLayout>
  );
};

export default App;