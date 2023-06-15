exports.handler = async (event, context) => {
    try {

      const name = event.name;

      const message = `Hello, ${name}! This is a Lambda function.`;

      return {
        statusCode: 200,
        body: JSON.stringify({ message }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  };