interface Props {
  total: number;
  limit: number;
  offset: number;
  next: () => void;
  prev: () => void;
}

export default function Pagination({
  total,
  limit,
  offset,
  next,
  prev,
}: Props) {
  return (
    <div className='flex flex-row items-center'>
      <span className='text-sm text-gray-700'>
        Showing{' '}
        <span className='font-semibold text-gray-900'>{offset + 1}</span> to{' '}
        <span className='font-semibold text-gray-900'>{total < limit ? total : (offset + limit)}</span> of{' '}
        <span className='font-semibold text-gray-900'>{total}</span> Entries
      </span>
      <div className='inline-flex ml-4'>
        <button
          className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-emerald-800 rounded-s hover:bg-emerald-900'
          onClick={prev}
          disabled={offset === 0 ? true : false}
        >
          Prev
        </button>
        <button
          className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-emerald-800 border-0 border-s border-gray-700 rounded-e hover:bg-emerald-900'
          onClick={next}
          disabled={total <= (offset+limit) ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}
