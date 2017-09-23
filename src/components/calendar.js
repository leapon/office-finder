import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: this.props.year || 2017,
      month: this.props.month || 8,
      type: 'month'
    };
  }

  render() {
    var calendar = 'unknown calendar type';
    calendar =
        <CalendarMonth
            year = { this.state.year }
            month = { this.state.month }
            activeMonthOnly={ this.state.activeMonthOnly }
        />;
    return (
      <div>{ calendar }</div>
    )
  }
};

class CalendarMonth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: this.props.year,
      month: this.props.month,
      activeMonthOnly: this.props.activeMonthOnly
    }
  }

  render() {
      var dayHeaders = [
        { name:'Sun' },
        { name:'Mon' },
        { name:'Tue' },
        { name:'Wed' },
        { name:'Thu' },
        { name:'Fri' },
        { name:'Sat' }
      ];
    var days = [];

    //Events
    var jan = {

    }
    var feb = {

    }
    var mar = {

    }
    var apr = {

    }
    var may = {

    }
    var jun = {

    }
    var jul = {

    }
    var aug = {
      "1": "eat tacos"
    }
    var sep = {
      "1": "gas bill due",
      "2": "report due",
      "11": "test"
    }
    var oct = {

    }
    var nov = {

    }
    var dec = {

    }
    var monthArray = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]

    var monthFirstDay = moment({ year:this.state.year, month:this.state.month-1, day:1 });
    var monthLastDay = moment(monthFirstDay).add(1, 'month').subtract(1, 'day');
    var weekDayOfFirstDay = moment(monthFirstDay).day();
    var blockFirstDay = moment(monthFirstDay).add( -1 * weekDayOfFirstDay, 'day');
    var weekDayOfLastDay = moment(monthLastDay).day();
    var blockLastDay = moment(monthLastDay).add(6 - weekDayOfLastDay, 'day');
    var calendarCaption = monthFirstDay.format('MMMM YYYY');

    var daysCount = blockLastDay.diff(blockFirstDay, 'days');
    for (var i = 0; i <= daysCount; i++) {
        var targetDay = moment(blockFirstDay).add(i, 'day');
        // make array element's key unique to avoid reuse of day component in neighboring month
        var arrayKey = ['M', this.state.month, 'D', targetDay.format('YYYY-MM-DD')].join('_');
        var targetDayKey = targetDay.format('YYYY-MM-DD');
        var events = this.state.eventsCollection && this.state.eventsCollection[targetDayKey] || [];
        var isThisMonth = targetDay.month() === this.state.month-1;
        var isToday = targetDayKey === moment().format('YYYY-MM-DD');
        var todayStatus = '';
        var dayStatus = '';

        // Access events for the month
        var monthEvents = monthArray[this.state.month - 1]
        // Get events for the day
        var events = monthEvents[(targetDay.date()).toString()]
        // Check if date is in the month and if it is an Object
        // If it is undefined (i.e the day has no events),
        // events is set to be nothing
        if (isThisMonth === true) {
          if (Object.keys(monthEvents).length === 0 && monthEvents.constructor === Object) {
            if (typeof events === undefined) {
              events = ""
            }
          }
        }
        // today status is only set for this month and today
        if (isThisMonth && isToday) {
          todayStatus = 'today';
        }
        // When activeMonthOnly = true, only show dates of active month on calendar
        if (this.state.activeMonthOnly) {
            if (!isThisMonth) {
                // hide date not in active month
                dayStatus = 'hide-day';
              }
        }
        days.push({
            name: targetDay.date(),
            key: arrayKey,
            id: arrayKey,
            month: this.state.month,
            dayEvents: events,
            monthStatus:  isThisMonth ? 'active' : 'inactive',
            todayStatus: todayStatus,
            dayStatus: dayStatus
        });
      }
      var calendarItems = [];
            dayHeaders.map(function(dayHeader) {
                calendarItems.push(<CalendarHeader name={ dayHeader.name } key={ dayHeader.name } />);
            });

      days.map(function(day) {
          calendarItems.push(
              <CalendarDay
                  name={ day.name } key={ day.key } id={ day.id } month={ day.month } events={ day.dayEvents }
                  dayStatus={ day.dayStatus } monthStatus={ day.monthStatus }
                  todayStatus={ day.todayStatus }
              />
          );
      });

      return (
          <div className="calendar-container">
              <div className="calendar-caption">
                  { calendarCaption }
              </div>
          <div>
              { calendarItems }
          </div>
      </div>
      );
    }
  }

  class CalendarHeader extends React.Component {
    render() {
      return (
            <div className={ 'calendar-header' } >
                <div>{ this.props.name }</div>
            </div>
        );
    }
  }

  class CalendarDay extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: false,
        hover: false,
        dayClassNames: ['calendar-day'],
        dayHeaderClassNames: ['calendar-day-header'],
        dayBodyClassNames: ['calendar-day-body']
      }
    }
    componentWillMount() {
      this.state.dayClassNames.push(this.props.monthStatus, this.props.todayStatus, this.props.dayStatus);
      this.state.dayHeaderClassNames.push(this.props.monthStatus);
    }
    /*
    onMouseEnter(e) {
      this.state.dayClassNames.push('calendar-day-hover');
      this.forceUpdate();
    }
    onMouseLeave(e) {
      var classIndex = this.state.dayClassNames.indexOf('calendar-day-hover');
      if (classIndex >= 0) {
          this.state.dayClassNames.splice(classIndex, 1);
      }
      this.forceUpdate();
    }
    */
    render() {
      //This code makes sure no duplicate events are created
      //Get the month displayed on calendar
      var realMonth = this.props.month
      // Convert to String
      realMonth = realMonth.toString()
      // Get unique id for each day
      var id = this.props.id
      // Make an array with the id split
      var idSplit = id.split("")
      // Concatenate the month
      var dayMonth = idSplit[11] + idSplit[12]

      //Make format universal
      if (realMonth.length != 2) {
        realMonth = "0" + realMonth
      }

      // Event
      var events = <div className={ this.state.dayBodyClassNames.join(' ') }>{ this.props.events }</div>

      //Check if months are the same
      if (realMonth != dayMonth) {
        events = <div></div>
      }

      return (
          <div className={ this.state.dayClassNames.join(' ') }
              onClick={ this.onClick }
              onMouseEnter={ this.onMouseEnter }
              onMouseLeave={ this.onMouseLeave }
              >
              <div className={ this.state.dayHeaderClassNames.join(' ') }>{ this.props.name }</div>
              { events }
          </div>
        );
    }
  }

export default Calendar;
