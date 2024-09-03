import Image from 'next/image';

interface props {
  name: string | undefined;
  image: string;
  id: number | undefined;
}

export default function Card({ name, image, id }: props) {
  return (
    <div>
      <a
        href={`/${id}`}
        className='flex items-center flex-col block max-w-sm p-6 bg-amber-400 rounded-lg shadow hover:bg-amber-300'
      >
        <div className='flex flex-row justify-between w-full'>
          <h5 className='mb-2 text-2xl font-bold capitalize'>{name}</h5>
          <h5 className='mb-2 text-2xl font-bold capitalize'>{`#${id}`}</h5>
        </div>
        <Image
          className={'h-auto max-w-full'}
          src={image}
          alt='image description'
          style={{ background: '#dedede' }}
          width={500}
          height={500}
        ></Image>
      </a>
    </div>
  );
}
