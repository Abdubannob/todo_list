$('.rights img').click(function(){
    $('#header').toggleClass('gray')
    $('main').toggleClass('dark')
    $('nav').toggleClass('dark')

    if($(this).attr('src') === "./images/icons8-moon-64 (2).png"){
        $(this).attr('src', "./images/icons8-sun-star-48.png")
    } 
    else if ($(this).attr('src') ===  "./images/icons8-sun-star-48.png"){
        $(this).attr('src', "./images/icons8-moon-64 (2).png")
    }
    $('#doo').toggleClass()
    $('#history').toggleClass()
    // if($('.extra').css('background') == "#fff"){
    //     $('.extra').css('background', 'gray')
      
    // }
    //  else if ($('.extra').css('background') == "gray"){
        
    //     $('.extra').css('background', '#fff')
    // }

    if($(this).attr('src') === "./images/icons8-moon-64 (2).png"){
        // document.querySelector('.extra').style.background.remove('gray')
        document.querySelector('.extra').style.background = '#fff'
    }
   
    if($(this).attr('src') ===  "./images/icons8-sun-star-48.png"){
        document.querySelector('.extra').style.background = 'gray'
        // document.querySelector('.home p').textContent.style.color = '#fff'
        $('.home p' ).css('color', '#fff')
        $('.home svg').css('fill', '#fff')

    }
        
})




// function createTask(text) {
//     let html = `  <div class="contain">
//     <div class="cont">
//         <input type="checkbox" onchange="completeTask(this)" id="check" class="checking" >
//         <label for="check" class="customcheck"></label>
//         <div class="text">${text}</div>
//     </div>
//     <div class="cont">
//         <button class="edit"><img src="./images/icons8-карандаш-64.png" alt=""></button>
//         <button class="del"><img src="./images/icons8-закрыть-окно-94.png" alt=""></button>
//     </div> 
// </div>`
//     renderTask(html, 'section')
//   }

//   createTask("Hello")


function renderTask(html, parent) {
    $(parent).append(html)
  }   


  function completeTask(e) {
    if (e.checked) {
      renderTask($(e).parent().parent(), '.complate')
    //   renderTask($(e).parent().parent(), 'section')
    }
    else {
      renderTask($(e).parent().parent(), 'section')
    }
  }
  




$('#bask').click(function(){
    $('.extra').css({left: -300, top: 0})
    $('.basket-item').css('display', 'inline-block')
    $('.complate').css('display', 'none')
    $('section').css('display', 'none')
    $('.tasks').css('display', 'none')
    $('#doo').css('display', 'none')
    $('.hist').css('display', 'none')

})


$('.adt').click(function(){
    $('.addTasks').css({top: 0, left: 0})
    $('.adt').css('border-bottom', '1px solid green')
})
$('.addTasks p').click(function(){
    $('.addTasks').css({top: -200, left: 0})
})
$('.comp').click(function(){
    $('.complate').css('display', 'inline-block')
    $('.comp').css('border-bottom', '1px solid green')
    $('section',).css('display', 'none')
    $('.tasks').css('display', 'none')
    $('#doo').css('display', 'none')
    $('#history').css('display', 'none')
    $('.basket-item').css('display', 'none')

})
$('.task').click(function(){
    $('section').css('display', 'inline-block')
    $('.task').css('border-bottom', '1px solid green')
    $('.complate').css('display', 'none')
    $('#doo').css('display', 'none')
    $('#history').css('display', 'none')
    // $('.tasks').css('display', 'none')
    $('.basket-item').css('display', 'none')


})
$('.his').click(function(){
    $('section').css('display', 'none')
    $('.complate').css('display', 'none')
    $('#doo').css('display', 'none')
    $('#history').css('display', 'inline-block')
    $('.his').css('border-bottom', '1px solid green')
    $('.tasks').css('display', 'none')
    $('.basket-item').css('display', 'none')


})

$('.cal').click(function(){
    $('#doo').css('display', 'inline-block')
    $('.cal').css('border-bottom', '1px solid green')
    $('section').css('display', 'none')
    $('#history').css('display', 'none')
    $('.complate').css('display', 'none')
    $('.tasks').css('display', 'none')
    $('.basket-item').css('display', 'none')
   

})
$('.logo img').click(function(){
    $('.extra').css({left: 0, top: 0})
    $('.extra img').css('animation', 'door 1s linear infinite alternate')
    setTimeout(()=>{
    $('.extra img').css('animation', 'none')
    }, 6000)
    $(this).css('transform',' rotate(-45deg)')
})
$('.extra img').click(function(){
    $('.extra').css({left: -300, top: 0 })
})

$('.inf div').click(function(){
    $(this).toggleClass('flat')
 })

 let list = []

document.getElementById('add').onclick = function(){

    let ars = document.querySelectorAll('.contain')
     list = Array.from(ars)
}

let i = 0



function renderHTML (arr){
    document.getElementById('baskets').innerHTML = ''
    arr.forEach((e) =>{document.getElementById('baskets').innerHTML += `  <div class="contain">
    <div class="cont">
        <input type="checkbox" onchange="completeTask(this)" id="check" class="checking" >
        <label for="check" class="customcheck"></label>
        <div class="text">${e.textContent}</div>
    </div>
    <div class="cont">
        <button class="edit"><img src="./images/icons8-карандаш-64.png" alt=""></button>
        <button class="del"><img src="./images/icons8-закрыть-окно-94.png" alt=""></button>
    </div> 
</div>`})
}

document.getElementById('search').oninput = function(evt){
    renderHTML(list.filter((e) => {return e.textContent.toLowerCase().includes(evt.target.value.toLowerCase())}))
}

renderHTML(list)

$('#add').click(function(){
    $('#input').css('display', 'inline-block')
   let text = $('#input').val()
   if( $(".information #input").val().trim() === '') return
   $('section').append(`
         
   <div class="contain">
                <div class="cont">
                    <input type="checkbox" onchange="completeTask(this)" id="check" class="checking" >
                    <label for="check" class="customcheck"></label>
                    <div class="text">${text}</div>
                </div>
                <div class="cont">
                    <button class="edit"><img src="./images/icons8-карандаш-64.png" alt=""></button>
                    <button class="del"><img src="./images/icons8-закрыть-окно-94.png" alt=""></button>
                </div> 
            </div>
   `)

   $('#history').append(`
         
   <div class="contain">
                <div class="cont">
                    <input type="checkbox"  id="check" class="checking" >
                    <label for="check" class="customcheck"></label>
                    <div class="text">${text}</div>
                </div>
                <div class="cont">
                    <button class="edite"><img src="./images/icons8-карандаш-64.png" alt=""></button>
                    <button class="del"><img src="./images/icons8-закрыть-окно-94.png" alt=""></button>
                </div> 
            </div>
   `)


$('#input').val('') 


$('.edit').click(function(){
   let text = $(this).parent().siblings().find('.text')
    if(text.attr('contenteditable')){
        text.removeAttr('contenteditable')
    }
    else{
    text.attr('contenteditable', 'true')
    }
})

$('.del').click(function(){
    $(this).parent().parent().remove()
    renderTask($(this).parent().parent(), '.basket-item')
    // $('.checking').css('display', 'none')
 
})


})
$('.basket-item .del').click(function(){
    $(this).parent().parent().remove()

})


!function() {

    var today = moment();
  
    function Calendar(selector, events) {
      this.el = document.querySelector(selector);
      this.events = events;
      this.current = moment().date(1);
      this.draw();
      var current = document.querySelector('.today');
      if(current) {
        var self = this;
        window.setTimeout(function() {
          self.openDay(current);
        }, 500);
      }
    }
  
    Calendar.prototype.draw = function() {
      //Create Header
      this.drawHeader();
  
      //Draw Month
      this.drawMonth();
  
      this.drawLegend();
    }
  
    Calendar.prototype.drawHeader = function() {
      var self = this;
      if(!this.header) {
        //Create the header elements
        this.header = createElement('div', 'header');
        this.header.className = 'header';
  
        this.title = createElement('h1');
  
        var right = createElement('div', 'right');
        right.addEventListener('click', function() { self.nextMonth(); });
  
        var left = createElement('div', 'left');
        left.addEventListener('click', function() { self.prevMonth(); });
  
        //Append the Elements
        this.header.appendChild(this.title); 
        this.header.appendChild(right);
        this.header.appendChild(left);
        this.el.appendChild(this.header);
      }
  
      this.title.innerHTML = this.current.format('MMMM YYYY');
    }
  
    Calendar.prototype.drawMonth = function() {
      var self = this;
      
      this.events.forEach(function(ev) {
       ev.date = self.current.clone().date(Math.random() * (29 - 1) + 1);
      });
      
      
      if(this.month) {
        this.oldMonth = this.month;
        this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
        this.oldMonth.addEventListener('webkitAnimationEnd', function() {
          self.oldMonth.parentNode.removeChild(self.oldMonth);
          self.month = createElement('div', 'month');
          self.backFill();
          self.currentMonth();
          self.fowardFill();
          self.el.appendChild(self.month);
          window.setTimeout(function() {
            self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
          }, 16);
        });
      } else {
          this.month = createElement('div', 'month');
          this.el.appendChild(this.month);
          this.backFill();
          this.currentMonth();
          this.fowardFill();
          this.month.className = 'month new';
      }
    }
  
    Calendar.prototype.backFill = function() {
      var clone = this.current.clone();
      var dayOfWeek = clone.day();
  
      if(!dayOfWeek) { return; }
  
      clone.subtract('days', dayOfWeek+1);
  
      for(var i = dayOfWeek; i > 0 ; i--) {
        this.drawDay(clone.add('days', 1));
      }
    }
  
    Calendar.prototype.fowardFill = function() {
      var clone = this.current.clone().add('months', 1).subtract('days', 1);
      var dayOfWeek = clone.day();
  
      if(dayOfWeek === 6) { return; }
  
      for(var i = dayOfWeek; i < 6 ; i++) {
        this.drawDay(clone.add('days', 1));
      }
    }
  
    Calendar.prototype.currentMonth = function() {
      var clone = this.current.clone();
  
      while(clone.month() === this.current.month()) {
        this.drawDay(clone);
        clone.add('days', 1);
      }
    }
  
    Calendar.prototype.getWeek = function(day) {
      if(!this.week || day.day() === 0) {
        this.week = createElement('div', 'week');
        this.month.appendChild(this.week);
      }
    }
  
    Calendar.prototype.drawDay = function(day) {
      var self = this;
      this.getWeek(day);
  
      //Outer Day
      var outer = createElement('div', this.getDayClass(day));
      outer.addEventListener('click', function() {
        self.openDay(this);
      });
  
      //Day Name
      var name = createElement('div', 'day-name', day.format('ddd'));
  
      //Day Number
      var number = createElement('div', 'day-number', day.format('DD'));
  
  
      //Events
      var events = createElement('div', 'day-events');
      this.drawEvents(day, events);
  
      outer.appendChild(name);
      outer.appendChild(number);
      outer.appendChild(events);
      this.week.appendChild(outer);
    }
  
    Calendar.prototype.drawEvents = function(day, element) {
      if(day.month() === this.current.month()) {
        var todaysEvents = this.events.reduce(function(memo, ev) {
          if(ev.date.isSame(day, 'day')) {
            memo.push(ev);
          }
          return memo;
        }, []);
  
        todaysEvents.forEach(function(ev) {
          var evSpan = createElement('span', ev.color);
          element.appendChild(evSpan);
        });
      }
    }
  
    Calendar.prototype.getDayClass = function(day) {
      classes = ['day'];
      if(day.month() !== this.current.month()) {
        classes.push('other');
      } else if (today.isSame(day, 'day')) {
        classes.push('today');
      }
      return classes.join(' ');
    }
  
    Calendar.prototype.openDay = function(el) {
      var details, arrow;
      var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
      var day = this.current.clone().date(dayNumber);
  
      var currentOpened = document.querySelector('.details');
  
      //Check to see if there is an open detais box on the current row
      if(currentOpened && currentOpened.parentNode === el.parentNode) {
        details = currentOpened;
        arrow = document.querySelector('.arrow');
      } else {
        //Close the open events on differnt week row
        //currentOpened && currentOpened.parentNode.removeChild(currentOpened);
        if(currentOpened) {
          currentOpened.addEventListener('webkitAnimationEnd', function() {
            currentOpened.parentNode.removeChild(currentOpened);
          });
          currentOpened.addEventListener('oanimationend', function() {
            currentOpened.parentNode.removeChild(currentOpened);
          });
          currentOpened.addEventListener('msAnimationEnd', function() {
            currentOpened.parentNode.removeChild(currentOpened);
          });
          currentOpened.addEventListener('animationend', function() {
            currentOpened.parentNode.removeChild(currentOpened);
          });
          currentOpened.className = 'details out';
        }
  
        //Create the Details Container
        details = createElement('div', 'details in');
  
        //Create the arrow
        var arrow = createElement('div', 'arrow');
  
        //Create the event wrapper
  
        details.appendChild(arrow);
        el.parentNode.appendChild(details);
      }
  
      var todaysEvents = this.events.reduce(function(memo, ev) {
        if(ev.date.isSame(day, 'day')) {
          memo.push(ev);
        }
        return memo;
      }, []);
  
      this.renderEvents(todaysEvents, details);
  
      arrow.style.left = el.offsetLeft - el.parentNode.offsetLeft + 27 + 'px';
    }
  
    Calendar.prototype.renderEvents = function(events, ele) {
      //Remove any events in the current details element
      var currentWrapper = ele.querySelector('.events');
      var wrapper = createElement('div', 'events in' + (currentWrapper ? ' new' : ''));
  
      events.forEach(function(ev) {
        var div = createElement('div', 'event');
        var square = createElement('div', 'event-category ' + ev.color);
        var span = createElement('span', '', ev.eventName);
  
        div.appendChild(square);
        div.appendChild(span);
        wrapper.appendChild(div);
      });
  
      if(!events.length) {
        var div = createElement('div', 'event empty');
        var span = createElement('span', '', 'No Events');
  
        div.appendChild(span);
        wrapper.appendChild(div);
      }
  
      if(currentWrapper) {
        currentWrapper.className = 'events out';
        currentWrapper.addEventListener('webkitAnimationEnd', function() {
          currentWrapper.parentNode.removeChild(currentWrapper);
          ele.appendChild(wrapper);
        });
        currentWrapper.addEventListener('oanimationend', function() {
          currentWrapper.parentNode.removeChild(currentWrapper);
          ele.appendChild(wrapper);
        });
        currentWrapper.addEventListener('msAnimationEnd', function() {
          currentWrapper.parentNode.removeChild(currentWrapper);
          ele.appendChild(wrapper);
        });
        currentWrapper.addEventListener('animationend', function() {
          currentWrapper.parentNode.removeChild(currentWrapper);
          ele.appendChild(wrapper);
        });
      } else {
        ele.appendChild(wrapper);
      }
    }
  
    Calendar.prototype.drawLegend = function() {
      var legend = createElement('div', 'legend');
      var calendars = this.events.map(function(e) {
        return e.calendar + '|' + e.color;
      }).reduce(function(memo, e) {
        if(memo.indexOf(e) === -1) {
          memo.push(e);
        }
        return memo;
      }, []).forEach(function(e) {
        var parts = e.split('|');
        var entry = createElement('span', 'entry ' +  parts[1], parts[0]);
        legend.appendChild(entry);
      });
      this.el.appendChild(legend);
    }
  
    Calendar.prototype.nextMonth = function() {
      this.current.add('months', 1);
      this.next = true;
      this.draw();
    }
  
    Calendar.prototype.prevMonth = function() {
      this.current.subtract('months', 1);
      this.next = false;
      this.draw();
    }
  
    window.Calendar = Calendar;
  
    function createElement(tagName, className, innerText) {
      var ele = document.createElement(tagName);
      if(className) {
        ele.className = className;
      }
      if(innerText) {
        ele.innderText = ele.textContent = innerText;
      }
      return ele;
    }
  }();
  
  !function() {
    var data = [
      { eventName: 'Lunch Meeting w/ Mark', calendar: 'Work', color: 'orange' },
      { eventName: 'Interview - Jr. Web Developer', calendar: 'Work', color: 'orange' },
      { eventName: 'Demo New App to the Board', calendar: 'Work', color: 'orange' },
      { eventName: 'Dinner w/ Marketing', calendar: 'Work', color: 'orange' },
  
      { eventName: 'Game vs Portalnd', calendar: 'Sports', color: 'blue' },
      { eventName: 'Game vs Houston', calendar: 'Sports', color: 'blue' },
      { eventName: 'Game vs Denver', calendar: 'Sports', color: 'blue' },
      { eventName: 'Game vs San Degio', calendar: 'Sports', color: 'blue' },
  
      { eventName: 'School Play', calendar: 'Kids', color: 'yellow' },
      { eventName: 'Parent/Teacher Conference', calendar: 'Kids', color: 'yellow' },
      { eventName: 'Pick up from Soccer Practice', calendar: 'Kids', color: 'yellow' },
      { eventName: 'Ice Cream Night', calendar: 'Kids', color: 'yellow' },
  
      { eventName: 'Free Tamale Night', calendar: 'Other', color: 'green' },
      { eventName: 'Bowling Team', calendar: 'Other', color: 'green' },
      { eventName: 'Teach Kids to Code', calendar: 'Other', color: 'green' },
      { eventName: 'Startup Weekend', calendar: 'Other', color: 'green' }
    ];
  
    
  
    function addDate(ev) {
      
    }
  
    var calendar = new Calendar('#calendar', data);
  
  }();
  