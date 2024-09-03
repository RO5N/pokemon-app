interface StatChipProps {
  title:
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special-attack'
    | 'special-defense'
    | 'speed';
  value: string;
}

export default function StatChip({ title, value }: StatChipProps) {
  const backgroundPicker = () => {
    switch (title) {
      case 'hp':
        return '#9EE865';
      case 'attack':
        return '#F5DE69';
      case 'defense':
        return '#F09A65';
      case 'special-attack':
        return '#66D8F6';
      case 'special-defense':
        return '#899EEA';
      case 'speed':
        return '#E46CCA';
      default:
        return '#888888';
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg m-0.5 h-16 w-16`}
      style={{backgroundColor: backgroundPicker()}}
    >
      <p>{value}</p>
      <p className='text-xs'>{`${
        title === 'special-attack'
          ? 'S.Attack'
          : title === 'special-defense'
          ? 'S.Defense'
          : title
      }`}</p>
    </div>
  );
}
