const axios = require('axios')
const chalk = require('chalk')

function colorCode (code) {
  return (
    (code == 200) ? chalk.green : (
      (code < 400) ? chalk.yellow : chalk.red
    )
  )(`${code}`)
}

axios.post('http://couch:5984/meh', {
  validateStatus: () => true
})
.then(res => {
  console.log(`[${chalk.blue('res:keys')}]`, Object.keys(res).join(', '))
  console.log(`[${chalk.blue('headers')}]`, JSON.stringify(res.headers, null, 2))
  console.log(`[${chalk.blue('data')}]`, JSON.stringify(res.data, null, 2))
  console.log(`[${colorCode(res.status)}] Request completed. Data above.`)
})
.catch(error => {
  console.error(chalk.red("Error pulling metadata:"), error)
  console.error(chalk.red("End of error output. More above"))
  process.exit(1)
})

