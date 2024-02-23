import { useRef } from 'react';
import './App.css';
// import CatFriends from './components/CatFriends';
// import Form from './components/Form';
// import ForwardRef from './components/ForwardRef';
import VideoForward from './components/VideoForward';
// import VideoPlayer from './components/VideoPlayer';
import ImperativeHandlerForm from './components/imperativeHandler/ImperativeHandlerForm';
import MyApp from './components/context/MyApp';

function App() {
  // const [count, setCount] = useState(0);
  const videRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <ImperativeHandlerForm />

      <MyApp />

      {/* <div>
        <button onClick={() => videRef.current?.play()}>Play</button>
        <button onClick={() => videRef.current?.pause()}>Pause</button>
        <div>
          <VideoForward
            ref={videRef}
            src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
            type='video/mp4'
            width='250'
          />
        </div>
      </div> */}

      {/* <ForwardRef /> */}
      {/* <VideoPlayer /> */}
      {/* <Form /> */}
      {/* <CatFriends /> */}
    </>
  );
}

export default App;
