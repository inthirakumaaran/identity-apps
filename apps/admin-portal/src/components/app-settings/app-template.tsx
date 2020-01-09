import React, {useState} from "react";
import {Button, Card, Icon, Image} from "semantic-ui-react";
import {HomeTileIconImages, SampleApp} from "../../configs/ui";
import history from "../../helpers/history";

const appTemplate = (props) => {

    const navigateNew = (name, show) => {
        if (show == "true") {
            const currentvisible = viewSelect.visible;
            setSelect(
                {visible: !currentvisible}
            );
        } else {
            history.push("/application/new/" + name);
        }

    };

    const [viewSelect, setSelect] = useState({
        visible: false
    });

    return (
        <Card className="application-card recent" onClick={() => navigateNew(props.name, props.show)} link={ false }>
            <Image src={SampleApp} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span>{props.details}</span>
                </Card.Meta>
                <Card.Description>
                    {props.type}
                </Card.Description>
            </Card.Content>
            {/*<Card.Content extra>*/}
            {/*    /!*<a>*!/*/}
            {/*    /!*    <Icon name="user" />*!/*/}
            {/*    /!*    22 Friends*!/*/}
            {/*    /!*</a>*!/*/}
            {/*</Card.Content>*/}
            {viewSelect.visible &&
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='blue' onClick={() => navigateNew(props.name, false)}>
                            SAML
                        </Button>
                        <Button basic color='blue' onClick={() => navigateNew(props.name, false)}>
                            OIDC
                        </Button>
                    </div>
                </Card.Content>}
        </Card>
    );
};

export default appTemplate;
