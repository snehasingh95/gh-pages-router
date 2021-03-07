import { GhPagesRouterPage } from './app.po';

describe('gh-pages-router App', function() {
  let page: GhPagesRouterPage;

  beforeEach(() => {
    page = new GhPagesRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
