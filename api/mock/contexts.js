const records = [
    {
        id: 'mock@localhost.com',
        ctx_name: 'mock' 

    }
];

const findByContextName = (ctx_name) => {
  console.log(ctx_name)
  for (let i = 0, len = records.length; i < len; i++) {
    let record = records[i];
    if (record.ctx_name === ctxName) {
      return record;
    }
  }

  return null;
}

const listAll = () => {
  return records;
}

module.exports = {
    findByContextName,
    listAll
}