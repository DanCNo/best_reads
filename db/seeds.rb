# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bookshelf.destroy_all
User.destroy_all

user1 = User.create({username: "PageTurnerismyrealname", email: "test1@gmail.com", password: "bestreads"})
bookshelf1 = Bookshelf.create({title: "Read", default: true, user_id: user1.id})
bookshelf2 = Bookshelf.create({title: "Currently Reading", default: true, user_id: user1.id})
bookshelf3 = Bookshelf.create({title: "Want to Read", default: true, user_id: user1.id})
bookshelf4 = Bookshelf.create({title: "Custom #1", default: false, user_id: user1.id})
user2 = User.create({username: "BookCoverJudge", email: "test2@gmail.com", password: "bestreads"})
bookshelf5 = Bookshelf.create({title: "Read", default: true, user_id: user2.id})
bookshelf6 = Bookshelf.create({title: "Currently Reading", default: true, user_id: user2.id})
bookshelf7 = Bookshelf.create({title: "Want to Read", default: true, user_id: user2.id})
user3 = User.create({username: "IReadUpsideDown", email: "test3@gmail.com", password: "bestreads"})
bookshelf8 = Bookshelf.create({title: "Read", default: true, user_id: user3.id})
bookshelf9 = Bookshelf.create({title: "Currently Reading", default: true, user_id: user3.id})
bookshelf10 = Bookshelf.create({title: "Want to Read", default: true, user_id: user3.id})


ActiveRecord::Base.transaction do
  Book.destroy_all

  books = [
    {
      'title' => 'A Prayer for Owen Meany',
      'description' => 'The tragic tale of Owen Meany.',
      'author' => 'John Irving',
      'pages' => 637,
      'year_published' => 1990,
      'isbn_13' => 9780552135399
    },
    {
      'title' => 'Leviathan Wakes',
      'description' => 'A space opera mystery.',
      'author' => 'James S.A. Corey',
      'pages' => 582,
      'year_published' => 2011,
        'isbn_13' => 9780316129084
    },
    {
      'title' => 'Guns, Germs, and Steel: The Fates of Human Societies',
      'description' => 'A global account of the rise of civilization that is also a stunning refutation of ideas of human development based on race.',
      'author' => 'Jared Diamond',
      'pages' => 518,
      'year_published' => 2005,
      'isbn_13' => 9780393061314
    },
    {
      'title' => 'The Woman in White',
      'description' => 'One of the earliest detective fictions.',
      'author' => 'Wilkie Collins',
      'pages' => 565,
      'year_published' => 1860,
      'isbn_13' => 9780679405634
    },
    {
      'title' => 'Me Talk Pretty One Day',
      'description' => 'Collection of essays by David Sedaris.',
      'author' => 'David Sedaris',
      'pages' => 272,
      'year_published' => 2000,
      'isbn_13' => 9780316777728
    },
    {
      'title' => 'The Princess Bride',
      'description' => 'A timeless tale that pits country against country, good against evil, love against hate.',
      'author' => 'William Goldman',
      'pages' => 398,
      'year_published' => 1999,
      'isbn_13' => 9780808586999
    },
    {
      'title' => 'Calvin and Hobbes',
      'description' => 'A collection of comic strips following the adventures of Calvin and Hobbes.',
      'author' => 'Bill Watterson',
      'pages' => 127,
      'year_published' => 1999,
      'isbn_13' => 9780833554536
    },
    {
      'title' => 'Kitchen',
      'description' => 'Loss, grief and the power of the kitchen.',
      'author' => 'Banana Yoshimoto',
      'pages' => 152,
      'year_published' => 1993,
      'isbn_13' => 9780671880187
    },
    {
      'title' => 'The Man Who Mistook His Wife for a Hat',
      'description' => 'Case histories of patients lost in the bizarre world of neurological disorders.',
      'author' => 'Oliver Sacks',
      'pages' => 243,
      'year_published' => 1998,
      'isbn_13' => 9780684853949
    },
    {
      'title' => 'The French chef cookbook',
      'description' => 'French recipes by Julia Child.',
      'author' => 'Julia Child',
      'pages' => 467,
      'year_published' => 1976,
      'isbn_13' => 9780375710063
    },
    {
      'title' => 'Cat\'s Cradle',
      'description' => 'Vonnegut\'s satirical commentary on modern man and his madness through an apocalyptic tale of the planet\'s utimate fate.',
      'author' => 'Kurt Vonnegut',
      'pages' => 224,
      'year_published' => 2010,
      'isbn_13' => 9780575081956
    },
    {
      'title' => 'The Hitchhiker\'s Guide to the Galaxy',
      'description' => 'Arthur Dent\'s hitchhiking adventure across the galaxy.',
      'author' => 'Douglas Adams',
      'pages' => 815,
      'year_published' => 1996,
      'isbn_13' => 9780517149256
    },
    {
      'title' => 'Frankenstein',
      'description' => 'Victor Frankenstein creates a monster.',
      'author' => 'Mary Shelley',
      'pages' => 212,
      'year_published' => 2000,
      'isbn_13' => 9780451527714
    },
    {
      'title' => 'Cosmos',
      'description' => 'Cosmos retraces the fourteen billion years of cosmic evolution that have transformed matter into consciousness.',
      'author' => 'Carl Sagan',
      'pages' => 432,
      'year_published' => 2013,
      'isbn_13' => 9780345539434
    }
  ]

  books = books.map do |book|
    Book.create!(book)
  end
  
end