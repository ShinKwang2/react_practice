import { useCallback, useRef, useState } from 'react';

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => inputRef.current?.focus();
  const memoeClick = useCallback(() => {
    console.log('🚀  Form  state:', state);
    handleClick();
  }, []);

  return (
    <>
      <input ref={inputRef} />
      <p>{state.toString()}</p>
      <button
        onClick={() => {
          setState(!state);
          memoeClick();
        }}
      >
        Focus the input
      </button>
    </>
  );
}
