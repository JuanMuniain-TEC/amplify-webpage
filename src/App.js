const { handler } = require('../lambdas/lambda');

exports.main = async (event, context) => {
  try {
    const response = await handler(event, context);
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
