import { Input } from '@nextui-org/input'

function Form() {
  return (
    <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
      <Input type="email" label="Email" />
    </div>
  )
}

export default Form
