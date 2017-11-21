# require 'ri_cal'
# require 'open-uri'
#
# uri = URI('https://calendar.google.com/calendar/ical/kerryjae%40gmail.com/private-85774ee4379ffbee92edb571199fce68/basic.ics')
#
# open(uri) do |ics|
#   #RiCal.parse returns an array of RiCalendar objects
#   cal = RiCal.parse(ics)
# end

require 'net/http'
uri = URI('https://calendar.google.com/calendar/ical/gt672dmhridlg65v2lj28agu00%40group.calendar.google.com/public/basic.ics')
calendar = Net::HTTP.get(uri)

cal = RiCal.parse_string(calendar).first
events = cal.events
# puts "This is calendar item #{cal}"

events.each do |event|
  puts "Summary- #{event.summary}"
  puts "Description- #{event.description}"
  puts "Date-  #{event.dtstart.strftime("%B %d, %Y @ %I:%M%p")}"
end

# BEGIN:VEVENT
# CREATED;VALUE=DATE-TIME:19000101T120000Z
# DTEND;VALUE=DATE:20100730
# STATUS:CONFIRMED
# DTSTART;VALUE=DATE:20100729
# TRANSP:OPAQUE
# DTSTAMP;VALUE=DATE-TIME:20171118T183121Z
# LAST-MODIFIED;VALUE=DATE-TIME:20111105T211207Z
# UID:CSVConvert0743cf23089e43ebd702671ac6011e0f
# DESCRIPTION:
# SUMMARY:Angela Brooks's Birthday
# LOCATION:
# SEQUENCE:0
# BEGIN:VALARM
# TRIGGER:-P0DT1H0M0S
# DESCRIPTION:This is an event reminder
# ACTION:DISPLAY
# END:VALARM
# END:VEVENT
