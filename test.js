var stringRemove = require('./');
var test = require('tape');

test('string remove', function(t) {
  t.plan(5);
  t.strictEqual(stringRemove('examle???string.@@!!', ['?','@']), 'examlestring.!!');
  t.strictEqual(stringRemove('examle&%?string.@!!', ['?','@','&', '!', '.', '%']), 'examlestring');
  t.strictEqual(stringRemove('cht8687@gmail.com', ['.','@']), 'cht8687gmailcom');
  t.strictEqual(stringRemove('% % % t e s t $ $ $ ', ['%',' ', '$']), 'test');
  t.strictEqual(stringRemove('% % %t e s t$ $ $ ', ['%t',' ', '%', '$', 't']), 'es');
});
