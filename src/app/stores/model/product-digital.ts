export class ProductDigital {
  id: number;
  productId: number;
  digitalContents: DigitalContents[];
}

export class DigitalContents {
  id: number;
  name: string;
  url: string;
  primaryFlag: boolean;
  fileSize: FileSize;
  digitalFormat: DigitalFormat;
}

export class FileSize {
  public static SMALL = "SMALL";
  public static MEDIUM = "MEDIUM";
  public static LARGE = "LARGE";
}

export class DigitalFormat {
  public static IMAGE = "IMAGE";
  public static VIDEO = "VIDEO";
}
