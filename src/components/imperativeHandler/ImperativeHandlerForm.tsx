import { useRef } from 'react';
import ImperativeHandleInput, { InputHandler } from './ImperativeHandlerInput';

export default function ImperativeHandlerForm() {
  const ref = useRef<InputHandler>(null);

  return (
    <form>
      <ImperativeHandleInput placeholder='Enter your name' ref={ref} />
      <button type='button' onClick={() => ref.current?.focus()}>
        Edit
      </button>
      <button type='button' onClick={() => ref.current?.scrollIntoView()}>
        Scroll
      </button>
    </form>
  );
}
