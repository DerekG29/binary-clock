import Dot from "./Dot";

const obj = {
  '0': [0, 0, 0, 0],
  '1': [0, 0, 0, 1],
  '2': [0, 0, 1, 0],
  '3': [0, 0, 1, 1],
  '4': [0, 1, 0, 0],
  '5': [0, 1, 0, 1],
  '6': [0, 1, 1, 0],
  '7': [0, 1, 1, 1],
  '8': [1, 0, 0, 0],
  '9': [1, 0, 0, 1]
}

function DotStack(props) {
  const { digit } = props;

  const [bit_4, bit_3, bit_2, bit_1] = obj[digit];

  return (
    <>
      <div className="dot-stack">
        <Dot on={bit_4}/>
        <Dot on={bit_3}/>
        <Dot on={bit_2}/>
        <Dot on={bit_1}/>
        <div className='digit'>{digit}</div>
      </div>
    </>
  )
}

export default DotStack;