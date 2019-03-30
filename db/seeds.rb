# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create({username: "PageTurnerismyrealname", email: "test1@gmail.com", password: "bestreads"})
user2 = User.create({username: "BookCoverJudge", email: "test2@gmail.com", password: "bestreads"})
user3 = User.create({username: "IReadUpsideDown", email: "test3@gmail.com", password: "bestreads"})


ActiveRecord::Base.transaction do
  Book.destroy_all

  books = [
    {
      'title' => 'The Count of Monte Cristo',
      'description' => 'A man is wrongfully imprisoned, escapes from jail, acquires a fortune and takes revenge.',
      'author' => 'Alexandre Dumas',
      'pages' => 1276,
      'year_published' => 1844,
    },
    {
      'title' => 'Leviathan Wakes',
      'description' => 'A space opera mystery.',
      'author' => 'James S.A. Corey',
      'pages' => 561,
      'year_published' => 2011,
    },
    {
      'title' => 'Guns, Germs, and Steel: The Fates of Human Societies',
      'description' => 'A global account of the rise of civilization that is also a stunning refutation of ideas of human development based on race.',
      'author' => 'Jared Diamond',
      'pages' => 425,
      'year_published' => 1997,
    },
    {
      'title' => 'The Woman in White',
      'description' => 'One of the earliest detective fictions.',
      'author' => 'Wilkie Collins',
      'pages' => 565,
      'year_published' => 1860,
    },
    {
      'title' => 'Me Talk Pretty One Day',
      'description' => 'Collection of essays by David Sedaris.',
      'author' => 'David Sedaris',
      'pages' => 272,
      'year_published' => 2001,
    },
    {
      'title' => 'A Prayer for Owen Meany',
      'description' => 'The tragic tale of Owen Meany.',
      'author' => 'John Irving',
      'pages' => 637,
      'year_published' => 1990,
    },
    {
      'title' => 'The Princess Bride',
      'description' => 'A timeless tale that pits country against country, good against evil, love against hate.',
      'author' => 'William Goldman',
      'pages' => 283,
      'year_published' => 1973,
    },
    {
      'title' => 'Calvin and Hobbes',
      'description' => 'A collection of comic strips following the adventures of Calvin and Hobbes.',
      'author' => 'Bill Watterson',
      'pages' => 127,
      'year_published' => 1987,
    },
    {
      'title' => 'Kitchen',
      'description' => 'Loss, grief and the power of the kitchen.',
      'author' => 'Banana Yoshimoto',
      'pages' => 226,
      'year_published' => 1988,
    },
    {
      'title' => 'The Man Who Mistook His Wife for a Hat',
      'description' => 'Case histories of patients lost in the bizarre world of neurological disorders.',
      'author' => 'Oliver Sacks',
      'pages' => 243,
      'year_published' => 1998,
    },
    {
      'title' => 'The French chef cookbook',
      'description' => 'French recipes by Julia Child.',
      'author' => 'Julia Child',
      'pages' => 467,
      'year_published' => 1976,
    }
  ]

  books = books.map do |book|
    Book.create!(book)
  end
  
end