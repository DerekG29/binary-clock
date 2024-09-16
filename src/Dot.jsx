function Dot(props) {
  const { on } = props;

  const c = on ? 'dot-on' : 'dot-off'; 

  return (
      <div className={c}></div>
  )
}

export default Dot;