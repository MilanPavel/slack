import React from "react";
import { Segment, Button, Input, ButtonGroup } from "semantic-ui-react";

class MessageForm extends React.Component {
  render() {
    return (
      <Segment className="message__form">
        <Input
          fluid
          name="message"
          style={{ marginBottom: "0.7em" }}
          label={<Button icon={"add"} />}
          labelPosition="left"
          placeholder="Write your message"
        />
        <ButtonGroup icon width="2">
          <Button
            color="orange"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
          />
          <Button
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </ButtonGroup>
      </Segment>
    );
  }
}

export default MessageForm;