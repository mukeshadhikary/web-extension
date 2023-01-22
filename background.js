const Client = require('ftp');
const c = new Client();
c.on('ready', function() {
  c.put('local-file.txt', 'remote-file.txt', function(err) {
    if (err) throw err;
    c.end();
  });
});
c.connect({
  host: 'ftp.example.com',
  user: 'username',
  password: 'password'
});
