# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  # reset tables
  User.destroy_all
  Note.destroy_all
  Notebook.destroy_all

  # users
  demo = User.create(email: 'demo@fake.com', password: 'password')

  #notebooks
  nb1 = Notebook.create(title: 'Music', author_id: demo.id)
  nb2 = Notebook.create(title: 'News', author_id: demo.id)
  nb3 = Notebook.create(title: 'Stock Watch List', author_id: demo.id)
  nb4 = Notebook.create(title: 'To-Do', author_id: demo.id)

  # notes

  # NB1
  Note.create(
    title: 'At The Drive-In',
    content: %Q(<div>tickets go on sale at 8am Saturday August 13th</div><br><div>DON'T FORGET TO SET AN ALARM!!</div>),
    author_id: demo.id,
    notebook_id: nb1.id
  )

  Note.create(
    title: 'Bill Frisell',
    content: %Q(<div>burn CD 'History, Mystery' for Chris</div>),
    author_id: demo.id,
    notebook_id: nb1.id
  )

  Note.create(
    title: 'Jazz gig on the 20th',
    content: %Q(<div>Make sure to bring your own cable and music stand.</div><br><div>Sheet music will be provided.</div><br><div>Checklist:</div><br><div>pedalboard</div><br><div>ES-339</div><br><div>extra strings</div>),
    author_id: demo.id,
    notebook_id: nb1.id
  )

  Note.create(
    title: 'Musicians and locations NYC summer 2016',
    content: %Q(<div>Robert Glasper Trio - JALC $15 July 22nd</div><br><div>Patrick Zimmerli Quartet - Le Poisson Rouge $15 Sept 10th</div><br><div>BirdLand Big Band - Birdland $30 August 12th</div><br><div>Nth Power - Knitting Factory $15 August 17th</div>),
    author_id: demo.id,
    notebook_id: nb1.id
  )

  #NB2

  Note.create(
    title: 'Grateful Dead coming to Eaux Claires Fest',
    content: %Q(<div>http://www.startribune.com/the-national-s-aaron-dessner-on-stories-behind-grateful-dead-tribute-tracks/389880121/</div>),
    author_id: demo.id,
    notebook_id: nb2.id
  )

  Note.create(
    title: 'Putin Cray',
    content: %Q(<div>https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=newssearch&cd=1&ved=0ahUKEwim6K6YlrzOAhUpCsAKHfrSBwoQqQIIHigAMAA&url=http%3A%2F%2Fwww.businessinsider.com%2Fvladimir-putin-fires-chief-of-staff-sergei-ivanov-2016-8&usg=AFQjCNFmIaRodBStry9EW8Crwi33hMNjQA&sig2=x-n08MT2gYxtyXaOSUNLqQ</div><br><div>https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=newssearch&cd=1&cad=rja&uact=8&ved=0ahUKEwim6K6YlrzOAhUpCsAKHfrSBwoQuogBCCEoAzAA&url=https%3A%2F%2Fwww.theguardian.com%2Fcommentisfree%2F2016%2Faug%2F10%2Fvladimir-putin-theresa-may-cooperation-litvinenko&usg=AFQjCNHyDovAreZckq9RcbNxIh4xvq-uJw&sig2=JpZFCJGWP1StWjcP7xVkCg</div><br><div>https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=newssearch&cd=9&cad=rja&uact=8&ved=0ahUKEwim6K6YlrzOAhUpCsAKHfrSBwoQqQIIWCgAMAg&url=https%3A%2F%2Fwww.washingtonpost.com%2Fopinions%2Fglobal-opinions%2Ferdogan-putin-and-the-strongman-ties-that-bind%2F2016%2F08%2F11%2Fab0fe27a-5fdc-11e6-af8e-54aa2e849447_story.html&usg=AFQjCNFtBZIHGz-9Z9RI6XQUnwGbBMpveg&sig2=fx3VZyTQ53ZmslYgKoIKHw</div>),
    author_id: demo.id,
    notebook_id: nb2.id
  )

  #NB3

  Note.create(
    title: 'Ali-Baba',
    content: %Q(<div>Profits up despite Chinese economic slowdown</div><br><div>At high for quarter as of August 2nd, look for future entry</div>),
    author_id: demo.id,
    notebook_id: nb3.id
  )

  Note.create(
    title: 'SolarCity',
    content: %Q(<div>Internal partnership</div><br><div>Opening plant in South Buffalo NY later this year</div><br><div>relevant news from article: http://www.buffalonews.com/business/officials-move-up-opening-date-for-solarcity-plant-in-south-buffalo-20160810</div><br><div>While SolarCity eventually expects to employ about 500 people in solar panel manufacturing, the company initially will need 50 to 100 workers during the first few months of 2017 to begin the preliminary work on setting up its manufacturing systems and installing and testing the equipment, Rive said.</div><br><div>Once production begins at its reduced level, using photovoltaic cells that SolarCity will purchase from other vendors, the factory probably will need another 50 to 100 manufacturing workers, he said.</div><br><div>SolarCity also is looking at ways to change the layout of the Buffalo factory and modify some of the equipment used to make the solar panels in order to “significantly improve” the capacity of the plant.</div>),
    author_id: demo.id,
    notebook_id: nb3.id
  )

  Note.create(
    title: 'Top performing Exchange Traded Funds for the year (2016)',
    content: %Q(<div>SILJ => Silver Fund</div><br><div>GILDX => Gold Explorers</div><br><div>GDX => Gold Mining</div><br><br><div>Make Note: Precious metals and commodities are up, potential economic slowdown anticipated by business community</div><br><div>Liquidate when S&P cross below 200 day moving average</div>),
    author_id: demo.id,
    notebook_id: nb3.id
  )

  Note.create(
    title: 'Amazon and Facebook beat earnings expectations after Brexit',
    content: %Q(<div>tech looks strong for now, keep an eye on:</div><br><div>Lifesciences - EW</div><br><div>NetEase - NTES</div>),
    author_id: demo.id,
    notebook_id: nb3.id
  )

  #NB4

  Note.create(
    title: 'Create Tags',
    content: %Q(<div>CRUD and Flux, make sure it integrates seamlessly with NoteForm</div><br><div>),
    author_id: demo.id,
    notebook_id: nb4.id
  )

  Note.create(
    title: 'Investigate Syntax Highlighting',
    content: %Q(<div>You may have to switch back to Draft.js, since it has plugins already fo syntax highlighting.</div>),
    author_id: demo.id,
    notebook_id: nb4.id
  )

  Note.create(
    title: 'Search Function',
    content: %Q(<div>Overview is in the a/A curriculum from AJAX Twitter</div><br><div>Make sure to review that before attempting this on your own</div>),
    author_id: demo.id,
    notebook_id: nb4.id
  )

  Note.create(
    title: 'Github API integration with SometimesNote clone',
    content: %Q(<div>Is this even possible?</div><br><div>Investigate, check stack overflow and see if any alternative solutions are available or if github has a api already available.</div>),
    author_id: demo.id,
    notebook_id: nb4.id
  )

  Note.create(
    title: 'Add Reminders',
    content: %Q(<div>This will likely require some form of calendar api and maintaing a store to keep track of reminders and their associated notes</div>),
    author_id:demo.id,
    notebook_id: nb4.id
  )
end
