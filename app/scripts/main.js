console.log('lets do this again');

var taskList = [
   {
      description: 'shovel snow',
      done: false,
      id: _.uniqueId('task #')
   },
   {
   	description: 'build SnowMonster',
   	done: false,
   	id: _.uniqueId('task #')
   },
   {
   	description: 'drink hot chocolate',
   	done: false,
   	id: _.uniqueId('task #')
   }
]


$(document).ready(function(){

	var addTaskTemplate = _.template($('.addTaskTemplate').text());

	_.each(taskList, function(item){
		$('.todo-tasks').prepend(addTaskTemplate(item))
	});

	// adding task code

	$('.js-add-task').on('click',function(){

		var description = $('.js-new-task').val();

		var task = {
			description: description || 'boy, this is easy..',
			done: false,
			id: _.uniqueId('task #')
		}

		taskList.push(task);

		$('.todo-tasks').prepend(addTaskTemplate(task))
	});

	// completed task code

	$('.todo-tasks').on('click', '.js-completed-task', function(){

		$(this).siblings('.task-text').toggleClass('completed');

		var parentId = $(this).parent('.new-task-item').attr('id');

		var items = _.findWhere(taskList, {id: parentId});


		items.done =!items.done;

		changeDone = items.done;

		$(this).siblings().removeClass('false','true')
		$(this).siblings().addClass(changeDone.toString())

		console.log(taskList)

		
	});

	// remove a task

	$('.todo-tasks').on('click', '.js-remove-task', function(){

		var parentId = $(this).parent('.new-task-item').attr('id');

		
		taskList = _.reject(taskList,function(item){
			return item.id == parentId;
		});


		$(this).parent().remove();	

	})

	// edit a task

	$('.todo-tasks').on('click', '.js-edit-task',function() {

		// var parentId = $(this).parent('.new-task-item').attr('id');

		// var items = _.findWhere(taskList, {id: parentId});



		// console.log(items)


		var inputbox = "<input type='text'  class='inputbox' placeholder='type update here' value=\""+$(this).text()+"\">";

		$(this).siblings('.task-text').html(inputbox);

		$("input.inputbox").focus();

		$("input.inputbox").blur(function(){
			$(this).siblings().text($('.inputbox').val());

		})	

	})

})





