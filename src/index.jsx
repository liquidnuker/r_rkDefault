import "./styles/main.scss";

import AsyncItem1 from './AsyncItem1.jsx';

function Component1(props) {
  return (
    <div>
      <AsyncItem1 />
    </div>
  );
}

ReactDOM.render(
  <Component1 />,
  document.getElementById('root')
);