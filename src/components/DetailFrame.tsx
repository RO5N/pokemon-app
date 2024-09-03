interface props {
  title: string;
  children: JSX.Element;
}

export default function DetailChip({ children, title }: props) {
  return (
    <div>
      <div
        className='flex flex-col block max-w-sm p-6 bg-amber-400 rounded-lg shadow bg-opacity-25'
      >
        <h5 className='mb-2 text-2xl font-bold text-transform: capitalize'>
            {title}
          </h5>
        <div>{children}</div>
      </div>
    </div>
  );
}
