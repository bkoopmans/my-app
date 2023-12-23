import { DecoderModule } from './decoder.module';

describe('DivingModule', () => {
  let divingModule: DecoderModule;

  beforeEach(() => {
    divingModule = new DecoderModule();
  });

  it('should create an instance', () => {
    expect(divingModule).toBeTruthy();
  });
});
