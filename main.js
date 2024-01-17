$(document).ready(function () {
    const openModalBtn = $('#openModalBtn');
    const closeModalBtn = $('#closeModalBtn');
    const modal = $('#myModal');
    const taskForm = $('#taskForm');
    const taskList = $('#taskList');
    const body = $('body');
    


    
    loadTasks();

    openModalBtn.click(function () {
        modal.fadeIn();
        body.addClass('modal-open');
    });

    closeModalBtn.click(function () {
        modal.fadeOut();
        body.removeClass('modal-open');
    });

    taskForm.submit(function (event) {
        event.preventDefault();
        const title = $('#taskTitle').val();
        const description = $('#taskDescription').val();

        if (title && description) {
            addTask(title, description);
            saveTasksToLocalStorage(); 
            modal.fadeOut();
            body.removeClass('modal-open');
            taskForm.trigger('reset');
        }
    });

    $(window).click(function (event) {
        if (event.target === modal[0]) {
            modal.fadeOut();
            body.removeClass('modal-open');
        }
    });

    
    taskList.on('click', '.delete-task', function () {
        $(this).closest('.task').remove();
        saveTasksToLocalStorage();
    });

    taskList.on('click', '.edit-task', function () {
        const taskItem = $(this).closest('.task');
        const title = taskItem.find('h3').text();
        const description = taskItem.find('p').text();

        
        $('#taskTitle').val(title);
        $('#taskDescription').val(description);

        
        taskItem.remove();
        saveTasksToLocalStorage();

        modal.fadeIn();
        body.addClass('modal-open');
    });

    function addTask(title, description) {
        const taskItem = $('<div class="task">');
        taskItem.html(`<h3>${title}</h3><p>${description}</p>
            <button class="edit-task"><img src="edit.png"></button>
            <button class="delete-task"><img src="delete.png"></button>
            <div class="colors">
            <div class="b1"></div>
            <div class="b2"></div>
            <div class="b3"></div>
            </div>`);
        taskList.append(taskItem);
    }

    function saveTasksToLocalStorage() {
        const tasks = taskList.html(); 
        localStorage.setItem('tasks', tasks); 
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            taskList.html(savedTasks); 
        }
    }










    const openModalBtnTwo = $('#openModalBtnTwo');
    const closeModalBtnTwo = $('#closeModalBtnTwo');
    const modalCategory = $('#myModalCategory');
    const categoryForm = $('#categoryForm');
    const categoryList = $('#categoryList');

    loadCategories();

    openModalBtnTwo.click(function () {
        modalCategory.fadeIn();
        body.addClass('modal-open');
    });

    closeModalBtnTwo.click(function () {
        modalCategory.fadeOut();
        body.removeClass('modal-open');
    });

    categoryForm.submit(function (event) {
        event.preventDefault();
        const categoryName = $('#CategoryName').val();

        if (categoryName) {
            addCategory(categoryName);
            saveCategoriesToLocalStorage(); 
            modalCategory.fadeOut();
            body.removeClass('modal-open');
            categoryForm.trigger('reset');
        }
    });

    categoryList.on('click', '.delete-task', function () {
        $(this).closest('.task').remove();
        saveCategoriesToLocalStorage();
    });

    categoryList.on('click', '.edit-task', function () {
        const taskItem = $(this).closest('.task');
        const title = taskItem.find('h3').text();

        $('#CategoryName').val(title);

        taskItem.remove();
        saveCategoriesToLocalStorage();

        modalCategory.fadeIn();
        body.addClass('modal-open');
    });

    function addCategory(categoryName) {
        const categoryItem = $('<div class="category">');
        categoryItem.html(`<h3>${categoryName}</h3>
            `);
        categoryList.append(categoryItem);
    }

    function saveCategoriesToLocalStorage() {
        const categories = categoryList.html();
        localStorage.setItem('categories', categories);
    }
    
    function loadCategories() {
        const savedCategories = localStorage.getItem('categories');
        if (savedCategories) {
            categoryList.html(savedCategories);
        }
    }
    
    
  
});




