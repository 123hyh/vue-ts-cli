
import component from 'vue-class-component';
import * as tsx from 'vue-tsx-support';

import $style from './Test.module.scss';

interface Events {
  /* 点击事件 */
  onHandlerClick: () => any;
}
interface ScopedSlots {
  default: number;
}

@component({
  name: 'Test',
  props: {
    dataTitle: {
      type: String,
      required: true
    }
  }
})
export class Test extends tsx.Component < {dataTitle: string}, Events, ScopedSlots> {
  
  readonly dataTitle!: string;
  private x = 1;

  public mounted (): void {
    return 
  }
  public handlerClick (e: MouseEvent): void {
    e.stopPropagation();
    this.$emit('handlerClick');
  }
  public render (): JSX.Element {
    const { default: defaultSlot = (): any => null } = this.$scopedSlots;

    return (
      <div
        class={$style.active}
        onClick={(e: MouseEvent): any => this.handlerClick(e)}
      >
        <h2>{this.dataTitle}</h2>
        <ul>
          {[1, 2, 3, 4].map((item) => (
            <li onClick={(e: MouseEvent): any => this.handlerClick(e)}>
              {item}
            </li>
          ))}
        </ul>
        {defaultSlot(this.x)}
      </div>
    );
  }
}
