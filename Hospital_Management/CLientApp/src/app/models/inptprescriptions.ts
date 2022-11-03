export class Inptprescriptions {
  constructor(
    public inPtPrescriptionId?: number,
    public addmisonId?: number,
    public isReleased?: boolean,
    public prescriptionDate?: Date,
    public instruction?: string,
    public relase?: boolean
  ) { }
}
