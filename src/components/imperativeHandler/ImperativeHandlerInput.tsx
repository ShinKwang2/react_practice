import { Ref, forwardRef, useImperativeHandle, useRef } from 'react';

type Props = {
  placeholder: string;
};
export type InputHandler = {
  focus: () => void;
  scrollIntoView: () => void;
};

const ImperativeHandleInput = forwardRef(function ImperativeHandleInput(
  props: Props,
  ref: Ref<InputHandler>
) {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputHandler: InputHandler = {
    focus: () => inputRef.current?.focus(),
    scrollIntoView: () => inputRef.current?.scrollIntoView(),
  };

  useImperativeHandle(ref, () => inputHandler);

  return <input {...props} ref={inputRef} />;
});

export default ImperativeHandleInput;
