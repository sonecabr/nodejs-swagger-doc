const records = [
    {
        id: 1, 
        username: 'myuser', 
        token: 'nMUbjkA8KcgAjAqmAFeSsarn', 
        displayName: 'MockUser', 
        emails: [ { value: 'mock@localhost.com' } ],
    }
];

const findOne = (token, next) => {
  process.nextTick(() => {
    for (let i = 0, len = records.length; i < len; i++) {
      let record = records[i];
      if (record.token === token) {
        return next(null, record);
      }
    }
    return next(null, null);
  });
}

const getSettings = (user) => {
  user = 'mockdb';
  for (let i = 0, len = records.length; i < len; i++) {
    let record = records[i];
    if (record.username === user) {
      return record;
    }
  }
  return null;
}

module.exports = {
    findOne,
    getSettings
}
