/**
 * Key takeaway: children can have their own independent state
 */

import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter name="Rosie" />
      <Counter name="Jim" />
    </div>
  );
}

export default App;
