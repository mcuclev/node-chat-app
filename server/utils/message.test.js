var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct mesObj', () => { //synchronous test, so no done()
    var from = 'Jen';
    var text = 'message lalala';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => { //synchronous
    var from = 'Lalaland';
    var longitude = 2;
    var latitude = 2;
    var url = `https://www.google.com/maps?q=2,2`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
