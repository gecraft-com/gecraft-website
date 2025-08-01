import { DockerIcon } from '../icons/DockerIcon'
import { GraphQLIcon } from '../icons/GraphQLIcon'
import { MySQLIcon } from '../icons/MySQLIcon'
import { NodeJsIcon } from '../icons/NodeJsIcon'
import { PostgreSQLIcon } from '../icons/PostgreSQLIcon'
import { RestApiIcon } from '../icons/RestApiIcon'
import { SQLiteIcon } from '../icons/SQLiteIcon'
import { SwaggerIcon } from '../icons/SwaggerIcon'
import { TechStackItem } from './TechStackItem'

export const Backend = () => {
  return (
    <li className="bg-primary-100 rounded-3xl px-4 py-3.5 sm:p-4 xl:px-10 xl:py-9">
      <h2 className="text-lg font-medium sm:text-xl xl:text-3xl">Backend</h2>
      <ul className="mt-4 grid grid-cols-3 gap-1.5 min-[434px]:grid-cols-4 min-[522px]:grid-cols-5 min-[755px]:grid-cols-6 min-[1100px]:grid-cols-7 min-[1440px]:grid-cols-8 min-[1600px]:grid-cols-9 min-[1760px]:grid-cols-10 min-[1923px]:grid-cols-11 sm:gap-3 xl:gap-4">
        <TechStackItem title="Node.js">
          <NodeJsIcon />
        </TechStackItem>

        <TechStackItem title="PostgreSQL">
          <PostgreSQLIcon />
        </TechStackItem>

        <TechStackItem title="MySQL">
          <MySQLIcon />
        </TechStackItem>

        <TechStackItem title="SQLite">
          <SQLiteIcon />
        </TechStackItem>

        <TechStackItem title="GraphQL">
          <GraphQLIcon />
        </TechStackItem>

        <TechStackItem title="REST API">
          <RestApiIcon />
        </TechStackItem>

        <TechStackItem title="Swagger">
          <SwaggerIcon />
        </TechStackItem>

        <TechStackItem title="Docker">
          <DockerIcon />
        </TechStackItem>
      </ul>
    </li>
  )
}
