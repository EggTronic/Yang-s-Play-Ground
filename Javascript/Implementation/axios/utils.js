// parse请求头
export function parseResponseHeaders(headers) {
  const parsed = {};
  if (!headers) return parsed;
  headers.split("\r\n").forEach(line => {
    if (!line) return;
    const [key, value] = line.split(":");
    parsed[key.trim()] = value.trim();
  })

  return parsed;
}

// get 请求params处理
export function handleURL(url, params) {
  
}