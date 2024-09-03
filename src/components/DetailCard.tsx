import Carousel from '@components/Carousel';

interface props {
  name: string | undefined;
  images: string[];
  id: number | undefined;
}

export default function Image({ name, images, id }: props) {
  return (
    <div>
      <div className='flex items-center flex-col block max-w-sm p-6 bg-amber-400 rounded-lg shadow hover:bg-amber-300'>
        <div className='w-full flex flex-row justify-between'>
          <h5 className='mb-2 text-2xl font-bold text-transform: capitalize'>
            {name}
          </h5>
          <h5 className='mb-2 text-2xl font-bold text-transform: capitalize'>
            {'#' + id}
          </h5>
        </div>
        <Carousel slides={images} />
      </div>
    </div>
  );
}
