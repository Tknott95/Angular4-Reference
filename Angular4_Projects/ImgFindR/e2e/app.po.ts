import { browser, by, element } from 'protractor';

export class ImgFindRPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tk-root h1')).getText();
  }
}
