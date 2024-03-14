import Image from 'next/image';
import libraryImage from '../assets/open-book-in-library.jpeg';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>;
      <Image
        src={libraryImage}
        alt="open-book-in-a-library"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </>
  );
}
