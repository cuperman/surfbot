const { getReport } = require('../lib/surfline');
const { buildMessage } = require('../lib/slack');

// POST /surf
// GET /surf
exports.show = (event, context, callback) => {
  getReport().then(reports => {
    const formattedReports = buildMessage(reports);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(formattedReports)
    });
  });
};
