let React = require("react")

export default class extends React.Component {

  render() {
    return <form {...this.props.formHtml}>{this.props.children}</form>
  }

}