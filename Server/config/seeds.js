const db = require('./connection');
const { SaveTables, savTabls } = require('../models');

db.once('open', async () => {
  await savTabls.deleteMany();

  const savTabls = await savTabls.insertMany([
    { name: 'Clickables' },
    { name: 'Stats' },
    { name: 'User' }
  ]);

  console.log('savTabls data');

  await SaveTables.deleteMany();

  const SaveTables = await SaveTables.insertMany([
    {
      name: 'savePerClick',
      description:
        'How many times clicked.',
      
      savTabls: savTablses[0]._id
    },
    {
      name: 'savePerSec',
      description:
        'How many times clicked Per Sec',
      
      savTabls: savTablses[0]._id
    },
    {
      name: 'saveUnit',
      savTabls: savTablses[1]._id,
      description:
        'How many times saved unit.'
    },
    {
      name: 'saveUpgrade',
      savTabls: savTablses[1]._id,
      description:
        'How many times saved up graded.'
    },
    
    
    
    
  ]);

  console.log('SaveTables data');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        SaveTables: [SaveTables[0]._id, SaveTables[0]._id, SaveTables[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
