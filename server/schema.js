(function()
{

	ProfileSchema = new Schema({
		profile : {type : Number, required : true, unique : true,},
		profileURL : {type : String},
		fullName : { type : String},
	})

  Profile = module.exports = mongoose.model('Profile', ProfileSchema);



})();