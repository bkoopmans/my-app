import { DivingModule } from './diving.module';

describe('DivingModule', () => {
  let divingModule: DivingModule;

  beforeEach(() => {
    divingModule = new DivingModule();
  });

  it('should create an instance', () => {
    expect(divingModule).toBeTruthy();
  });
});
