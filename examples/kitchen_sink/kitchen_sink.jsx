let frig = require("frig")
let React = require("react/addons")
let Frig = frig.Form

let FriggingMaterialUi = require("../../src/javascripts/index.js")
frig.defaultTheme(FriggingMaterialUi)

let ThemeManager = new(require("material-ui/lib/styles/theme-manager"))

let SignIn = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {account: {username: "D1plo1d"}}
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  form: function(f) {
    return <div>
      <f.input
        name="username"
        style={{marginTop: 24}}
        floatingLabelText="test"
        errors={["test1", "test2"]}
      />
      <br/>
      <f.input
        name="password"
        style={{marginTop: 24}}
      />
      <br />
      <f.input
        name="disabled"
        disabled={true}
        style={{marginTop: 24}}
      />

      <pre>{JSON.stringify(this.state)}</pre>
    </div>
  },

  render: function() {
    return <Frig
      data={this.linkState("account")}
      form={this.form}
    />
  }
})

window.addEventListener('load', function() {
  var el = document.getElementById('kitchen-sink')
  React.render(<SignIn/>, el)
})
