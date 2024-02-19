import { useRef } from 'react';

export default function CatFriends() {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    if (listRef.current) {
      const imgNode = listRef.current.querySelectorAll('li > img')[index];
      imgNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jerry</button>
      </nav>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <h1>Blanck</h1>
      <div style={{ display: 'grid' }}>
        <ul ref={listRef}>
          <li>
            <img src='https://placekitten.com/g/200/200' alt='Tom' />
          </li>
          <li>
            <img src='https://placekitten.com/g/300/200' alt='Maru' />
          </li>
          <li>
            <img src='https://placekitten.com/g/250/200' alt='Jellylorum' />
          </li>
        </ul>
      </div>
    </>
  );
}
