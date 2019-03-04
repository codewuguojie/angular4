import { DiPage } from './app.po';

describe('di App', function() {
  let page: DiPage;

  beforeEach(() => {
    page = new DiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
