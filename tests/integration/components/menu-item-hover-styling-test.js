import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('menu-item-hover-styling', 'Integration | Component | menu item hover styling', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{menu-item-hover-styling}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#menu-item-hover-styling}}
      template block text
    {{/menu-item-hover-styling}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
