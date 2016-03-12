(function (root) {
    var html5 = {};

    var voidElements = [
        'area',
        'base',
        'br',
        'col',
        'command',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr'
    ];

    var attributeOrder = [
        'type',
        'id',
        'class',
        'name',
        'value',
        'href',
        'src',
        'action',
        'method',
        'selected',
        'checked',
        'readonly',
        'disabled',
        'multiple',
        'size',
        'maxlength',
        'width',
        'height',
        'rows',
        'cols',
        'alt',
        'title',
        'rel',
        'media',
    ];

    function renderTagAttributes(attributes)
    {
        /*
         if (count(attributes) > 1) {
         sorted = [];
         for (name in attributeOrder) {
         if (isset(attributes[name])) {
         sorted[name] = attributes[name];
         }
         }
         attributes = sorted.concat(attributes);
         }
         html = '';
         for(attributes as $name => $value) {
         if (is_bool($value)) {
         if ($value) {
         $html .= " $name";
         }
         } elseif (is_array($value)) {
         if (in_array($name, static::$dataAttributes)) {
         foreach ($value as $n => $v) {
         if (is_array($v)) {
         $html .= " $name-$n='" . Json::htmlEncode($v) . "'";
         } else {
         $html .= " $name-$n=\"" . static::encode($v) . '"';
         }
         }
         } elseif ($name === 'class') {
         if (empty($value)) {
         continue;
         }
         $html .= " $name=\"" . static::encode(implode(' ', $value)) . '"';
         } elseif ($name === 'style') {
         if (empty($value)) {
         continue;
         }
         $html .= " $name=\"" . static::encode(static::cssStyleFromArray($value)) . '"';
         } else {
         $html .= " $name='" . Json::htmlEncode($value) . "'";
         }
         } elseif ($value !== null) {
         $html .= " $name=\"" . static::encode($value) . '"';
         }
         }
         return $html;
         */
        return '';
    }

    function addCssClass(options, cssClass) {
        /*
         if (isset($options['class'])) {
         if (is_array($options['class'])) {
         $options['class'] = self::mergeCssClasses($options['class'], (array) $class);
         } else {
         $classes = preg_split('/\s+/', $options['class'], -1, PREG_SPLIT_NO_EMPTY);
         $options['class'] = implode(' ', self::mergeCssClasses($classes, (array) $class));
         }
         } else {
         $options['class'] = $class;
         }
         */
    }

    function mergeCssClasses(existingClasses, additionalClasses) {

    }

    function removeCssClass(options, cssClass) {

    }

    function addCssStyle(options, style, overwrite) {

    }

    function removeCssStyle(options, properties) {

    }

    function cssStyleFromArray(style) {

    }

    function cssStyleToArray(style) {

    }

    function getAttributeName(attribute) {

    }

    function escapeJsRegularExpression(regexp) {

    }

    html5.tag = function (name, content, options) {
        content = typeof content !== 'undefined' ? content : '';
        options = typeof options !== 'undefined' ? options : {};

        var html = '<' + name + renderTagAttributes(options) + '>';
        return voidElements.indexOf(name) > -1 ? html : html + content + '</' + name + '>';
    };

    html5.beginTag = function (name, options) {
        options = typeof options !== 'undefined' ? options : {};
        return '<' + name + renderTagAttributes(options) + '>';
    };

    html5.endTag = function (name) {
        return '</' + name + '>';
    };

    html5.cssFile = function (url, options) {

    };

    html5.jsFile = function (url, options) {

    };

    html5.button = function (content, options) {

    };

    html5.submitButton = function (content, options) {

    };

    html5.resetButton = function (content, options) {

    };

    html5.buttonInput = function (label, options) {

    };

    html5.submitInput = function (label, options) {

    };

    html5.resetInput = function (label, options) {

    };

    html5.textInput = function (name, value, options) {

    };

    html5.hiddenInput = function (name, value, options) {

    };

    html5.passwordInput = function (name, value, options) {

    };

    html5.fileInput = function (name, value, options) {

    };

    html5.radio = function (name, checked, options) {

    };

    html5.checkbox = function (name, checked, options) {

    };

    html5.dropDownList = function (name, selection, items, options) {

    };

    html5.listBox = function (name, selection, items, options) {

    };

    html5.checkboxList = function (name, selection, items, options) {

    };

    html5.radioList = function (name, selection, items, options) {

    };

    html5.html = function () {
        
    };

    // Document metadata

    html5.base = function () {

    };

    html5.head = function () {

    };

    html5.link = function () {

    };

    html5.meta = function () {

    };

    html5.style = function (content, options) {
        options = typeof options !== 'undefined' ? options : {};
        return this.tag('style', content, options);
    };

    html5.title = function () {

    };

    // Content sectioning

    html5.address = function () {

    };

    html5.article = function () {

    };

    html5.footer = function () {

    };

    html5.header = function () {

    };

    html5.h1 = function () {

    };

    html5.h2 = function () {

    };

    html5.h3 = function () {

    };

    html5.h4 = function () {

    };

    html5.h5 = function () {

    };

    html5.h6 = function () {

    };

    html5.hgroup = function () {

    };

    html5.nav = function () {

    };

    html5.section = function () {

    };

    // Text content

    html5.dd = function () {

    };

    html5.div = function () {

    };

    html5.dl = function () {

    };

    html5.dt = function () {

    };

    html5.figcaption = function () {

    };

    html5.figure = function () {

    };

    html5.hr = function () {

    };

    html5.li = function () {

    };

    html5.main = function () {

    };

    html5.ol = function (items, options) {

    };

    html5.p = function () {

    };

    html5.pre = function () {

    };

    html5.ul = function (items, options) {

    };

    // Inline text semantics

    html5.a = function (text, url, options) {

    };

    html5.abbr = function () {

    };

    html5.b = function () {

    };

    html5.bdi = function () {

    };

    html5.bdo = function () {

    };

    html5.br = function () {

    };

    html5.cite = function () {

    };

    html5.code = function () {

    };

    html5.data = function () {

    };

    html5.dfn = function () {

    };

    html5.em = function () {

    };

    html5.i = function () {

    };

    html5.kbd = function () {

    };

    html5.mark = function () {

    };

    html5.q = function () {

    };

    html5.rp = function () {

    };

    html5.rt = function () {

    };

    html5.rtc = function () {

    };

    html5.ruby = function () {

    };

    html5.s = function () {

    };

    html5.samp = function () {

    };

    html5.small = function () {

    };

    html5.span = function () {

    };

    html5.strong = function () {

    };

    html5.sub = function () {

    };

    html5.sup = function () {

    };

    html5.time = function () {

    };

    html5.u = function () {

    };

    html5.var = function () {

    };

    html5.wbr = function () {

    };

    // Image and multimedia

    html5.area = function () {

    };

    html5.audio = function () {

    };

    html5.img = function (src, options) {

    };

    html5.map = function () {

    };

    html5.track = function () {

    };

    html5.video = function () {

    };

    // Embedded content

    html5.embed = function () {

    };

    html5.iframe = function () {

    };

    html5.object = function () {

    };

    html5.param = function () {

    };

    html5.source = function () {

    };

    html5.canvas = function () {

    };

    html5.noscript = function () {

    };

    html5.script = function (content, options) {
        options = typeof options !== 'undefined' ? options : {};
        return this.tag('script', content, options);
    };

    // Demarcating edits

    html5.del = function () {

    };

    html5.ins = function () {

    };

    // Table content

    html5.caption = function () {

    };

    html5.col = function () {

    };

    html5.colgroup = function () {

    };

    html5.table = function () {

    };

    html5.tbody = function () {

    };

    html5.td = function () {

    };

    html5.tfoot = function () {

    };

    html5.th = function () {

    };

    html5.thead = function () {

    };

    html5.tr = function () {

    };

    // Forms
    html5.button = function () {

    };

    html5.datalist = function () {

    };

    html5.fieldset = function () {

    };

    html5.beginForm = function (action, method, options) {

    };

    html5.endForm = function () {
        return '</form>';
    };

    html5.input = function (type, name, value, options) {

    };

    html5.keygen = function () {

    };

    html5.label = function (content, forLabel, options) {

    };

    html5.legend = function () {

    };

    html5.meter = function () {

    };

    html5.optgroup = function () {

    };

    html5.option = function () {

    };

    html5.progress = function () {

    };

    html5.select = function () {

    };

    html5.textarea = function (name, value, options) {

    };

    // Interactive elements

    html5.content = function () {

    };

    html5.decorator = function () {

    };

    html5.element = function () {

    };

    html5.shadow = function () {

    };

    html5.template = function () {

    };

    root['html5'] = html5;
})(this);