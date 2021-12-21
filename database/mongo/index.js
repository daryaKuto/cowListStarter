const mongoose = require('mongoose');

//DATABASE

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if(err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo')
});

const cowSchema = new mongoose.Schema({
  cow_id: {type: Number, trim: true},
  cow_name: { type: String, trim: true, default: '' },
  cow_desc: { type: String, trim: true, default: '' }
})

const Cow = mongoose.model('Cow', cowSchema);

module.exports = Cow;


// cowList.cows.insert({cow_id: 1, cow_name: "Buttercup", cow_desc: "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock"});

// cowList.cows.insert({cow_id: 2, cow_name: "Daisy", cow_desc: "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties"});

// cowList.cows.insert({cow_id: 3, cow_name: "MooDonna", cow_desc: "archaic lady -- used as a form of respectful address"});

// cowList.cows.insert({cow_id: 4, cow_name: "MooLawn", cow_desc: "a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history"});
