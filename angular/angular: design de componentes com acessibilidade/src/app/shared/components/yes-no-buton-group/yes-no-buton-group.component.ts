import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
type Value = 'yes' | 'no'

@Component({
  selector: 'app-yes-no-buton-group',
  templateUrl: './yes-no-buton-group.component.html',
  styleUrls: ['./yes-no-buton-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButonGroupComponent)
    }
  ]
})
export class YesNoButonGroupComponent implements OnInit, ControlValueAccessor {

  @Input()
  public value: Value = null

  @Input()
  public label = ''

  @Input()
  disabled: boolean = false

  @Output()
  public valueChange = new EventEmitter<Value>()

  readonly options = YesNoButtonGroupOptions

  private _id: string = null

  public onChange = (value: Value) => {}

  public onTouched = () => {}

  constructor(
    uniqueIdService: UniqueIdService
  ) {
    this._id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-anwser')
  }

  ngOnInit(): void {
  }

  public writeValue(value: Value): void {
    this.value = value
    this.onChange(this.value)
    this.valueChange.emit(value)
  }

  public registerOnChange(onChange: (value: Value) => void): void {
    this.onChange = onChange
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  public activate(value: 'yes' | 'no') {
    this.writeValue(value)
  }

  get id() {
    return this._id
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
