import Ember from 'ember';
import PageFadeinMixin from 'personal-website/mixins/page-fadein';
import { module, test } from 'qunit';

module('Unit | Mixin | page fadein');

// Replace this with your real tests.
test('it works', function(assert) {
  let PageFadeinObject = Ember.Object.extend(PageFadeinMixin);
  let subject = PageFadeinObject.create();
  assert.ok(subject);
});
