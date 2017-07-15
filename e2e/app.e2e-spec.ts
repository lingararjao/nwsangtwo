import { NwspointPage } from './app.po';

describe('nwspoint App', () => {
  let page: NwspointPage;

  beforeEach(() => {
    page = new NwspointPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
