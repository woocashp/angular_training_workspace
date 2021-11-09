import { InjectionToken } from "@angular/core";

export const gToken = new InjectionToken('', {
  factory: () => ({
    textColor: 'black',
    bgColor: 'pink'
  })
})
