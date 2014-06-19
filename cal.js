
function cal() {
    var numDaysOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
//    console.log(numDaysOfMonth);   
    var d = new Date();
    var todayDate = d.getDate();  // returns 10 ie. the 10th
    var todayDayOfWeek = d.getDay();  // returns 2 ie. Tues
    var todayMonth = d.getMonth();    // returns 5 = June
    var todayYear = d.getFullYear();  // 2014
}

function drawCal(month,firstDay) {
    var daysOfWeek = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    var let = ['a','b','c','d','e','f'];
    var text = "";
    var outline = [];
    var maxDaysOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    var d = new Date();

    var monthName = ['January','February',
                'March','April','May','June',
                'July','August','September',
                'October','November','December'];
   
    if ( typeof month !== 'undefined' ) {
      d.setMonth(month);
    }
    if ( typeof firstDay !== 'undefined' ) {
      d.setDate(firstDay);
    }
    else {
      d.setDate(1);
    }
    
    var firstOfTheMonth = d.getDay();
    var maxCounter = maxDaysOfMonth[ d.getMonth() ];
    var counter = 1;
    
    text += "<table id='cal'><caption>"+ monthName[d.getMonth()] +"</caption><tr>";
    // creates the labels for the week
    for (var i = 0; i<7; i++) {
         text += "<th id='dayLabel" + i + "'>" + daysOfWeek[i] + "</th>\n";
    }

    text += "</tr>";
    outline.push(text);

    for (var j = 0; j < let.length; j++) {
        text = "<tr>\n";
        for (var i = 0; i<7; i++) {
          if (( i < firstOfTheMonth && j == 0 ) || ( counter > maxCounter )) {
            text += "<td id='" + let[j] +i +"'>-</td>\n";
          }
          else {
            text += "<td id='" + let[j] +i +"'>" + counter + "</td>\n";
            counter++;
          }
        }
        text += "</tr>";
        outline.push(text);
    }
    outline.push("</table>");
    return( outline.join('\n') );
}
