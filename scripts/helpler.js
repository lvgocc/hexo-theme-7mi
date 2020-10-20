/* global hexo */

'use strict';

const crypto = require('crypto');

hexo.extend.helper.register('gitalk_md5', function(path) {
    const str = this.url_for(path);
    return crypto.createHash('md5').update(str).digest('hex');
});