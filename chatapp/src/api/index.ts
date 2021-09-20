import axios from 'axios'

import commands  from './commands'

const API_REQUEST = async (cmd: any, inParams: any) => {
  // @ts-ignore
  const command = commands[cmd]

  if (command) {
    if (!inParams) return {}

    const url = command.url
    const method = command.method

    return new Promise((resolve, reject) => {
      axios({
        url,
        method,
        data: inParams,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (response) => {
          resolve([false, response.data])
        })
        .catch(e => {
          resolve([e, false])
        })
    })
  }
}

export default API_REQUEST