const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base');

    console.log(baseConfig);//编写用例
    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexof('builder-webpcak-lwp/test/smoke/template/src/index/index.js') > -1, true );
        assert.equal(baseConfig.entry.searchindexof('builder-webpcak-lwp/test/smoke/template/src/search/index.js') > -1, true);
    })
})