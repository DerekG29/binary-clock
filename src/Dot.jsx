function Dot(props) {
  const on = props.on ? 'dot-on' : 'dot-off';

  return (
      <div className={on}></div>
  )
}

export default Dot;