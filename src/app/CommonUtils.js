import { message } from 'antd';
import _ from 'lodash'

export function handleError(e) {
  let msgError = '';

  // error before send request
  if(e.response === undefined) {
    msgError = e.message;
  }
  if(e.response !== undefined) {
    console.error(e.response.data);
    let status = e.response.status;
    if(status !== 500) {
      msgError = e.response.statusText;
    }
    if(status === 500) {
      msgError = _.isString(e.response.data) ? e.response.data : e.response.data.message;
    }
  }
  message.open({
    type: 'error',
    content: msgError,
    duration: 2,
  });
  throw new Error(msgError);
}

export function addKeyToList(data) {
  if(_.isArray(data) === false) {
    return data;
  }
  let result = _(data)
    .map((s, index) => {
      s.key = index;
      return s;
    })
    .value();
  return result;
}