import { Radio, RadioGroup } from '@nextui-org/react'

const RadioButtons = () => {
  return (
    <RadioGroup orientation="horizontal">
      <Radio color="default" className="text-white" value="buenos-aires">
        Buenos Aires
      </Radio>
      <Radio className="text-white" value="sydney">
        Sydney
      </Radio>
      <Radio className="text-white" value="san-francisco">
        San Francisco
      </Radio>
      <Radio className="text-white" value="london">
        London
      </Radio>
      <Radio className="text-white" value="tokyo">
        Tokyo
      </Radio>
    </RadioGroup>
  )
}

export default RadioButtons
