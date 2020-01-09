import React, {Component} from "react";
import {
    Button,
    Grid
} from "semantic-ui-react";

interface AddURLProps {
    label: string;
    id: string;
    placeholder: string;
    classes?: string;
}

class AddURL extends Component<AddURLProps> {

    public state = {
        changeText: "",
        value: ""
    };

    public handleChange = (event) => {
       this.setState(
           {changeText : event.target.value}
       );
    };

    public addValue = () => {

        if (this.state.value === "") {
            this.setState(
                {
                    value: this.state.changeText,
                    changeText : ""
                }
            );
        } else {
            this.setState(
                {
                    value: this.state.value + "," + this.state.changeText,
                    changeText : ""
                }
            );
        }
    }

    public removeValue = (value) => {
        console.log(value);
        let links = this.state.value;
        links = links.split(value).join("");
        console.log(links);
        this.setState(
            {
                value: links,
                // tslint:disable-next-line:object-literal-sort-keys
                changeText : this.state.changeText
            }
        );
    }

    public render() {
        return (
            <>
                <Grid.Row  columns={1}>
                    <Grid.Column mobile={16} tablet={16} computer={14}>
                        <label className={this.props.classes}>{this.props.label}</label>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column mobile={16} tablet={16} computer={10}>
                        <input
                            type="url"
                            pattern="https?://.+"
                            value={ this.state.changeText }
                            onChange={ this.handleChange }
                            placeholder={ this.props.placeholder }
                            className={ this.props.classes }
                        />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={4}>
                        <Button className={ this.props.classes } onClick={this.addValue}>ADD URL</Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row  columns={1}>
                    <Grid.Column mobile={16} tablet={16} computer={10}>
                        { this.state.value.split(",").map((url) => {
                            if (url !== "") {
                                // tslint:disable-next-line:max-line-length jsx-wrap-multiline
                                return (<li
                                    style={ { listStyleType: "square" } }
                                    key={ url }
                                    onClick={ () => this.removeValue(url)}
                                    className={ this.props.classes }
                                >{ url }
                                </li>);
                            }
                        })}
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }

}

export default AddURL;
