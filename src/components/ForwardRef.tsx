import { Ref, forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref: Ref<HTMLInputElement>) => {
  return <input {...props} ref={ref} />;
});
MyInput.displayName = 'MyInput';

export default function ForwardRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
