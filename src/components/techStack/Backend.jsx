import { ICONS_STYLES, ICONS_STYLES_STROKE } from '../../constants/Styles'
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
    <li className="bg-black-00 rounded-3xl px-4 py-3.5 md:p-4 xl:px-10 xl:py-9">
      <h2 className="font-[Faberge] text-lg md:text-xl xl:text-3xl">Backend</h2>
      <ul className="mt-4 grid grid-cols-3 gap-1.5 min-[434px]:grid-cols-4 min-[522px]:grid-cols-5 min-[755px]:grid-cols-6 min-[1100px]:grid-cols-7 min-[1440px]:grid-cols-8 min-[1600px]:grid-cols-9 min-[1760px]:grid-cols-10 min-[1923px]:grid-cols-11 md:gap-3 xl:gap-4">
        <TechStackItem title="Node.js">
          <NodeJsIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="PostgreSQL">
          <PostgreSQLIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="MySQL">
          <MySQLIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="SQLite">
          <SQLiteIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="GraphQL">
          <GraphQLIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="REST API">
          <RestApiIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="Swagger">
          <SwaggerIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="Docker">
          <DockerIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>
      </ul>
    </li>
  )
}
