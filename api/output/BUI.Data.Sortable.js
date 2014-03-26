Ext.data.JsonP.BUI_Data_Sortable({"tagname":"class","name":"BUI.Data.Sortable","autodetected":{},"files":[{"filename":"sortable.js","href":"sortable.html#BUI-Data-Sortable"}],"extends":"BUI.Base","members":[{"name":"compareFunction","tagname":"cfg","owner":"BUI.Data.Sortable","id":"cfg-compareFunction","meta":{}},{"name":"handler","tagname":"cfg","owner":"BUI.Observable","id":"cfg-handler","meta":{}},{"name":"listeners","tagname":"cfg","owner":"BUI.Observable","id":"cfg-listeners","meta":{}},{"name":"sortDirection","tagname":"cfg","owner":"BUI.Data.Sortable","id":"cfg-sortDirection","meta":{}},{"name":"sortField","tagname":"cfg","owner":"BUI.Data.Sortable","id":"cfg-sortField","meta":{}},{"name":"sortInfo","tagname":"cfg","owner":"BUI.Data.Sortable","id":"cfg-sortInfo","meta":{}},{"name":"_eventMap","tagname":"property","owner":"BUI.Observable","id":"property-_eventMap","meta":{"private":true}},{"name":"_events","tagname":"property","owner":"BUI.Observable","id":"property-_events","meta":{"private":true}},{"name":"sortDirection","tagname":"property","owner":"BUI.Data.Sortable","id":"property-sortDirection","meta":{}},{"name":"sortField","tagname":"property","owner":"BUI.Data.Sortable","id":"property-sortField","meta":{}},{"name":"sortInfo","tagname":"property","owner":"BUI.Data.Sortable","id":"property-sortInfo","meta":{}},{"name":"addAttr","tagname":"method","owner":"BUI.Base","id":"method-addAttr","meta":{"protected":true}},{"name":"addAttrs","tagname":"method","owner":"BUI.Base","id":"method-addAttrs","meta":{"protected":true}},{"name":"addEvents","tagname":"method","owner":"BUI.Observable","id":"method-addEvents","meta":{"protected":true}},{"name":"addTarget","tagname":"method","owner":"BUI.Observable","id":"method-addTarget","meta":{"protected":true}},{"name":"clearAttrVals","tagname":"method","owner":"BUI.Base","id":"method-clearAttrVals","meta":{"protected":true}},{"name":"clearListeners","tagname":"method","owner":"BUI.Observable","id":"method-clearListeners","meta":{"protected":true}},{"name":"fire","tagname":"method","owner":"BUI.Observable","id":"method-fire","meta":{}},{"name":"get","tagname":"method","owner":"BUI.Base","id":"method-get","meta":{}},{"name":"getAttrVals","tagname":"method","owner":"BUI.Base","id":"method-getAttrVals","meta":{"protected":true}},{"name":"getAttrs","tagname":"method","owner":"BUI.Base","id":"method-getAttrs","meta":{"protected":true}},{"name":"getSortData","tagname":"method","owner":"BUI.Data.Sortable","id":"method-getSortData","meta":{"protected":true}},{"name":"hasAttr","tagname":"method","owner":"BUI.Base","id":"method-hasAttr","meta":{"protected":true}},{"name":"off","tagname":"method","owner":"BUI.Observable","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"BUI.Observable","id":"method-on","meta":{}},{"name":"pauseEvent","tagname":"method","owner":"BUI.Observable","id":"method-pauseEvent","meta":{}},{"name":"publish","tagname":"method","owner":"BUI.Observable","id":"method-publish","meta":{"protected":true}},{"name":"removeAttr","tagname":"method","owner":"BUI.Base","id":"method-removeAttr","meta":{"protected":true}},{"name":"resumeEvent","tagname":"method","owner":"BUI.Observable","id":"method-resumeEvent","meta":{}},{"name":"set","tagname":"method","owner":"BUI.Base","id":"method-set","meta":{}},{"name":"setInternal","tagname":"method","owner":"BUI.Base","id":"method-setInternal","meta":{}},{"name":"sortData","tagname":"method","owner":"BUI.Data.Sortable","id":"method-sortData","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-BUI.Data.Sortable","component":false,"superclasses":["BUI.Observable","BUI.Base"],"subclasses":["BUI.List.Sortable"],"mixedInto":["BUI.Data.Proxy.Memery","BUI.Data.Store"],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='docClass'>BUI.Observable</a><div class='subclass '><a href='#!/api/BUI.Base' rel='BUI.Base' class='docClass'>BUI.Base</a><div class='subclass '><strong>BUI.Data.Sortable</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/BUI.List.Sortable' rel='BUI.List.Sortable' class='docClass'>BUI.List.Sortable</a></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Data.Proxy.Memery' rel='BUI.Data.Proxy.Memery' class='docClass'>BUI.Data.Proxy.Memery</a></div><div class='dependency'><a href='#!/api/BUI.Data.Store' rel='BUI.Data.Store' class='docClass'>BUI.Data.Store</a></div><h4>Files</h4><div class='dependency'><a href='source/sortable.html#BUI-Data-Sortable' target='_blank'>sortable.js</a></div></pre><div class='doc-contents'><p>排序扩展方法，无法直接使用\n请在继承了 <a href=\"#!/api/BUI.Base\" rel=\"BUI.Base\" class=\"docClass\">BUI.Base</a>的类上使用</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-compareFunction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-cfg-compareFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-cfg-compareFunction' class='name expandable'>compareFunction</a> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>比较函数函数原型 function(v1,v2)，比较2个字段是否相等\n如果是字符串则按照本地比较算法，否则使用 > ,== 验证</p>\n</div><div class='long'><p>比较函数函数原型 function(v1,v2)，比较2个字段是否相等\n如果是字符串则按照本地比较算法，否则使用 > ,== 验证</p>\n</div></div></div><div id='cfg-handler' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-handler' class='name expandable'>handler</a> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><span class=\"signature\"></span></div><div class='description'><div class='short'>点击事件的处理函数，快速配置点击事件而不需要写listeners属性\n\n   var list = new BUI.List.SimpleList({\n     handler : function(ev){} //click 事件\n...</div><div class='long'><p>点击事件的处理函数，快速配置点击事件而不需要写listeners属性</p>\n\n<pre><code>   var list = new <a href=\"#!/api/BUI.List.SimpleList\" rel=\"BUI.List.SimpleList\" class=\"docClass\">BUI.List.SimpleList</a>({\n     handler : function(ev){} //click 事件\n   });\n   list.render();\n </code></pre>\n\n</div></div></div><div id='cfg-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-listeners' class='name expandable'>listeners</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>初始化事件,快速注册事件\n\n   var list = new BUI.List.SimpleList({\n     listeners : {\n       itemclick : function(ev){},\n       it...</div><div class='long'><p>初始化事件,快速注册事件</p>\n\n<pre><code>   var list = new <a href=\"#!/api/BUI.List.SimpleList\" rel=\"BUI.List.SimpleList\" class=\"docClass\">BUI.List.SimpleList</a>({\n     listeners : {\n       itemclick : function(ev){},\n       itemrendered : function(ev){}\n     },\n     items : []\n   });\n   list.render();\n </code></pre>\n\n</div></div></div><div id='cfg-sortDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-cfg-sortDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-cfg-sortDirection' class='name expandable'>sortDirection</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>排序方向,'ASC'、'DESC' ...</div><div class='long'><p>排序方向,'ASC'、'DESC'</p>\n<p>Defaults to: <code>&#39;ASC&#39;</code></p></div></div></div><div id='cfg-sortField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-cfg-sortField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-cfg-sortField' class='name expandable'>sortField</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>排序字段</p>\n</div><div class='long'><p>排序字段</p>\n</div></div></div><div id='cfg-sortInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-cfg-sortInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-cfg-sortInfo' class='name expandable'>sortInfo</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>排序信息</p>\n\n<ol>\n<li>field: 排序字段</li>\n<li>direction: 排序方向,ASC(默认),DESC</li>\n</ol>\n\n</div><div class='long'><p>排序信息</p>\n\n<ol>\n<li>field: 排序字段</li>\n<li>direction: 排序方向,ASC(默认),DESC</li>\n</ol>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_eventMap' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-property-_eventMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_eventMap' class='name expandable'>_eventMap</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>绑定的事件 ...</div><div class='long'><p>绑定的事件</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-_events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-property-_events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_events' class='name expandable'>_events</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>支持的事件名列表 ...</div><div class='long'><p>支持的事件名列表</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-sortDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-property-sortDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-property-sortDirection' class='name expandable'>sortDirection</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>排序方向,'ASC'、'DESC' ...</div><div class='long'><p>排序方向,'ASC'、'DESC'</p>\n<p>Defaults to: <code>{value: &#39;ASC&#39;}</code></p></div></div></div><div id='property-sortField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-property-sortField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-property-sortField' class='name expandable'>sortField</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>排序字段 ...</div><div class='long'><p>排序字段</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-sortInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-property-sortInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-property-sortInfo' class='name expandable'>sortInfo</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>排序信息</p>\n\n<ol>\n<li>field: 排序字段</li>\n<li>direction: 排序方向,ASC(默认),DESC</li>\n</ol>\n\n</div><div class='long'><p>排序信息</p>\n\n<ol>\n<li>field: 排序字段</li>\n<li>direction: 排序方向,ASC(默认),DESC</li>\n</ol>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addAttr' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-addAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-addAttr' class='name expandable'>addAttr</a>( <span class='pre'>name, attrConfig, overrides</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加属性定义 ...</div><div class='long'><p>添加属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>attrConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性定义</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否覆盖字段</p>\n</div></li></ul></div></div></div><div id='method-addAttrs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-addAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-addAttrs' class='name expandable'>addAttrs</a>( <span class='pre'>attrConfigs, initialValues, overrides</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加属性定义 ...</div><div class='long'><p>添加属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrConfigs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>An object with attribute name/configuration pairs.</p>\n</div></li><li><span class='pre'>initialValues</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>user defined initial values</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否覆盖字段</p>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>events</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加支持的事件 ...</div><div class='long'><p>添加支持的事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>事件</p>\n</div></li></ul></div></div></div><div id='method-addTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-addTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addTarget' class='name expandable'>addTarget</a>( <span class='pre'>target</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加冒泡的对象 ...</div><div class='long'><p>添加冒泡的对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>冒泡的事件源</p>\n</div></li></ul></div></div></div><div id='method-clearAttrVals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-clearAttrVals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-clearAttrVals' class='name expandable'>clearAttrVals</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>清理所有属性值 ...</div><div class='long'><p>清理所有属性值</p>\n</div></div></div><div id='method-clearListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-clearListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-clearListeners' class='name expandable'>clearListeners</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>移除所有绑定的事件 ...</div><div class='long'><p>移除所有绑定的事件</p>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType, eventData</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>触发事件\n\n  //绑定事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //触发事件\n  list.fire('itemclick'); ...</div><div class='long'><p>触发事件</p>\n\n<pre><code>  //绑定事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //触发事件\n  list.fire('itemclick');\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>eventData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件触发时传递的数据</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取属性值，所有的配置项和属性都可以通过get方法获取\n\n var control = new Control({\n  text : 'control text'\n });\n control.get('text'); //contro...</div><div class='long'><p>获取属性值，所有的配置项和属性都可以通过get方法获取</p>\n\n<pre><code> var control = new Control({\n  text : 'control text'\n });\n control.get('text'); //control text\n\n control.set('customValue','value'); //临时变量\n control.get('customValue'); //value\n</code></pre>\n\n\n<p><strong> 属性值/配置项 </strong></p>\n\n<pre><code> \n  Control.ATTRS = { //声明属性值\n    text : {\n      valueFn : function(){},\n      value : 'value',\n      getter : function(v){} \n    }\n  };\n  var c = new Control({\n    text : 'text value'\n  });\n  //get 函数取的顺序为：是否有修改值（配置项、set)、默认值（第一次调用执行valueFn)，如果有getter，则将值传入getter返回\n\n  c.get('text') //text value\n  c.set('text','new text');//修改值\n  c.get('text');//new text\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性值</p>\n</div></li></ul></div></div></div><div id='method-getAttrVals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-getAttrVals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-getAttrVals' class='name expandable'>getAttrVals</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取属性名/属性值键值对 ...</div><div class='long'><p>获取属性名/属性值键值对</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性对象</p>\n</div></li></ul></div></div></div><div id='method-getAttrs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-getAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-getAttrs' class='name expandable'>getAttrs</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取默认的属性值 ...</div><div class='long'><p>获取默认的属性值</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性值的键值对</p>\n</div></li></ul></div></div></div><div id='method-getSortData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-method-getSortData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-method-getSortData' class='name expandable'>getSortData</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取排序的集合 ...</div><div class='long'><p>获取排序的集合</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>排序集合</p>\n</div></li></ul></div></div></div><div id='method-hasAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-hasAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-hasAttr' class='name expandable'>hasAttr</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>是否包含此属性 ...</div><div class='long'><p>是否包含此属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否包含</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-off' class='name expandable'>off</a>( <span class='pre'>eventType, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移除绑定的事件\n\n //移除所有事件\n list.off();\n \n //移除特定事件\n function callback(ev){}\n list.on('click',callback);\n\n list.off('click',c...</div><div class='long'><p>移除绑定的事件</p>\n\n<pre><code> //移除所有事件\n list.off();\n \n //移除特定事件\n function callback(ev){}\n list.on('click',callback);\n\n list.off('click',callback);//需要保存回调函数的引用\n\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventType, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加绑定事件\n\n  //绑定单个事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //绑定多个事件\n  list.on('itemrendered item...</div><div class='long'><p>添加绑定事件</p>\n\n<pre><code>  //绑定单个事件\n  list.on('itemclick',function(ev){\n    alert('21');\n  });\n  //绑定多个事件\n  list.on('itemrendered itemupdated',function(){\n    //列表项创建、更新时触发操作\n  });\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-pauseEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-pauseEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-pauseEvent' class='name expandable'>pauseEvent</a>( <span class='pre'>eventType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>暂停事件的执行\n\n list.pauseEvent('itemclick'); ...</div><div class='long'><p>暂停事件的执行</p>\n\n<pre><code> list.pauseEvent('itemclick');\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-publish' class='name expandable'>publish</a>( <span class='pre'>eventType, cfg</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>配置事件是否允许冒泡 ...</div><div class='long'><p>配置事件是否允许冒泡</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>支持冒泡的事件</p>\n</div></li><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>bubbles</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否支持冒泡</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-removeAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-removeAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-removeAttr' class='name expandable'>removeAttr</a>( <span class='pre'>name</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>移除属性定义 ...</div><div class='long'><p>移除属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-resumeEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-resumeEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-resumeEvent' class='name expandable'>resumeEvent</a>( <span class='pre'>eventType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>唤醒事件\n\n list.resumeEvent('itemclick'); ...</div><div class='long'><p>唤醒事件</p>\n\n<pre><code> list.resumeEvent('itemclick');\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-set' class='name expandable'>set</a>( <span class='pre'>name, value, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置属性值，会触发before+Name+Change,和 after+Name+Change事件\n\n control.on('beforeTextChange',function(ev){\n   var newVal = ev.ne...</div><div class='long'><p>设置属性值，会触发before+Name+Change,和 after+Name+Change事件</p>\n\n<pre><code> control.on('beforeTextChange',function(ev){\n   var newVal = ev.newVal,\n     attrName = ev.attrName,\n     preVal = ev.prevVal;\n\n   //TO DO\n });\n control.set('text','new text');  //此时触发 beforeTextChange,afterTextChange\n control.set('text','modify text',{silent : true}); //此时不触发事件\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>值</p>\n</div></li><li><span class='pre'>opts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>silent</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>配置属性时，是否不触发事件</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-setInternal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-setInternal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-setInternal' class='name expandable'>setInternal</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>设置属性，不触发事件\n\n control.setInternal('text','text');//此时不触发事件 ...</div><div class='long'><p>设置属性，不触发事件</p>\n\n<pre><code> control.setInternal('text','text');//此时不触发事件\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果值无效则返回false,否则返回undefined</p>\n</div></li></ul></div></div></div><div id='method-sortData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Sortable'>BUI.Data.Sortable</span><br/><a href='source/sortable.html#BUI-Data-Sortable-method-sortData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Sortable-method-sortData' class='name expandable'>sortData</a>( <span class='pre'>field, direction, records</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>排序数据 ...</div><div class='long'><p>排序数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>排序字段或者数组</p>\n</div></li><li><span class='pre'>direction</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>排序方向</p>\n</div></li><li><span class='pre'>records</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>排序</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});