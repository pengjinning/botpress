import { exportZodSchemas } from '@bpinternal/opapi'
import _ from 'lodash'
import { chatApi } from './api'
import { createOperations } from './operations'
import { signalSchemas } from './signals'

export { messagePayloadSchema } from './models/message'

const _api = chatApi()
const _operations = createOperations(_api)

for (const op of _.values(_operations)) {
  _api.addOperation(op)
}

export const api = {
  ..._api,
  signals: {
    exportSchemas: exportZodSchemas(signalSchemas),
  },
}