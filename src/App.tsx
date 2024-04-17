import { Tooltip } from './components/Tooltip/Tooltip';
import { Popover } from './components/Popover/Popover';

function App() {
  return (
    <div>
      <Popover/>
      <Tooltip content={"a custom tooltip"} />
    </div>
  );
}

export default App;
