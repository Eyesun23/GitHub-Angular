import { GitHubPage } from './app.po';

describe('git-hub App', () => {
  let page: GitHubPage;

  beforeEach(() => {
    page = new GitHubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
