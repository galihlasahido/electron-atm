describe("ScreenTextService", function() {
  var ScreenTextService = require('../../src/services/screentext.js');
  var s;

  beforeEach(function() {  
    s = new ScreenTextService();
  });

  describe('init()', function(){
    it('should init screen text', function() {
      var initialized = { 
        '@': '                                ', 
        'A': '                                ', 
        'B': '                                ', 
        'C': '                                ', 
        'D': '                                ', 
        'E': '                                ', 
        'F': '                                ', 
        'G': '                                ', 
        'H': '                                ', 
        'I': '                                ', 
        'J': '                                ', 
        'K': '                                ', 
        'L': '                                ', 
        'M': '                                ', 
        'N': '                                ', 
        'O': '                                ' };
      expect(s.screen_text).toEqual({});
      s.init();
      expect(s.screen_text).toEqual(initialized);
    });
  });

});