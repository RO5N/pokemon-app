import Image from 'next/image';

const Appbar = () => {
  return (
    <div className='flex justify-center items-center w-full h-20 px-4 text-white bg-emerald-600 fixed nav z-50'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>
          <a
            className='link-underline link-underline-black'
            href='/'
            rel='noreferrer'
          >
            <Image
              src={'/Pokemon-Logo.png'}
              alt='image description'
              style={{ height: 90, width: 'auto' }}
              width={500}
              height={500}
            ></Image>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Appbar;
