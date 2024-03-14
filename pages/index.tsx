import styled from 'styled-components';
import Image from 'next/image';
import libraryImage from '../assets/open-book-in-library.jpeg';

const Wrapper = styled.div``;

export default function Home() {
  return (
    <Wrapper>
      <Image
        src={libraryImage}
        alt="open-book-in-a-library"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </Wrapper>
  );
}
