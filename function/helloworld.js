'use strict';

module.exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello world, the current time is ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}.`,
    }),
  };

  return response;
};
