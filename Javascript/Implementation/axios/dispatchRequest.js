import handleURL from "./utils"

function processConfig(config) {
  const { url } = config
  config.url = handleURL(url, params)
}

export default function dispatchRequest(config) {
  processConfig(config)
  return xhr(config)
}