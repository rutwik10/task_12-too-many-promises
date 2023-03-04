function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastActivityTime = new Date();
      console.log(`User's last activity time: ${lastActivityTime}`);
      resolve(lastActivityTime);
    }, 1000);
  });
}


const posts = [];

function createPost(post) {
  return new Promise((resolve, reject) => {
    posts.push(post);
    resolve(post);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    if(posts.length > 0){
        const lastPost = posts.pop();
    resolve(lastPost);
    } else {
        reject("ERROR")
    }
  });
}


Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
