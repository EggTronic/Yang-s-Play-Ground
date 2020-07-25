import { parseResponseHeaders } from './utils';

export default function xhr(config) {
  return new Promise((res, res) => {
    const { url, method = "get", data, headers, responseType } = config;
    const request = new XMLHttpRequest();

    // 设置返回类型
    // 注意这里的 xhr.responseType 判断，如果用户在调用axios传递了{ responseType：'json' }，
    // 那么xhr.response就是一个对象，如果没有传responseType，xhr.response就是一个字符串。
    if (responseType) {
      request.responseType = responseType;
    }

    // 初始化请求
    request.open(method, url, true);

    // 设置请求头
    Object.keys(headers).forEach(headerName => {
      request.setRequestHeader(headerName, headers[headerName]);
    });

    // 发送请求
    request.send(data);

    // 监听请求状态变更
    request.onreadystatechange = function () {
      /**
       * state code:
       *   0 - UNSENT 再open()调用之前
       *   1 - OPENED 再open()调用之后
       *   2 - HEADERS_RECEIVED 再send()调用之后并且收到请求头
       *   3 - LOADING 下载资源中， responseText包含部分信息
       *   4 - DONE 请求完成
       */

      // 过滤所有未完成请求
      if (request.readyState !== 4) return;

      // 获取并解析请求头
      const responseHeaders = parseResponseHeaders(
        request.getResponseHeaders()
      );

      // 获取数据
      let responseData =
        request.responseType === "text"
          ? request.responseText
          : request.response

      // 返回
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }

      res(response);
    }

  });
}
