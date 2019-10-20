const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base');

    console.log(baseConfig);//编写用例
    it('entry', () => {
        assert.equal(baseConfig.entry.index, '/Users/lt/Desktop/webpack/Build_webpack/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search, '/Users/lt/Desktop/webpack/Build_webpack/test/smoke/template/src/search/index.js');
    })
})