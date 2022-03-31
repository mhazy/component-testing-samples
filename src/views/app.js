import PartOneButton from "../components/button/part1";
import PartTwoButton from "../components/button/part2";
import PartThreeButton from "../components/button/part3";
import PartFourButton from "../components/button/part4";
import PartSixButton from "../components/button/part6";
import {createReduxStore} from "../components/state/store";
import {Provider} from "react-redux";

const store = createReduxStore({ label: 'Click me, please!' });

function App() {
  const handleClick = (part) => () => alert('clicked ' + part);

  return (
    <Provider store={store}>
      <div>
        <h2>Super Boring Test App</h2>
        <div>
          <h3>#1</h3>
          <PartOneButton label="Click Me!" onClick={handleClick('part1')} />
        </div>
        <div>
          <h3>#2 - Button</h3>
          <PartTwoButton label="Click Me!" onClick={handleClick('part2')} />
        </div>
        <div>
          <h3>#2 - Link</h3>
          <PartTwoButton label="Click Me!" to="https://example.org" onClick={handleClick('part2')} />
        </div>
        <div>
          <h3>#3 (link)</h3>
          <PartThreeButton label="Click Me!" onClick={handleClick('part3')} to  ="https://www.google.com" />
        </div>
        <div>
          <h3>#3 (button) </h3>
          <PartThreeButton label="Click Me!" onClick={handleClick('part3')} />
        </div>
        <div>
          <h3>#4</h3>
          <PartFourButton label="Click Me!" onClick={handleClick('part4')} />
        </div>
        <div>
          <h3>#6</h3>
          <PartSixButton label="Click Me!" onClick={handleClick('part6')} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
