/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('.third-pane-state:not(.toggl)', {observe: true}, function (elem) {
  var link,
    description = $('.subject span', elem).textContent,
    project = $('span.name', elem).textContent;

  link = togglbutton.createTimerLink({
    className: 'frontapp',
    description: description,
    projectName: project
  });

  $('.subject-line').appendChild(link);
});
