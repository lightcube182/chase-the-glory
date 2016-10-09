import { ChaseTheGloryPage } from './app.po';

describe('chase-the-glory App', function() {
  let page: ChaseTheGloryPage;

  beforeEach(() => {
    page = new ChaseTheGloryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
