import { IfAdventureModule } from './if-adventure.module';

describe('IfAdventureModule', () => {
  let ifAdventureModule: IfAdventureModule;

  beforeEach(() => {
    ifAdventureModule = new IfAdventureModule();
  });

  it('should create an instance', () => {
    expect(ifAdventureModule).toBeTruthy();
  });
});
