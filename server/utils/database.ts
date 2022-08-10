import { camelCase, mapKeys, snakeCase } from 'lodash'
import { AddCourseInput, AddGolferInput } from '../../types.generated'

type InputType = AddCourseInput | AddGolferInput

export const mapKeysToDatabaseFormat = (payload: InputType) => {
  return mapKeys(payload, (value, key) => snakeCase(key))
}

export const mapKeysToClientFormat = (payload: Record<string, string>) => {
  return mapKeys(payload, (value, key) => camelCase(key))
}
