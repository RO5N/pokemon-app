interface Props {
    text: string
}

export default function TypeChip({text}: Props) {
    return (
      <span
        style={{
          backgroundColor: `#5A5A5A`,
          padding: `2px 2px 2px 4px`,
          margin: '2px',
          borderRadius: '15px',
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          alignItems: 'center',
          height: '35px',
        }}
      >
        <span
          style={{
            margin: '0 5px 0 10px',
            display: 'inline-block',
            minWidth: '50px',
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#FFF' }} className='capitalize'>
            {text}
          </span>
        </span>
      </span>
    );
  }
  