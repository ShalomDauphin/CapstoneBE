const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//load env vars
dotenv.config({ path: './.env' });
// load models

const Post = require('./models/Post');
const User = require('./models/User');
const Profile = require('./models/Profile');
//connect db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// read json files

const posts = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/posts.json`, 'utf-8')
);

const profiles = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/profiles.json`, 'utf-8')
);

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);
// Import into db

const importData = async () => {
  try {
    await Post.create(posts);
    await Profile.create(profiles);
    await User.create(users);
    console.log('Data Imported...'.green.inverse);
    process.exit(1);
  } catch (err) {
    console.error(err);
  }
};

// delete data
const deleteData = async () => {
  try {
    await Post.deleteMany();
    await Profile.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed ...'.red.inverse);
    process.exit(1);
  } catch (err) {
    console.error(err);
  }
};
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
