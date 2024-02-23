import { PropsWithChildren, createContext, useContext } from 'react';

const ThemeContext = createContext<string | null>(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value='dark'>
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }: PropsWithChildren<{ title: string }>) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }: { children: string }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}
