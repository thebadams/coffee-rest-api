type Coffee = {
  name: string;
};

type DTO = {
  success: boolean;
  message: string;
};

export interface coffeeDTO extends DTO {
  data: Coffee[];
}

export interface pingDTO extends DTO {
  data: string;
}
