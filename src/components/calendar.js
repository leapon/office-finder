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
            events: events,
            monthStatus:  isThisMonth ? 'active' : 'inactive',
            todayStatus: todayStatus,
            dayStatus: dayStatus
        });
      }
      var calendarItems = [];
            dayHeaders.map(function(dayHeader) {
                calendarItems.push(<CalendarHeader name={ dayHeader.name } key={ dayHeader.name } />);
            });
      /*
      days.map(function(day) {
          calendarItems.push(
              <CalendarDay
                  name={ day.name } key={ day.key } events={ day.events }
                  dayStatus={ day.dayStatus } monthStatus={ day.monthStatus }
                  todayStatus={ day.todayStatus }
              />
          );
      });
      */
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


export default Calendar;