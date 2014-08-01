(function(){

	'use strict';

	/**
	 * Empty tests.
	 *
	 */
	describe('An empty HTML form', function () {

		beforeEach(function () {
				var html = '<form id="newForm"></form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return false if null is passed as argument', function(){
			expect(formToObject(null)).toBe(false);
		});

		it('should return false if an empty string is passed as argument', function(){
			expect(formToObject('')).toBe(false);
		});

		it('should return false if undefined object is passed', function(){
			expect(formToObject(undefined)).toBe(false);
		});

		it('should return false if the argument passed is invalid', function(){
			expect(formToObject('newFormUndefined')).toBe(false);
		});

		it('should return false if the form has no elements', function(){
			expect(formToObject('newForm')).toBe(false);
		});

	});

 /**
  * Unexpected situations tests.
  *
  */
	describe('An HTML form with two duplicate elements', function () {

		beforeEach(function () {
				var html = '<form id="newForm">' +
				'<input type="text" name="firstName" value="Serban">' +
				'<input type="text" name="firstName" value="Ghita">' +
				'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return only one key with the last value', function(){
			expect(formToObject('newForm')).toEqual({'firstName':'Ghita'});
		});

	});

	describe('An HTML form with one input element without name attribute', function () {

		beforeEach(function () {
				var html = '<form id="newForm">' +
				'<input type="text" value="4111111111111111">' +
				'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an empty object', function(){
			expect(formToObject('newForm')).toEqual({});
		});

	});

	describe('An HTML form that contains one field without name attribute', function () {

		beforeEach(function () {
				var html = '<form id="newForm">' +
				'<input type="text" name="name" value="Serban">' +
				'<input type="text" value="4111111111111111">' +
				'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return the non empty valid keys and values', function(){
			expect(formToObject('newForm')).toEqual({'name':'Serban'});
		});

	});

	/**
	 * Input elements tests.
	 *
	 */
	describe('An HTML form with a text field', function () {

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="text" name="name" value="Serban">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('searched by a valid element string should return an object', function(){
			expect(formToObject('newForm')).toEqual({'name':'Serban'});
		});

		it('searched by a valid DOM element should return an object', function(){
			expect(formToObject(document.getElementById('newForm')))
						.toEqual({'name':'Serban'});
		});

	});

	describe('An HTML form with a color field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="color" name="myColor" value="#ff0000">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'myColor':'#ff0000'});
		});

	});

	describe('An HTML form with a date field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="date" name="bday" value="2012-07-17">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'bday':'2012-07-17'});
		});

	});

	describe('An HTML form with a datetime field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="datetime" name="bdaytime" value="2012-07-17 08:57:00">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'bdaytime':'2012-07-17 08:57:00'});
		});

	});

	describe('An HTML form with a datetime-local field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="datetime-local" name="bdaytimeLocal" value="2014-08-30T02:03">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'bdaytimeLocal':'2014-08-30T02:03'});
		});

	});

	describe('An HTML form with an email field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="email" name="email" value="serbanghita@gmail.com" placeholder="you@email.com">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'email':'serbanghita@gmail.com'});
		});

	});

	describe('An HTML form with a month field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="month" name="bdaymonth" value="2014-07" placeholder="July, 2014">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'bdaymonth':'2014-07'});
		});

	});

	describe('An HTML form with a number field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="number" name="quantity" min="1" max="5" value="4">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'quantity':'4'});
		});

	});

	describe('An HTML form with a range field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="range" name="points" min="1" max="10" value="9">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'points':'9'});
		});

	});

	describe('An HTML form with a search field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="search" name="googlesearch" value="javascript form to object">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'googlesearch':'javascript form to object'});
		});

	});

	describe('An HTML form with a tel field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="tel" name="yourPhoneNo" value="+40.737.10.01.10">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'yourPhoneNo':'+40.737.10.01.10'});
		});

	});

	describe('An HTML form with a time field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="time" name="usrTime" value="22:07">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'usrTime':'22:07'});
		});

	});

	describe('An HTML form with an url field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="url" name="homepage" value="http://google.com.ro">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'homepage':'http://google.com.ro'});
		});

	});

	describe('An HTML form with a week field', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="week" name="yearWeek" value="2016-W02">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'yearWeek':'2016-W02'});
		});

	});

	/**
	 * Multiple input elements tests
	 *
	 */
	describe('An HTML form with multiple input fields', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<input type="text" name="name" value="Serban">' +
						'<input type="color" name="myColor" value="#ff0000">' +
						'<input type="date" name="bday" value="2012-07-17">' +
						'<input type="datetime" name="bdaytime" value="2012-07-17 08:57:00">' +
						'<input type="datetime-local" name="bdaytimeLocal" value="2014-08-30T02:03">' +
						'<input type="email" name="email" value="serbanghita@gmail.com" placeholder="you@email.com">' +
						'<input type="month" name="bdaymonth" value="2014-07" placeholder="July, 2014">' +
						'<input type="number" name="quantity" min="1" max="5" value="4">' +
						'<input type="range" name="points" min="1" max="10" value="9">' +
						'<input type="search" name="googlesearch" value="javascript form to object">' +
						'<input type="tel" name="yourPhoneNo" value="+40.737.10.01.10">' +
						'<input type="time" name="usrTime" value="22:07">' +
						'<input type="url" name="homepage" value="http://google.com.ro">' +
						'<input type="week" name="yearWeek" value="2016-W02">' +
						'<input type="week" name="yearWeek" value="2016-W02">' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object containing all the fields names and respective values', function(){
			expect(formToObject('newForm')).toEqual({
					'name':'Serban',
					'myColor':'#ff0000',
					'bday':'2012-07-17',
					'bdaytime':'2012-07-17 08:57:00',
					'bdaytimeLocal':'2014-08-30T02:03',
					'email':'serbanghita@gmail.com',
					'bdaymonth':'2014-07',
					'quantity':'4',
					'points':'9',
					'googlesearch':'javascript form to object',
					'yourPhoneNo':'+40.737.10.01.10',
					'usrTime':'22:07',
					'homepage':'http://google.com.ro',
					'yearWeek':'2016-W02'
				});
		});

	});

	/**
	 * Textarea elements test.
	 */

  describe('An HTML form with a textarea element', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<textarea name="address">Place du Casino, 98000 Monaco</textarea>' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'address':'Place du Casino, 98000 Monaco'});
		});

  });

  /**
   * Select elements test.
   */
  describe('An HTML form with a select element and one valid selected option', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<select name="country">' +
						'<option value="RO">Romania</option>' +
						'<option value="MC" selected>Monaco</option>' +
						'<option value="US">United States of America</option>' +
						'</select>' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an object', function(){
			expect(formToObject('newForm')).toEqual({'country':'MC'});
		});

  });

  describe('An HTML form with a select element and no selected options', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<select name="country">' +
						'<option value="">--select--</option>' +
						'<option value="RO">Romania</option>' +
						'<option value="MC">Monaco</option>' +
						'<option value="US">United States of America</option>' +
						'</select>' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return the first option value', function(){
			expect(formToObject('newForm')).toEqual({'country':''});
		});

  });

  describe('An HTML form with a multiple select element', function(){

		beforeEach(function () {
				var html = '<form id="newForm">' +
						'<select name="countries" id="countries" multiple>' +
						'<option value="">--select--</option>' +
						'<option value="RO">Romania</option>' +
						'<option value="MC">Monaco</option>' +
						'<option value="US">United States of America</option>' +
						'</select>' +
						'</form>';
				var $newForm = document.createElement('div');
				$newForm.id = 'fixtures';
				$newForm.innerHTML = html;
				document.body.appendChild($newForm);
			});

		afterEach(function () {
			document.body.removeChild(document.getElementById('fixtures'));
		});

		it('should return an empty array when no options are selected', function(){
			expect(formToObject('newForm')).toEqual({'countries':[]});
		});

		it('should return an array with two elements when two options are selected', function(){
			var $countries = document.getElementById('countries');
			$countries.options[1].setAttribute('selected', true);
			$countries.options[2].setAttribute('selected', true);

			expect(formToObject('newForm')).toEqual({'countries':['RO', 'MC']});
		});

  });

	/**
	 * Complex forms tests
	 */
	

	describe('A complex multi-level form', function(){

		beforeEach(function(done) {
			jasmine.getFixtures().fixturesPath = 'fixtures';
			loadFixtures('complex_form1.html');
			done();
		});

		it('should return a normal object when first level elements container is selected', function(done){

			expect(formToObject('firstLevelElements')).toEqual({
				'name': 'Serban',
				'address': 'Place du Casino, 98000 Monaco'
			});

			done();

		});

		it('should return a normal object when first level elements container is selected', function(done){

			expect(formToObject('firstLevelElements')).toEqual({
				'name': 'Serban',
				'address': 'Place du Casino, 98000 Monaco'
			});

			done();

		});

		it('should return an object with two levels of elements when second level elements container is selected', function(done){

			expect(formToObject('secondLevelElements')).toEqual({
				'settings': {
					'eyesColor': 'brown',
					'hairColor': 'blond',
					'gender': 'male',
					'age': '100'
				}
			});

			done();

		});

		it('should return an object with three levels of elements when third level elements container is selected', function(done){

			expect(formToObject('thirdLevelElements')).toEqual({
				'preferences': {
					'input': {
						'devices': ['mouse', 'keyboard']
					},
					'game': {
						'difficulty': 'hard',
						'upgrades': ['free_amo', 'infinite_life']
					}
				}
			});

			done();

		});

	});


})();