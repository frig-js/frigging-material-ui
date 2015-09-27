let React = require("react")
let TextField = require("material-ui/lib/text-field")

export default class extends React.Component {

  _fieldProps() {
    return {
      valueLink: this.props.valueLink,
      style: this.props.style,
      floatingLabelText: this.props.floatingLabelText,
      disabled: this.props.disabled,
      hintText: this.props.inputHtml.placeholder,
      errorText: (this.props.errors||[]).join("\n")
    }
  }

  render() {
    return <TextField {...this._fieldProps()}/>
  }

}