console.log('Todd, you are special and people like you!')

var fakeModel = {
	description: 'Feed the dog',
	complete: false,
	id: _.uniqueId('Task #')

}

var Todo = Backbone.Model.extend();

var TodoView = Backbone.View.extend({

	className: 'new-task-item',

	renderTemplate: _.template($('.addTaskTemplate').text()),

	events: {
		"click .js-completed-task": "toggleDone",

		"click .js-remove-task": "remove",

		"click .js-edit-task": "editTask",

		"click .js-add-task": "addTask",

		"blur .edit": "closeInput"

	},

	initialize: function(){
		
		$('.todo-tasks').prepend(this.el)

		this.render()

		this.listenTo(this.model, 'change', this.render)

	},

	render: function(){
		this.$el.html(this.renderTemplate(this.model.attributes))

	},

	toggleDone: function(){

		this.model.set('complete', !this.model.get('complete'))

		this.$el.toggleClass('completed')

		console.log(this.model.attributes)
	},


 	editTask: function(){

 		this.$el.addClass('edit');
 		this.input.focus()

 	},

 	closeInput: function(){
 		var value = this.input.val();
 		this.model.save({description: value})

 	},

 	addClass: function(){
 		var value = this.input.val();
 		// console.log(this.model.attributes);
 		this.model.save({description:value})
 	}

})


var modelInstance = new Todo(fakeModel)

var view = new TodoView ({model: new Todo(fakeModel)})