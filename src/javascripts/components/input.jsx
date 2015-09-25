let React = require("react")
let TextField = require("material-ui/lib/text-field")

export default class extends React.Component {

  _fieldProps() {
    return {
      style: this.props.style,
      floatingLabelText: this.props.floatingLabelText,
      hintText: this.props.inputHtml.placeholder,
      errorText: (this.props.errors||[]).join("\n")
    }
  }

  render() {
    return <TextField {...this._fieldProps()}/>
  }

}