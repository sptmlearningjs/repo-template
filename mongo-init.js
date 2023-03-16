db.createUser(
  {
    user: 'booksuser',
    pwd: 'bookspassword',
    roles: [
      {
        role: 'dbOwner',
        db: 'books',
      },
    ],
  },
);
