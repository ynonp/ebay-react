import React from 'react';

function Layout(props) {  
  return (
    <div>
      <h1>Header</h1>
      <hr />
        {props.children}
      <h2>--- The End ---</h2>
    </div>
  );
}

export function Page1(props) {
  return (
    <Layout>
      <p>some stuff</p>
      <p>more stuff</p>
    </Layout>
  );
}

export function Page2(props) {
  return (
    <Layout>
      <p>some other stuff</p>
    </Layout>
  );
}


