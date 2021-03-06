export class C {
  private x = 10

  getX = () => this.x

  setX = (newVal: number) => {
    this.x = newVal
  }
}

export const x = new C()
export const y = { ...{ some: 'value' } }

console.log('index', {
  x,
  y,
})
