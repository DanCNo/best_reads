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
bookshelf8 = Bookshelf.create({title: "Custom #2", default: false, user_id: user2.id})
user3 = User.create({username: "IReadUpsideDown", email: "test3@gmail.com", password: "bestreads"})
bookshelf9 = Bookshelf.create({title: "Read", default: true, user_id: user3.id})
bookshelf10 = Bookshelf.create({title: "Currently Reading", default: true, user_id: user3.id})
bookshelf11 = Bookshelf.create({title: "Want to Read", default: true, user_id: user3.id})
bookshelf12 = Bookshelf.create({title: "Custom #3", default: false, user_id: user3.id})


ActiveRecord::Base.transaction do
  Book.destroy_all

  books = [
    {
      'title' => 'A Prayer for Owen Meany',
      'description' => 'The tragic tale of Owen Meany.',
      'author' => 'John Irving',
      'pages' => 637,
      'year_published' => 1990,
      'isbn_13' => 9780552135399,
      'cover_url' => 'https://covers.openlibrary.org/b/id/8344967-M.jpg'
    },
    {
      'title' => 'Leviathan Wakes',
      'description' => 'A space opera mystery.',
      'author' => 'James S.A. Corey',
      'pages' => 582,
      'year_published' => 2011,
      'isbn_13' => 9780316129084,
      'cover_url' => 'https://covers.openlibrary.org/b/id/8185009-M.jpg'
    },
    {
      'title' => 'Guns, Germs, and Steel: The Fates of Human Societies',
      'description' => 'A global account of the rise of civilization that is also a stunning refutation of ideas of human development based on race.',
      'author' => 'Jared Diamond',
      'pages' => 518,
      'year_published' => 2005,
      'isbn_13' => 9780393061314,
      'cover_url' => 'https://covers.openlibrary.org/b/id/248107-M.jpg'
    },
    {
      'title' => 'The Woman in White',
      'description' => 'One of the earliest detective fictions.',
      'author' => 'Wilkie Collins',
      'pages' => 565,
      'year_published' => 1860,
      'isbn_13' => 9780679405634,
      'cover_url' => 'https://covers.openlibrary.org/b/id/417326-M.jpg'
    },
    {
      'title' => 'Me Talk Pretty One Day',
      'description' => 'Collection of essays by David Sedaris.',
      'author' => 'David Sedaris',
      'pages' => 272,
      'year_published' => 2000,
      'isbn_13' => 9780316777728,
      'cover_url' => 'https://covers.openlibrary.org/b/id/190274-M.jpg'
    },
    {
      'title' => 'The Princess Bride',
      'description' => 'A timeless tale that pits country against country, good against evil, love against hate.',
      'author' => 'William Goldman',
      'pages' => 398,
      'year_published' => 1999,
      'isbn_13' => 9780808586999,
      'cover_url' => 'https://covers.openlibrary.org/b/id/592218-M.jpg'
    },
    {
      'title' => 'Calvin and Hobbes',
      'description' => 'A collection of comic strips following the adventures of Calvin and Hobbes.',
      'author' => 'Bill Watterson',
      'pages' => 127,
      'year_published' => 1999,
      'isbn_13' => 9780833554536,
      'cover_url' => 'https://covers.openlibrary.org/b/id/1578529-M.jpg'
    },
    {
      'title' => 'Kitchen',
      'description' => 'Loss, grief and the power of the kitchen.',
      'author' => 'Banana Yoshimoto',
      'pages' => 152,
      'year_published' => 1993,
      'isbn_13' => 9780671880187,
      'cover_url' => 'https://covers.openlibrary.org/b/id/6627473-M.jpg'
    },
    {
      'title' => 'The Man Who Mistook His Wife for a Hat',
      'description' => 'Case histories of patients lost in the bizarre world of neurological disorders.',
      'author' => 'Oliver Sacks',
      'pages' => 243,
      'year_published' => 1998,
      'isbn_13' => 9780684853949,
      'cover_url' => 'https://covers.openlibrary.org/b/id/8103158-M.jpg'
    },
    {
      'title' => 'The French chef cookbook',
      'description' => 'French recipes by Julia Child.',
      'author' => 'Julia Child',
      'pages' => 467,
      'year_published' => 1976,
      'isbn_13' => 9780375710063,
      'cover_url' => 'https://covers.openlibrary.org/b/id/229001-M.jpg'
    },
    {
      'title' => 'Cat\'s Cradle',
      'description' => 'Vonnegut\'s satirical commentary on modern man and his madness through an apocalyptic tale of the planet\'s utimate fate.',
      'author' => 'Kurt Vonnegut',
      'pages' => 224,
      'year_published' => 2010,
      'isbn_13' => 9780575081956,
      'cover_url' => 'https://covers.openlibrary.org/b/id/7997173-M.jpg'
    },
    {
      'title' => 'The Hitchhiker\'s Guide to the Galaxy',
      'description' => 'Arthur Dent\'s hitchhiking adventure across the galaxy.',
      'author' => 'Douglas Adams',
      'pages' => 815,
      'year_published' => 1996,
      'isbn_13' => 9780517149256,
      'cover_url' => 'https://covers.openlibrary.org/b/id/7892560-M.jpg'
    },
    {
      'title' => 'Frankenstein',
      'description' => 'Victor Frankenstein creates a monster.',
      'author' => 'Mary Shelley',
      'pages' => 212,
      'year_published' => 2000,
      'isbn_13' => 9780451527714,
      'cover_url' => 'https://covers.openlibrary.org/b/id/295676-M.jpg'
    },
    {
      'title' => 'Cosmos',
      'description' => 'Cosmos retraces the fourteen billion years of cosmic evolution that have transformed matter into consciousness.',
      'author' => 'Carl Sagan',
      'pages' => 432,
      'year_published' => 2013,
      'isbn_13' => 9780345539434,
      'cover_url' => 'https://covers.openlibrary.org/b/id/8290911-M.jpg'
    },
    {
      'title' => 'Mountains Beyond Mountains',
      'description' => 'The true story of Dr. Paul Farmer and his quest to cure the world.',
      'author' => 'Tracy Kidder',
      'pages' => 336,
      'year_published' => 2004,
      'isbn_13' => 9780812973013,
      'cover_url' => 'https://covers.openlibrary.org/b/id/606360-M.jpg'
    },
    {
      'title' => 'Snow Crash',
      'description' => 'Within the virtual Metaverse, Hiro uncovers a plot of biblical proportions to take over the world.',
      'author' => 'Neal Stephenson',
      'pages' => 440,
      'year_published' => 2000,
      'isbn_13' => 9780553380958,
      'cover_url' => 'https://covers.openlibrary.org/b/id/7885469-M.jpg'
    },
    {
      'title' => 'The Little Prince',
      'description' => 'The Little Prince tells his story to the pilot of how he came to Earth.',
      'author' => 'Antoine de Saint-Exupéry',
      'pages' => 168,
      'year_published' => 2005,
      'isbn_13' => 9780786275397,
      'cover_url' => 'https://covers.openlibrary.org/b/id/1472834-M.jpg'
    },
    {
      'title' => 'The Trumpet of the Swan',
      'description' => 'A mute Trumpeter swan named Louis learns to play the trumpet so that he can woo his love.',
      'author' => 'E. B. White',
      'pages' => 272,
      'year_published' => 2000,
      'isbn_13' => 9780060289362,
      'cover_url' => 'https://covers.openlibrary.org/b/id/25057-M.jpg'
    },
    {
      'title' => 'Where the Sidewalk Ends',
      'description' => 'A collection of poems by Shel Silverstein',
      'author' => 'Shel Silverstein',
      'pages' => 176,
      'year_published' => 2002,
      'isbn_13' => 9780060513030,
      'cover_url' => 'https://covers.openlibrary.org/b/id/26477-M.jpg'
    },
    {
      'title' => 'One Hundred Years of Solitude',
      'description' => 'The story of the Buendia family and the conflict between the desire for solitude and the need for love.',
      'author' => 'Gabriel Garcia Marquez',
      'pages' => 417,
      'year_published' => 2003,
      'isbn_13' => 9780060531041,
      'cover_url' => 'https://covers.openlibrary.org/b/id/27764-M.jpg'
    },
    {
      'title' => 'The Count of Monte Cristo',
      'description' => 'A young sailor is unjustly imprisoned, escapes and takes revenge on the men who ruined his life.',
      'author' => 'Alexandre Dumas',
      'pages' => 1276,
      'year_published' => 2003,
      'isbn_13' => 9780140449266,
      'cover_url' => 'https://covers.openlibrary.org/b/id/104354-M.jpg'
    },
    {
      'title' => 'And Then There Were None',
      'description' => 'Ten strangers are lured to an island where they are killed off one by one by someone amongst them.',
      'author' => 'Agatha Christie',
      'pages' => 264,
      'year_published' => 2004,
      'isbn_13' => 9780312330873,
      'cover_url' => 'https://covers.openlibrary.org/b/id/180228-M.jpg'
    },
    {
      'title' => 'Gardens of the Moon',
      'description' => 'Bled dry by interminable warfare and infighting, the vast, sprawling Malazan empire simmers with discontent.',
      'author' => 'Steven Erikson',
      'pages' => 496,
      'year_published' => 2009,
      'isbn_13' => 9780765322883,
      'cover_url' => 'https://covers.openlibrary.org/b/id/6304201-M.jpg'
    },
    {
      'title' => 'Never let me go',
      'description' => 'Kathy, a clone about to donate all her organs and die, reflects on her past.',
      'author' => 'Kazuo Ishiguro',
      'pages' => 288,
      'year_published' => 2006,
      'isbn_13' => 9781400078776,
      'cover_url' => 'https://covers.openlibrary.org/b/id/6425427-M.jpg'
    },
    {
      'title' => 'Jurassic Park',
      'description' => 'Dinosaurs roam the earth again at Jurassic Park but something goes wrong.',
      'author' => 'Michael Crichton',
      'pages' => 467,
      'year_published' => 2006,
      'isbn_13' => 9780307348135,
      'cover_url' => 'https://covers.openlibrary.org/b/id/168157-M.jpg'
    },
    {
      'title' => 'Silas Marner',
      'description' => 'Silas Marner finds redemption in raising an abandoned child.',
      'author' => 'George Eliot',
      'pages' => 186,
      'year_published' => 1981,
      'isbn_13' => 9780553212297,
      'cover_url' => 'https://covers.openlibrary.org/b/id/368435-M.jpg'
    }
  ]

  books = books.map do |book|
    Book.create!(book)
  end
  
end