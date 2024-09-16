import Dot from "./Dot";

function DotStack(props) {
  const { hours } = props;

  const bit_4 = true;
  const bit_3 = false;
  const bit_2 = true;
  const bit_1 = false;

  return (
    <>
      <div className="dot-stack">
        {!hours && <Dot on={bit_4}/>}
        {!hours && <Dot on={bit_3}/>}
        <Dot on={bit_2}/>
        <Dot on={bit_1}/>
      </div>
    </>
  )
}

export default DotStack;