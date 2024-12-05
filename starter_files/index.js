const App = () => {
  return (
    React.createElement('div', null, 
      React.createElement('h1', null, 'Welcome to React!'),
      React.createElement('p', null, 'This is a starter template.')
    )
  );
};

ReactDOM.render(
  React.createElement(App), 
  document.getElementById('root')
);
