function mockApi() {
  const data = JSON.stringify([post1, post2, post3]);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000)
  })
}

const post1 = {
  id: '1',
  title: 'Sample Post Title',
  content: 'This is a sample post content used for mocking API responses.',
  date: '2024-06-10',
  imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imageDescription: 'A streetside view of a house',
  comments: [],
}

const post2 = {
  id: '2',
  title: 'Sample Title of Post 2',
  content: 'This is another sample post(2) content used for mocking API responses.',
  date: '2024-06-10',
  imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imageDescription: 'A streetside view of a house',
  comments: [],
}

const post3 = {
  id: '3',
  title: 'Sample Title of Post 3',
  content: 'This is another sample post(3) content used for mocking API responses.',
  date: '2024-06-10',
  imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imageDescription: 'A streetside view of a house',
  comments: [],
}

export default mockApi;
