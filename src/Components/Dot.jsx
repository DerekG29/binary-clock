function Dot(props) {
  const { on } = props;

  const c = on ? 'visible' : 'hidden'; 

  return (
      <div className={`dot ${c}`}></div>
  )
}

export default Dot;