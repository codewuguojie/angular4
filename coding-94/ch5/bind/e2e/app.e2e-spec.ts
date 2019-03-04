import { BindPage } from './app.po';

describe('bind App', function() {
  let page: BindPage;

  beforeEach(() => {
    page = new BindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
