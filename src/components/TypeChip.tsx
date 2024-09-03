import Image from 'next/image'

interface Props {
  type:
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | 'stellar'
    | 'unknown';
}

export default function TypeChip({ type }: Props) {
  let selectedType = SelectType(type);
  return (
    <span
      style={{
        backgroundColor: `#5A5A5A`,
        padding: `2px 2px 2px 4px`,
        margin: '2px',
        borderRadius: '15px',
        display: 'inline-flex',
        whiteSpace: 'nowrap',
        backgroundImage: `linear-gradient(105deg,${selectedType.color} 30px,#5A5A5A 31px,#5A5A5A)`,
        alignItems: 'center',
        height: '35px',
      }}
    >
      <Image alt={`${type} icon.png`} src={selectedType.icon} width='20' height='20' />
      <span
        style={{
          margin: '0 5px 0 10px',
          display: 'inline-block',
          minWidth: '50px',
          textAlign: 'center',
        }}
      >
        <span style={{ color: '#FFF' }} className='capitalize'>
          {selectedType.name}
        </span>
      </span>
    </span>
  );
}

function SelectType(type: string) {
  let typeGroup = {
    name: '',
    icon: '',
    color: '',
  };

  switch (type) {
    case 'normal':
      typeGroup = {
        name: 'normal',
        icon: '/type/Normal_icon.png',
        color: '#9FA19F',
      };
      break;
    case 'fighting':
      typeGroup = {
        name: 'fighting',
        icon: '/type/Fighting_icon.png',
        color: '#FF8000',
      };
      break;
    case 'flying':
      typeGroup = {
        name: 'flying',
        icon: '/type/Flying_icon.png',
        color: '#81B9EF',
      };
      break;
    case 'poison':
      typeGroup = {
        name: 'poison',
        icon: '/type/Poison_icon.png',
        color: '#9141CB',
      };
      break;
    case 'ground':
      typeGroup = {
        name: 'ground',
        icon: '/type/Ground_icon.png',
        color: '#915121',
      };
      break;
    case 'rock':
      typeGroup = {
        name: 'rock',
        icon: '/type/Rock_icon.png',
        color: '#AFA981',
      };
      break;
    case 'bug':
      typeGroup = {
        name: 'bug',
        icon: '/type/Bug_icon.png',
        color: '#91A119',
      };
      break;
    case 'ghost':
      typeGroup = {
        name: 'ghost',
        icon: '/type/Ghost_icon.png',
        color: '#704170',
      };
      break;
    case 'steel':
      typeGroup = {
        name: 'steel',
        icon: '/type/Steel_icon.png',
        color: '#60A1B8',
      };
      break;
    case 'fire':
      typeGroup = {
        name: 'fire',
        icon: '/type/Fire_icon.png',
        color: '#E62829',
      };
      break;
    case 'water':
      typeGroup = {
        name: 'water',
        icon: '/type/Water_icon.png',
        color: '#2980EF',
      };
      break;
    case 'grass':
      typeGroup = {
        name: 'grass',
        icon: '/type/Grass_icon.png',
        color: '#3FA129',
      };
      break;
    case 'electric':
      typeGroup = {
        name: 'electric',
        icon: '/type/Electric_icon.png',
        color: '#FAC000',
      };
      break;
    case 'psychic':
      typeGroup = {
        name: 'psychic',
        icon: '/type/Psychic_icon.png',
        color: '#EF4179',
      };
      break;
    case 'ice':
      typeGroup = {
        name: 'ice',
        icon: '/type/Ice_icon.png',
        color: '#3DCEF3',
      };
      break;
    case 'dragon':
      typeGroup = {
        name: 'dragon',
        icon: '/type/Dragon_icon.png',
        color: '#5060E1',
      };
      break;
    case 'dark':
      typeGroup = {
        name: 'dark',
        icon: '/type/Dark_icon.png',
        color: '#624D4E',
      };
      break;
    case 'fairy':
      typeGroup = {
        name: 'fairy',
        icon: '/type/Fairy_icon.png',
        color: '#EF70EF',
      };
      break;
    case 'stellar':
      typeGroup = {
        name: 'stellar',
        icon: '/type/Stellar_icon.png',
        color: '#40B5A5',
      };
      break;
    case 'unknown':
      typeGroup = {
        name: 'unknown',
        icon: '/type/None.png',
        color: '#68A090',
      };
      break;
    default:
      typeGroup = {
        name: 'unknown',
        icon: '/type/None.png',
        color: '#68A090',
      };
  }

  return typeGroup;
}
