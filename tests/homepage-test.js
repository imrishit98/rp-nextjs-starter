Feature('Has homepage loaded?');

Scenario('Has the NextJS app loaded', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('#__next');
});
