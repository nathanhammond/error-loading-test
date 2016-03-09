import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var delayPromise = new Ember.RSVP.Promise(function(resolve, reject) {
      setTimeout(resolve, 3000);
    });
    return delayPromise;
  }
});
