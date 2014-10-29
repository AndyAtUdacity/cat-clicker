var model = {
	numCats : 5,
	cats : [],
	currentCat: null,
	Cat  : function(){
		this.count = 0;
		this.image = 'cat_picture1.jpeg';
		this.incrementCount = function(){
			this.count += 1;
		}
	},
	setup : function(){
		for (var i=0; i<this.numCats; i++){
			var newCat = new this.Cat;
			newCat.image = 'cat_picture'+i+'.jpeg';
			this.cats.push(newCat);
		}
		this.currentCat = this.cats[0];
	}
}

var octopus = {
	incrementCat : function() {
		model.currentCat.count++;
		catView.render();
		catListView.render();
	},
	getCurrentCat : function() {
		return model.currentCat;
	},
	getNumCats : function() {
		return model.cats.length;
	},
	chooseCat : function(catNumber){
		model.currentCat = model.cats[catNumber];
		catListView.render();
		catView.render();
	}
};

var catListView = {
	buttons : $('#cat-list'),
	setup : function(){
		for (var i=0; i<octopus.getNumCats(); i++){
			this.buttons.append(this.makeButtonHTML(i));
		}
	},
	render : function(){
	},
	makeButtonHTML : function(catNumber){
		return $('<button/>',
		{
			text: 'Cat '+catNumber,
			click: function() {
				octopus.chooseCat(catNumber);
			}
		})
	}
}

var catView = {
	catDisplay : $('#cat-display'),
	render : function(){
		var cat = octopus.getCurrentCat();
		$('#cat-image').attr("src", cat.image);
		$('#count').html(cat.count);
	},
	setup : function(){
		this.render();
		$('#cat-image').click(function() {
			octopus.incrementCat();
		})
	}
}

model.setup();
catListView.setup();
catView.setup();