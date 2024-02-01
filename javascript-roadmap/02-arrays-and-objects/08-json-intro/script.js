// Define a post object
const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert the post object to JSON string
const str = JSON.stringify(post);

// Log the id property of the post object
console.log(post.id);

// Parse the JSON string back to an object
const obj = JSON.parse(str);

// Log the id property of the parsed object
console.log(obj.id);

// Define an array of posts
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

// Convert the posts array to JSON string
const str2 = JSON.stringify(posts);

// Log the JSON string of the posts array
console.log(str2);
