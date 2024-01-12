

$(document).ready(function () {
    const openModalBtn = $('#openModalBtn');
    const closeModalBtn = $('#closeModalBtn');
    const modal = $('#myModal');
    const taskForm = $('#taskForm');
    const taskList = $('#taskList');
    const body = $('body');

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

    function addTask(title, description) {
        const taskItem = $('<div class="task">');
        taskItem.html(`<h3>${title}</h3><p>${description}</p>`);
        taskList.append(taskItem);
    }
});




