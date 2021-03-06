'use strict';

// Assign the weight of a message based on the number of unread responses

module.exports = function() {

function computeMessagesWeight(messages) {

  messages.forEach(function(message) {
    message.weight = 0;

    if (message.responses && message.responses.length > 0) {
      message.responses.forEach(function(response) {
        if (!response.read) {
          message.weight++;
        }
      });
    }
  });
  return messages;
}
  return {
    computeMessagesWeight: computeMessagesWeight
  };
};
