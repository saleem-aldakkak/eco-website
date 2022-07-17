document.addEventListener('DOMContentLoaded', function () {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable
    var containerEl = document.getElementById('external-events-list');
    new Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
            return {
                title: eventEl.innerText.trim()
            }
        }
    });
    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        editable: true,
        droppable: true,
        events: [
        {
            title: 'All Day Event',
            start: new Date(y, m, 1)
        },
        {
            title: 'Business Lunch',
            start: new Date(y, m, d-3, 16, 0),
            constraint: 'businessHours'
        }, {
            title: 'Meeting',
            start: new Date(y, m, d+4, 16, 0),
            constraint: 'availableForMeeting',
            color: '#257e4a'
        }, {
            title: 'Conference',
            start: new Date(y, m, d+2, 10, 30),
            end: '2019-03-20'
        }, {
            title: 'Party',
            start: new Date(y, m, d+10, 10, 30)
        }, {
            groupId: 'availableForMeeting',
            start: new Date(y, m, d-10, 16, 0),
            end: '2019-03-11T16:00:00',
            rendering: 'background'
        }, {
            groupId: 'availableForMeeting',
            start: new Date(y, m, d-12, 12, 0),
            end: '2019-03-13T16:00:00',
            rendering: 'background'
        }, {
            start: new Date(y, m, d-2, 12, 0),
            end: '2019-03-28',
            overlap: false,
            rendering: 'background',
            color: '#ff9f89'
        }, {
            start: new Date(y, m, d-4, 12, 0),
            end: '2019-03-08',
            overlap: false,
            rendering: 'background',
            color: '#ff9f89'
        }],
        drop: function (arg) {
            if (document.getElementById('drop-remove').checked) {
                arg.draggedEl.parentNode.removeChild(arg.draggedEl);
            }
        }
    });
    calendar.render();
});