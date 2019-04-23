const assert = require('assert');

describe('sample iFrame Test', function () {
  it('should allow to Finding ', function () {    
    //browser.url('/main.html')
    browser.url('https://goofy-pasteur-93f74a.netlify.com')
    browser.pause(5000)
    const mainText = $('//*[@id="mainID"]');
    assert.strictEqual(mainText.getText(), 'This is main page');    

    /** Switching to parent frame */
    const parentFrame = $('//*[@name="parentFrame"]');
    browser.switchToFrame(parentFrame)
    browser.pause(5000)
    const parentiFrameText = $('//*[@id="parentID"]');  
    assert.strictEqual(parentiFrameText.getText(), 'This is parent iFrame');   

    /** Switching to child frame */
    const childFrame = $('//*[@name="childFrame"]');
    browser.switchToFrame(childFrame)
    browser.pause(5000)
    const childiFrameText = $('//*[@id="childID"]');
    assert.strictEqual(childiFrameText.getText(), 'This is child iFrame');
  });
});
