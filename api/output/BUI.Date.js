Ext.data.JsonP.BUI_Date({"tagname":"class","name":"BUI.Date","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Date","members":{"cfg":[],"property":[],"method":[{"name":"add","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-add"},{"name":"addDay","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-addDay"},{"name":"addHour","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-addHour"},{"name":"addMinute","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-addMinute"},{"name":"addMonths","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-addMonths"},{"name":"addSecond","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-addSecond"},{"name":"addWeek","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-addWeek"},{"name":"addYear","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-addYear"},{"name":"format","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-format"},{"name":"getDate","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-getDate"},{"name":"isDateEquals","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-isDateEquals"},{"name":"isDateString","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-isDateString"},{"name":"isEquals","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-isEquals"},{"name":"parse","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-parse"},{"name":"today","tagname":"method","owner":"BUI.Date","meta":{},"id":"method-today"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":319,"files":[{"filename":"date.js","href":"date2.html#BUI-Date"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/date2.html#BUI-Date' target='_blank'>date.js</a></div></pre><div class='doc-contents'><p>日期的工具方法</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-add' class='name expandable'>add</a>( <span class='pre'>strInterval, Num, dtDate</span> )</div><div class='description'><div class='short'>日期加法 ...</div><div class='long'><p>日期加法</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>strInterval</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>加法的类型，s(秒),n(分),h(时),d(天),w(周),m(月),y(年)</p>\n</div></li><li><span class='pre'>Num</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>数量，如果为负数，则为减法</p>\n</div></li><li><span class='pre'>dtDate</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>起始日期，默认为此时</p>\n</div></li></ul></div></div></div><div id='method-addDay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-addDay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-addDay' class='name expandable'>addDay</a>( <span class='pre'>days, date</span> )</div><div class='description'><div class='short'>天的加法 ...</div><div class='long'><p>天的加法</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>days</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>天数</p>\n</div></li><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>起始日期</p>\n</div></li></ul></div></div></div><div id='method-addHour' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-addHour' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-addHour' class='name expandable'>addHour</a>( <span class='pre'>hours, date</span> )</div><div class='description'><div class='short'>小时的加法 ...</div><div class='long'><p>小时的加法</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hours</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>小时</p>\n</div></li><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>起始日期</p>\n</div></li></ul></div></div></div><div id='method-addMinute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-addMinute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-addMinute' class='name expandable'>addMinute</a>( <span class='pre'>minutes, date</span> )</div><div class='description'><div class='short'>分的加法 ...</div><div class='long'><p>分的加法</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>minutes</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>分</p>\n</div></li><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>起始日期</p>\n</div></li></ul></div></div></div><div id='method-addMonths' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-addMonths' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-addMonths' class='name expandable'>addMonths</a>( <span class='pre'>months, date</span> )</div><div class='description'><div class='short'>增加月 ...</div><div class='long'><p>增加月</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>months</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>月数</p>\n</div></li><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>起始日期</p>\n</div></li></ul></div></div></div><div id='method-addSecond' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-addSecond' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-addSecond' class='name expandable'>addSecond</a>( <span class='pre'>seconds, date</span> )</div><div class='description'><div class='short'>秒的加法 ...</div><div class='long'><p>秒的加法</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>seconds</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>秒</p>\n</div></li><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>起始日期</p>\n</div></li></ul></div></div></div><div id='method-addWeek' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-addWeek' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-addWeek' class='name expandable'>addWeek</a>( <span class='pre'>weeks, date</span> )</div><div class='description'><div class='short'>增加周 ...</div><div class='long'><p>增加周</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>weeks</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>周数</p>\n</div></li><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>起始日期</p>\n</div></li></ul></div></div></div><div id='method-addYear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-addYear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-addYear' class='name expandable'>addYear</a>( <span class='pre'>years, date</span> )</div><div class='description'><div class='short'>增加年 ...</div><div class='long'><p>增加年</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>years</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>年数</p>\n</div></li><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>起始日期</p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-format' class='name expandable'>format</a>( <span class='pre'>date, mask, utc</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>将日期格式化成字符串 ...</div><div class='long'><p>将日期格式化成字符串</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>日期</p>\n</div></li><li><span class='pre'>mask</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>格式化方式</p>\n</div></li><li><span class='pre'>utc</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>是否utc时间</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>日期的字符串</p>\n</div></li></ul></div></div></div><div id='method-getDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-getDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-getDate' class='name expandable'>getDate</a>( <span class='pre'>date</span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></div><div class='description'><div class='short'>返回当前日期 ...</div><div class='long'><p>返回当前日期</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'><p>日期的 00:00:00</p>\n</div></li></ul></div></div></div><div id='method-isDateEquals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-isDateEquals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-isDateEquals' class='name expandable'>isDateEquals</a>( <span class='pre'>d1, d2</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>日期是否相等，忽略时间 ...</div><div class='long'><p>日期是否相等，忽略时间</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>d1</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>日期对象</p>\n</div></li><li><span class='pre'>d2</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>日期对象</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否相等</p>\n</div></li></ul></div></div></div><div id='method-isDateString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-isDateString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-isDateString' class='name expandable'>isDateString</a>( <span class='pre'>str</span> )</div><div class='description'><div class='short'>字符串是否是有效的日期类型 ...</div><div class='long'><p>字符串是否是有效的日期类型</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>字符串</p>\n</div></li></ul></div></div></div><div id='method-isEquals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-isEquals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-isEquals' class='name expandable'>isEquals</a>( <span class='pre'>d1, d2</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>日期时间是否相等，包含时间 ...</div><div class='long'><p>日期时间是否相等，包含时间</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>d1</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>日期对象</p>\n</div></li><li><span class='pre'>d2</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>日期对象</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否相等</p>\n</div></li></ul></div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-parse' class='name expandable'>parse</a>( <span class='pre'>date, dateMask</span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></div><div class='description'><div class='short'>转换成日期 ...</div><div class='long'><p>转换成日期</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>字符串或者日期</p>\n</div></li><li><span class='pre'>dateMask</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>日期的格式,如:yyyy-MM-dd</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'><p>日期对象</p>\n</div></li></ul></div></div></div><div id='method-today' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Date'>BUI.Date</span><br/><a href='source/date2.html#BUI-Date-method-today' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Date-method-today' class='name expandable'>today</a>( <span class='pre'></span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></div><div class='description'><div class='short'>当前天 ...</div><div class='long'><p>当前天</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'><p>当前天 00:00:00</p>\n</div></li></ul></div></div></div></div></div></div></div>"});