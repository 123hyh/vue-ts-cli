import { VueConstructor } from 'vue'
export const directives = {
  install(_Vue: VueConstructor): void{
    console.log(1)
  }
}