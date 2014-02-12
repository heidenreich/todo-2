console.log('\'Allo \'Allo!');

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
			description: description,
			done: false,
			id: _.uniqueId('task #')
		}

		taskList.push(task);

		$('.todo-tasks').prepend(addTaskTemplate(task))
	});

	// completed task code

	$('.todo-tasks').on('click', '.js-completed-task', function(){
		$(this).siblings('.task-text').toggleClass('completed')
		
	});

	// remove a task

	$('.todo-tasks').on('click', '.js-remove-task', function(){
		$(this).parent('.new-task-item').remove();
	})


})



//When div.edit me is clicked, run this function $(document).ready(function() { //When div.edit me is clicked, run this function $("div.editme").click(function() { //This if statement checks to see if there are //and children of div.editme are input boxes. If so, //we don't want to do anything and allow the user //to continue typing if ($(this).children('input').length == 0) { //Create the HTML to insert into the div. Escape any " characters var inputbox = "<input type='text' class='inputbox' value=\""+$(this).text()+"\">"; //Insert the HTML into the div $(this).html(inputbox); //Immediately give the input box focus. The user //will be expecting to immediately type in the input box, //and we need to give them that ability $("input.inputbox").focus(); //Once the input box loses focus, we need to replace the //input box with the current text inside of it. $("input.inputbox").blur(function() { var value = $(this).val(); $(".editme").text(value); }); } }); }); - See more at: http://www.unleashed-technologies.com/blog/2010/01/13/jquery-javascript-easy-edit-place-input-boxes-and-select-boxes#sthash.75VMj8PJ.dpuf

